import React, { createContext, useContext, useMemo, useState, useCallback } from 'react'

const ReservationContext = createContext(null)

export function ReservationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close])

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}

export function useReservation() {
  const ctx = useContext(ReservationContext)
  if (!ctx) {
    throw new Error('useReservation must be used within a ReservationProvider')
  }
  return ctx
}
