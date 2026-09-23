import { cn } from "@/lib/utils"

// Geometría exacta de assets/web/isotipo.svg, con la animación de entrada de la marca:
// trazo por trazo → nodos con "pop" → entra el cursor → ripple en la punta.
export function IsotipoAnimado({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Isotipo AIgentic Bolivianotech"
      fill="none"
      className={cn("text-blanco", className)}
    >
      <g stroke="currentColor" strokeLinecap="round" fill="none">
        <circle className="draw d1" pathLength={1} cx="100" cy="96" r="52" strokeWidth="3.4" />
        <line className="draw d2" pathLength={1} x1="48" y1="96" x2="152" y2="96" strokeWidth="3.4" />
        <line className="draw d2" pathLength={1} x1="100" y1="44" x2="100" y2="148" strokeWidth="3.4" />
        <path className="draw d3" pathLength={1} d="M100,44 A26,52 0 0,0 100,148" strokeWidth="3.4" />
        <path className="draw d3" pathLength={1} d="M100,44 A26,52 0 0,1 100,148" strokeWidth="3.4" />
        <path className="draw d4" pathLength={1} d="M 46.4,141.0 A 70,70 0 1 1 169.4,87.2" strokeWidth="1.6" strokeOpacity="0.28" />
        <line className="draw d5" pathLength={1} x1="148" y1="52" x2="168" y2="36" strokeWidth="2" strokeOpacity="0.6" />
      </g>
      <circle className="pop" style={{ animationDelay: "1.0s" }} cx="100" cy="44" r="4.4" fill="currentColor" />
      <circle className="pop" style={{ animationDelay: "1.08s" }} cx="152" cy="96" r="4.4" fill="currentColor" />
      <circle className="pop" style={{ animationDelay: "1.16s" }} cx="100" cy="148" r="4.4" fill="currentColor" />
      <circle className="pop" style={{ animationDelay: "1.24s" }} cx="48" cy="96" r="4.4" fill="currentColor" />
      <circle className="pop" style={{ animationDelay: "1.32s" }} cx="100" cy="96" r="6.2" fill="currentColor" />
      <circle className="pop" style={{ animationDelay: "1.4s" }} cx="168" cy="36" r="3.6" fill="currentColor" />
      <circle className="ripple" cx="124" cy="112" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        className="cursor-in"
        d="M124,112 L124,140 L131,133.4 L135.4,143.4 L141.2,140.6 L136.8,130.6 L146,130.6 Z"
        fill="currentColor"
      />
    </svg>
  )
}
