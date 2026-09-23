import {
  siClaude,
  siGmail,
  siGooglecalendar,
  siGoogledrive,
  siGooglesheets,
  siHubspot,
  siInstagram,
  siMercadopago,
  siMeta,
  siN8n,
  siNotion,
  siOdoo,
  siShopify,
  siSupabase,
  siTelegram,
  siWhatsapp,
  siWoocommerce,
  siWordpress,
  type SimpleIcon,
} from "simple-icons"

import { Marquee } from "@/components/ui/marquee"

const fila1: SimpleIcon[] = [siWhatsapp, siGmail, siGooglesheets, siGooglecalendar, siGoogledrive, siNotion, siHubspot, siClaude, siN8n]
const fila2: SimpleIcon[] = [siShopify, siWoocommerce, siMercadopago, siOdoo, siMeta, siInstagram, siTelegram, siSupabase, siWordpress]

// Logos en un solo tono (currentColor) para respetar la paleta monocromática.
function Logo({ icon }: { icon: SimpleIcon }) {
  return (
    <div className="flex items-center gap-3 px-6 text-gris-texto transition-colors duration-300 hover:text-grafito">
      <svg viewBox="0 0 24 24" className="size-7 shrink-0" fill="currentColor" aria-hidden="true">
        <path d={icon.path} />
      </svg>
      <span className="text-lg font-semibold tracking-tight whitespace-nowrap">{icon.title}</span>
    </div>
  )
}

export function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee pauseOnHover className="[--duration:45s] [--gap:0.5rem]">
        {fila1.map((icon) => (
          <Logo key={icon.slug} icon={icon} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="mt-2 [--duration:50s] [--gap:0.5rem]">
        {fila2.map((icon) => (
          <Logo key={icon.slug} icon={icon} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-niebla sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-niebla sm:w-40" />
    </div>
  )
}
