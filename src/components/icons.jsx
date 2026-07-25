const base = 'h-6 w-6'

export function IconCap({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3 1 8l11 5 9-4.1V15h2V8L12 3Z"
        fill="currentColor"
      />
      <path
        d="M5 10.5V15c0 1.7 3.1 3 7 3s7-1.3 7-3v-4.5l-7 3.2-7-3.2Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  )
}

export function IconShield({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconUsers({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" strokeLinecap="round" />
      <circle cx="17" cy="8" r="2.4" opacity="0.6" />
      <path d="M15.5 14.7c2.6.4 4.5 2.3 4.5 5.3" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

export function IconBus({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="11" rx="2" />
      <path d="M3 11h18M7 16v2M17 16v2" strokeLinecap="round" />
      <circle cx="7.5" cy="19" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="19" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconSpark({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c.6 3.6 2 6.1 5 7.5-3 1.4-4.4 3.9-5 7.5-.6-3.6-2-6.1-5-7.5 3-1.4 4.4-3.9 5-7.5Z" />
      <path d="M19 15c.3 1.7.9 2.8 2.3 3.5-1.4.7-2 1.8-2.3 3.5-.3-1.7-.9-2.8-2.3-3.5 1.4-.7 2-1.8 2.3-3.5Z" opacity="0.6" />
    </svg>
  )
}

export function IconBook({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 4.5c2.5-1 5.3-1 8 0v14.5c-2.7-1-5.5-1-8 0v-14.5Z" strokeLinejoin="round" />
      <path d="M20 4.5c-2.5-1-5.3-1-8 0v14.5c2.7-1 5.5-1 8 0v-14.5Z" strokeLinejoin="round" />
    </svg>
  )
}

export function IconArrowRight({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconPhone({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" />
    </svg>
  )
}

export function IconMail({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconPin({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

export function IconClock({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
