import React, { useEffect, useRef, useState } from 'react'
import { CloseIcon, CheckIcon } from './Icons'
import { useReservation } from '../context/ReservationContext'

const initialForm = { name: '', email: '', date: '', time: '', guests: '2' }

export default function ReservationModal() {
  const { isOpen, close } = useReservation()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  useEffect(() => {
    if (isOpen) {
      // Reset to a clean form each time the modal is opened
      setForm(initialForm)
      setErrors({})
      setSubmitted(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.date) next.date = 'Choose a date'
    if (!form.time) next.time = 'Choose a time'
    if (!form.guests || Number(form.guests) < 1) next.guests = 'At least 1 guest'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const fieldClass = (field) =>
    `w-full bg-transparent border-b py-2.5 text-charcoal placeholder:text-charcoal/35 focus:outline-none transition-colors ${
      errors[field] ? 'border-terracotta' : 'border-charcoal/25 focus:border-charcoal'
    }`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
    >
      <div className="modal-backdrop absolute inset-0 bg-charcoal/70 backdrop-blur-sm" onClick={close} />

      <div
        ref={dialogRef}
        className="modal-panel relative w-full max-w-md bg-offwhite p-8 md:p-10 max-h-[90vh] overflow-y-auto"
      >
        <span className="absolute top-0 left-0 right-0 h-1 bg-terracotta" />

        <button
          onClick={close}
          aria-label="Close reservation form"
          className="absolute top-6 right-6 text-charcoal/50 hover:text-charcoal transition-colors"
        >
          <CloseIcon />
        </button>

        {submitted ? (
          <div className="py-10 flex flex-col items-center text-center">
            <CheckIcon className="text-terracotta" />
            <h3 className="font-display text-2xl mt-6">Reservation request received.</h3>
            <p className="text-charcoal/60 mt-2">We&apos;ll see you soon.</p>
            <button
              onClick={close}
              className="label-caps mt-9 px-7 py-3 bg-charcoal text-offwhite hover:bg-terracotta transition-colors duration-300"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="label-caps text-terracotta mb-3">Reservations</p>
            <h3 id="reservation-title" className="font-display text-3xl mb-8">
              Request a table
            </h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="res-name" className="label-caps text-charcoal/50 block mb-2">
                  Name
                </label>
                <input
                  id="res-name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your full name"
                  className={fieldClass('name')}
                />
                {errors.name && <p className="text-terracotta text-xs mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="res-email" className="label-caps text-charcoal/50 block mb-2">
                  Email
                </label>
                <input
                  id="res-email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className={fieldClass('email')}
                />
                {errors.email && <p className="text-terracotta text-xs mt-1.5">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="res-date" className="label-caps text-charcoal/50 block mb-2">
                    Date
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    value={form.date}
                    onChange={update('date')}
                    className={fieldClass('date')}
                  />
                  {errors.date && <p className="text-terracotta text-xs mt-1.5">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="res-time" className="label-caps text-charcoal/50 block mb-2">
                    Time
                  </label>
                  <input
                    id="res-time"
                    type="time"
                    value={form.time}
                    onChange={update('time')}
                    className={fieldClass('time')}
                  />
                  {errors.time && <p className="text-terracotta text-xs mt-1.5">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="res-guests" className="label-caps text-charcoal/50 block mb-2">
                  Guests
                </label>
                <select
                  id="res-guests"
                  value={form.guests}
                  onChange={update('guests')}
                  className={fieldClass('guests')}
                >
                  {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="label-caps w-full mt-2 py-4 bg-terracotta text-offwhite hover:bg-clay transition-colors duration-300"
              >
                Request Reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
