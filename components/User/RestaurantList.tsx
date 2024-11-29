'use client'

import { useState, useEffect } from 'react'

const mockRestaurants = [
  { id: 11, name: "BURGUER BUCAROS", category: { name: "Fast Food" } },
  { id: 12, name: "BURGUER MELANI", category: { name: "Fast Food" } },
]

export default function RestaurantList({ onSelectRestaurant }) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    setRestaurants(mockRestaurants)
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Restaurantes</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="mb-2">
            <button
              onClick={() => onSelectRestaurant(restaurant)}
              className="w-full text-left p-2 bg-white rounded shadow hover:bg-gray-100"
            >
              <span className="font-bold">{restaurant.name}</span>
              <span className="ml-2 text-gray-600">{restaurant.category.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

