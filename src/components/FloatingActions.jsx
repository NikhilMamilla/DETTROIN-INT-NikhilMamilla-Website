import { SITE } from '../data/site'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-soft transition hover:scale-110 hover:bg-[#20bc5a]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7" fill="white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A12.94 12.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10S21.523 25 16 25c-1.97 0-3.803-.569-5.348-1.551l-.373-.236-4.6 1.076 1.098-4.469-.254-.39A9.952 9.952 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.172 5.5c-.213 0-.558.08-.852.398-.294.317-1.12 1.094-1.12 2.668 0 1.574 1.145 3.094 1.305 3.308.16.214 2.24 3.613 5.535 4.922 2.729 1.078 3.283.863 3.876.809.594-.054 1.912-.782 2.18-1.535.268-.754.268-1.4.187-1.535-.08-.134-.294-.214-.615-.374-.32-.16-1.894-.934-2.188-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-.987 1.2-.16.16-.32.18-.613.027-.32-.16-1.313-.484-2.5-1.543-.925-.824-1.55-1.84-1.733-2.15-.16-.32-.013-.48.133-.64.134-.134.32-.347.48-.52.16-.174.213-.294.32-.508.107-.213.054-.4-.027-.56-.08-.16-.7-1.734-.97-2.36-.254-.61-.508-.52-.7-.534-.187-.013-.4-.013-.614-.013z" />
        </svg>
      </a>

      {/* Phone */}
      <a
        href={SITE.phoneHref}
        aria-label="Call the school"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-700 shadow-soft transition hover:scale-110 hover:bg-primary-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="white">
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  )
}
