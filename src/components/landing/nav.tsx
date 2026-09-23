"use client"

import { useEffect, useState } from "react"

import { basePath } from "@/lib/base-path"
import { cn } from "@/lib/utils"

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
]

// Transparente sobre el hero oscuro → vidrio esmerilado claro al salir del hero.
export function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("inicio")
    const onScroll = () => {
      const limit = (hero?.offsetHeight ?? 600) - 80
      setSolid(window.scrollY > limit)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-14 transition-[background,color,box-shadow] duration-500 ease-(--ease)",
        solid
          ? "bg-white/80 text-grafito shadow-[inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-[1.8]"
          : "text-niebla"
      )}
    >
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-2" aria-label="AIgentic Bolivianotech — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/isotipo-simple.svg`}
            alt=""
            className={cn("size-7 shrink-0 transition-[filter] duration-500 sm:size-8", !solid && "invert")}
          />
          <span className="text-sm font-semibold tracking-tight whitespace-nowrap sm:text-[15px]">AIgentic Bolivianotech</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="opacity-80 transition-opacity hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className={cn(
            "shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-nowrap transition-colors sm:px-4 sm:text-sm",
            solid ? "bg-grafito text-blanco hover:bg-negro" : "bg-blanco text-negro hover:bg-niebla"
          )}
        >
          Agenda una demo
        </a>
      </nav>
    </header>
  )
}
