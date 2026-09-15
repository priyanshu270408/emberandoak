import React from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

export function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <line x1="12" y1="4" x2="12" y2="19" />
      <polyline points="6,13 12,19 18,13" />
    </svg>
  )
}

export function LeafIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" {...base} {...props}>
      <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14z" />
      <path d="M5 19c3-6 6-9 11-11" />
    </svg>
  )
}

export function HourglassIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" {...base} {...props}>
      <path d="M6 3h12" />
      <path d="M6 21h12" />
      <path d="M7 3c0 5 5 6.5 5 9s-5 4-5 9" />
      <path d="M17 3c0 5-5 6.5-5 9s5 4 5 9" />
    </svg>
  )
}

export function CupIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" {...base} {...props}>
      <path d="M5 8h11v6a5.5 5.5 0 0 1-5.5 5.5H10A5.5 5.5 0 0 1 5 14V8z" />
      <path d="M16 9.5h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 3.5c-.7.8-.7 1.6 0 2.4" />
      <path d="M12 3.5c-.7.8-.7 1.6 0 2.4" />
    </svg>
  )
}

export function ChairIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" {...base} {...props}>
      <path d="M6 4v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4" />
      <path d="M8 15v5" />
      <path d="M16 15v5" />
      <path d="M6 9h12" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <path d="M6 3h3l1.5 4.5L8.5 9a11 11 0 0 0 6.5 6.5l1.5-2 4.5 1.5V18a2 2 0 0 1-2 2C11 20 4 13 4 5a2 2 0 0 1 2-2z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
      <path d="M4.5 6.5 12 12l7.5-5.5" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" {...base} {...props}>
      <path d="M14 21v-8h2.7l.4-3.2H14V7.7c0-.9.3-1.6 1.7-1.6h1.5V3.2C16.9 3.1 15.8 3 14.6 3 12 3 10.2 4.6 10.2 7.4v2.4H7.5V13h2.7v8z" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="7.5,12.5 10.5,15.5 16.5,9" />
    </svg>
  )
}

export function DirectionsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <polygon points="3,11 21,4 14,21 11,13 3,11" />
    </svg>
  )
}
