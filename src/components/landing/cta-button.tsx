"use client"

import { ArrowRight } from "lucide-react"

import { ShimmerButton } from "@/components/ui/shimmer-button"
import { cn } from "@/lib/utils"

// ShimmerButton renderiza un <button>; navegamos al hacer clic para no anidar <a><button>.
export function CtaButton({
  href,
  children,
  variant = "dark",
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: "dark" | "light"
  className?: string
}) {
  const light = variant === "light"
  return (
    <ShimmerButton
      onClick={() => window.location.assign(href)}
      background={light ? "#FFFFFF" : "#000000"}
      shimmerColor={light ? "#86868B" : "#FFFFFF"}
      shimmerDuration="2.6s"
      className={cn(
        "gap-2 px-7 py-3.5 text-[15px] font-semibold tracking-tight",
        light ? "border-black/10 text-negro" : "border-white/15 text-blanco",
        className
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
    </ShimmerButton>
  )
}
