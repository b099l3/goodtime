// app/components/GpxMapWrapper.tsx
"use client"

import dynamic from "next/dynamic"
import type { GpxMapProps } from "./gpx-map"

// Dynamically import GpxMap with SSR disabled
const GpxMap = dynamic(() => import('./gpx-map'), { ssr: false })

export default function GpxMapWrapper(props: GpxMapProps) {
  return <GpxMap {...props} />
}
