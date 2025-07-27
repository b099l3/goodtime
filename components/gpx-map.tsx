"use client"

import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet'
import { useEffect, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface GpxMapProps {
  gpxUrl: string
}

export default function GpxMap({ gpxUrl }: GpxMapProps) {
  const [positions, setPositions] = useState<[number, number][]>([])

  useEffect(() => {
    async function loadGpx() {
      try {
        const res = await fetch(gpxUrl)
        const text = await res.text()
        const parser = new DOMParser()
        const xml = parser.parseFromString(text, 'application/xml')
        const trkpts = Array.from(xml.getElementsByTagName('trkpt'))
        const coords = trkpts.map((pt) => [
          parseFloat(pt.getAttribute('lat') || '0'),
          parseFloat(pt.getAttribute('lon') || '0'),
        ]) as [number, number][]
        setPositions(coords)
      } catch (err) {
        console.error('Failed to load GPX', err)
      }
    }
    loadGpx()
  }, [gpxUrl])

  if (!positions.length) {
    return <p>Loading route...</p>
  }

  const start = positions[0]
  const end = positions[positions.length - 1]

  return (
    <MapContainer
      center={start}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Polyline positions={positions} color='#FF0000' />
      <Marker position={start} icon={L.icon({ iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png', shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png' })}>
        <Popup>Start</Popup>
      </Marker>
      <Marker position={end} icon={L.icon({ iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png', shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png' })}>
        <Popup>Finish</Popup>
      </Marker>
    </MapContainer>
  )
}

