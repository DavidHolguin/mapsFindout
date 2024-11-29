import { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function Map() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    })

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 8,
      })
    })
  }, [])

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>
}

