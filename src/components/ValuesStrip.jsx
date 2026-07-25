import honesty from '../assets/images/Honesty1.png'
import integrity from '../assets/images/integrity1.png'
import respect from '../assets/images/Respect1.png'
import discipline from '../assets/images/Discipline01.png'
import compassion from '../assets/images/Compassion01.png'
import responsibility from '../assets/images/Responsibility01.png'

const VALUES = [
  { label: 'Honesty',        img: honesty,        bg: 'bg-[#fde8c8]', text: 'text-[#b85c00]' },
  { label: 'Integrity',      img: integrity,      bg: 'bg-[#fdf5c2]', text: 'text-[#8a7000]' },
  { label: 'Respect',        img: respect,        bg: 'bg-[#c8f0e0]', text: 'text-[#0a7a4a]' },
  { label: 'Discipline',     img: discipline,     bg: 'bg-[#c8eef8]', text: 'text-[#0a6080]' },
  { label: 'Compassion',     img: compassion,     bg: 'bg-[#ddd0f8]', text: 'text-[#5a2da0]' },
  { label: 'Responsibility', img: responsibility, bg: 'bg-[#fcd8e0]', text: 'text-[#a01040]' },
]

export default function ValuesStrip() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
      {VALUES.map(({ label, img, bg, text }) => (
        <div
          key={label}
          className={`group flex w-[calc(50%-8px)] flex-col items-center gap-4 rounded-[1.5rem] ${bg} px-4 py-7 transition duration-300 hover:-translate-y-2 hover:shadow-lg sm:w-40 md:w-44`}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md transition group-hover:scale-110">
            <img src={img} alt={label} className="h-12 w-12 object-contain" />
          </div>
          <p className={`font-display text-sm font-bold sm:text-base ${text}`}>{label}</p>
        </div>
      ))}
    </div>
  )
}
