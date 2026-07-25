import { SITE } from '../data/site'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-soft transition hover:scale-105"
      >
        ✆
      </a>
      <a
        href={SITE.phoneHref}
        aria-label="Call the school"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-2xl text-white shadow-soft transition hover:scale-105"
      >
        ☎
      </a>
    </div>
  )
}
