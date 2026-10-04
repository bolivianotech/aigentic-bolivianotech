import { CALENDAR_BOOKING_URL } from "@/lib/contacto"

// Google Calendar entrega la página de reservas con fondo claro: la montamos sobre una tarjeta blanca.
export function AgendarCita() {
  if (!CALENDAR_BOOKING_URL) return null
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-blanco shadow-[0_24px_80px_-24px_rgba(0,0,0,0.6)]">
      <iframe
        src={CALENDAR_BOOKING_URL}
        title="Agenda una cita con AIgentic Bolivianotech"
        loading="lazy"
        className="block h-[720px] w-full border-0 sm:h-[640px]"
      />
    </div>
  )
}
