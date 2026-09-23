import { BarChart3, MessageCircle, Workflow } from "lucide-react"

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { Particles } from "@/components/ui/particles"
import { CtaButton } from "@/components/landing/cta-button"
import { IsotipoAnimado } from "@/components/landing/isotipo-animado"
import { LogoMarquee } from "@/components/landing/logo-marquee"
import { MotionProvider } from "@/components/landing/motion-provider"
import { Nav } from "@/components/landing/nav"
import { basePath } from "@/lib/base-path"

// TODO: reemplazar por el enlace real de contacto (p. ej. https://wa.me/591XXXXXXXX o mailto:...)
const CONTACTO_URL = "#contacto"

const servicios = [
  {
    icon: MessageCircle,
    titulo: "Atención al cliente 24/7",
    texto:
      "Un agente en WhatsApp, Instagram o tu web que responde, cotiza y agenda al instante, y deriva a tu equipo cuando hace falta.",
  },
  {
    icon: Workflow,
    titulo: "Automatización de procesos",
    texto:
      "Facturas, reportes, seguimiento de ventas y tareas repetitivas que hoy consumen horas, resueltas solas mientras tu equipo se enfoca en lo importante.",
  },
  {
    icon: BarChart3,
    titulo: "Datos que se entienden",
    texto:
      "Pregúntale a tus números en lenguaje natural — ventas, inventario, clientes — y recibe respuestas claras para decidir más rápido.",
  },
]

const pasos = [
  {
    n: "01",
    titulo: "Diagnóstico",
    texto: "Conocemos tu operación y detectamos dónde un agente ahorra más tiempo y dinero.",
  },
  {
    n: "02",
    titulo: "Construcción",
    texto: "Diseñamos el agente, lo conectamos a tus sistemas y lo probamos con casos reales de tu negocio.",
  },
  {
    n: "03",
    titulo: "Acompañamiento",
    texto: "Lo medimos, lo ajustamos y lo hacemos crecer junto a tu equipo.",
  },
]

export default function Home() {
  return (
    <MotionProvider>
      <Nav />
      <main className="flex-1">
        {/* ── Hero: degradé animado + partículas ── */}
        <section
          id="inicio"
          className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-negro px-4 pt-24 pb-20 text-center text-niebla sm:px-6"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            <div className="hero-gradient" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000_85%)]" />
          </div>
          <Particles
            className="absolute inset-0 -z-10 motion-reduce:hidden"
            quantity={140}
            ease={70}
            staticity={40}
            color="#ffffff"
          />

          <div className="mx-auto flex w-full max-w-5xl flex-col items-center [&>*]:w-full">
            <div className="flex justify-center">
              <IsotipoAnimado className="mb-8 size-24 sm:size-28" />
            </div>

            <BlurFade delay={0.2}>
              <p className="eyebrow">AIgentic Bolivianotech</p>
            </BlurFade>

            <BlurFade delay={0.4} blur="12px" offset={12}>
              <h1 className="mt-5 text-[clamp(38px,7vw,80px)] leading-[1.02] font-bold tracking-[-0.035em] text-balance text-blanco">
                Agentes de IA que trabajan{" "}
                <AnimatedGradientText
                  speed={1.4}
                  colorFrom="#86868B"
                  colorTo="#FFFFFF"
                  className="font-bold"
                >
                  para tu negocio.
                </AnimatedGradientText>
              </h1>
            </BlurFade>

            <BlurFade delay={0.6}>
              <p className="mx-auto mt-6 max-w-2xl text-[clamp(16px,2vw,20px)] leading-relaxed text-pretty text-gris">
                Diseñamos e implementamos agentes de inteligencia artificial que atienden a tus clientes,
                automatizan tus procesos y ordenan tus datos — con tecnología global y criterio local.
              </p>
            </BlurFade>

            <BlurFade delay={0.8}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CtaButton href="#contacto" variant="light">
                  Agenda una demo
                </CtaButton>
                <a
                  href="#servicios"
                  className="rounded-full px-6 py-3 text-[15px] font-medium text-niebla/80 transition-colors hover:text-blanco"
                >
                  Ver servicios
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={1.0}>
              <p className="mt-14 text-sm font-medium tracking-wide text-gris-texto">
                Inteligencia con raíces.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* ── Integraciones: marquee de logos ── */}
        <section className="bg-niebla py-20 sm:py-24">
          <BlurFade inView className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="eyebrow">Integraciones</p>
            <h2 className="mt-4 text-[clamp(26px,3.6vw,40px)] leading-tight font-bold tracking-[-0.02em] text-balance text-grafito">
              Se conecta con las herramientas que ya usas.
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.15} className="mt-12">
            <LogoMarquee />
          </BlurFade>
        </section>

        {/* ── Servicios ── */}
        <section id="servicios" className="scroll-mt-14 bg-blanco px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <BlurFade inView className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Servicios</p>
              <h2 className="mt-4 text-[clamp(30px,5.2vw,56px)] leading-[1.05] font-bold tracking-[-0.02em] text-balance text-grafito">
                Un equipo que no duerme, hecho a la medida de tu empresa.
              </h2>
            </BlurFade>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {servicios.map((s, i) => (
                <BlurFade key={s.titulo} inView delay={0.1 + i * 0.12} className="h-full">
                  <article className="group h-full rounded-3xl border border-plata/70 bg-niebla/60 p-8 transition-[transform,box-shadow,background] duration-500 ease-(--ease) hover:-translate-y-1 hover:bg-blanco hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)]">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-grafito text-blanco transition-transform duration-500 ease-(--ease) group-hover:scale-110">
                      <s.icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-grafito">{s.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-gris-texto">{s.texto}</p>
                  </article>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* ── Proceso ── */}
        <section
          id="proceso"
          className="relative isolate scroll-mt-14 overflow-hidden bg-negro px-4 py-24 text-niebla sm:px-6 sm:py-32"
        >
          <Particles
            className="absolute inset-0 -z-10 motion-reduce:hidden"
            quantity={60}
            ease={90}
            color="#86868B"
          />
          <div className="mx-auto max-w-6xl">
            <BlurFade inView className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Cómo trabajamos</p>
              <h2 className="mt-4 text-[clamp(30px,5.2vw,56px)] leading-[1.05] font-bold tracking-[-0.02em] text-balance text-blanco">
                De la idea al agente en producción.
              </h2>
            </BlurFade>

            <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
              {pasos.map((p, i) => (
                <li key={p.n} className="bg-negro">
                  <BlurFade inView delay={0.1 + i * 0.15} className="h-full p-8 sm:p-10">
                    <span className="text-sm font-semibold tracking-[0.22em] text-gris">{p.n}</span>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-blanco">{p.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-gris">{p.texto}</p>
                  </BlurFade>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Declaración de marca ── */}
        <section className="bg-niebla px-4 py-28 text-center sm:px-6 sm:py-36">
          <div className="mx-auto max-w-4xl">
            <BlurFade inView>
              <p className="eyebrow">Hecho en Bolivia</p>
            </BlurFade>
            <BlurFade inView delay={0.15} blur="12px">
              <h2 className="mt-5 text-[clamp(34px,6vw,68px)] leading-[1.02] font-bold tracking-[-0.03em] text-balance text-grafito">
                Tecnología global.
                <br />
                <span className="text-gris">Raíces bolivianas.</span>
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <p className="mx-auto mt-7 max-w-2xl text-[clamp(16px,2vw,20px)] leading-relaxed text-pretty text-gris-texto">
                Entendemos cómo se trabaja aquí — el trato con el cliente, los horarios, la forma de vender — y lo
                llevamos a herramientas de clase mundial.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* ── Contacto ── */}
        <section
          id="contacto"
          className="relative isolate scroll-mt-14 overflow-hidden bg-negro px-4 py-28 text-center text-niebla sm:px-6 sm:py-36"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            <div className="hero-gradient opacity-70" />
          </div>
          <Particles
            className="absolute inset-0 -z-10 motion-reduce:hidden"
            quantity={90}
            ease={70}
            color="#ffffff"
          />
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center [&>*]:w-full">
            <BlurFade inView blur="12px">
              <h2 className="text-[clamp(32px,5.6vw,64px)] leading-[1.04] font-bold tracking-[-0.03em] text-balance text-blanco">
                ¿Listo para sumar{" "}
                <AnimatedGradientText speed={1.4} colorFrom="#86868B" colorTo="#FFFFFF" className="font-bold">
                  tu primer agente?
                </AnimatedGradientText>
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.15}>
              <p className="mx-auto mt-6 max-w-xl text-[clamp(16px,2vw,20px)] leading-relaxed text-pretty text-gris">
                Cuéntanos qué tarea le quita más tiempo a tu equipo y te mostramos cómo un agente puede resolverla.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.3} className="mt-10 flex justify-center">
              <CtaButton href={CONTACTO_URL} variant="light">
                Hablemos
              </CtaButton>
            </BlurFade>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-blanco px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/lockup.svg`} alt="AIgentic Bolivianotech — Inteligencia con raíces" className="h-14 w-auto" />
          <p className="text-sm text-gris-texto">© {new Date().getFullYear()} AIgentic Bolivianotech</p>
        </div>
      </footer>
    </MotionProvider>
  )
}
