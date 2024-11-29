'use client'

import { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function Map() {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!apiKey) {
      console.error('Google Maps API key is missing')
      return
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
    })

    loader.load().then(() => {
      const mapElement = document.getElementById('map')
      if (mapElement) {
        const map = new google.maps.Map(mapElement, {
          center: { lat: 0, lng: 0 },
          zoom: 8,
        })
      }
    })
  }, [])

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>
}