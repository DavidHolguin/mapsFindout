import { useState, useEffect } from 'react'

const mockProducts = [
  {
    id: 8,
    name: "BURGUER BUCAROS",
    description: "La favorita de la Ciudad\r\nCarne, pollo desmechado en tártara, pilla y arepa.",
    price: "18.50",
    image_url: "http://res.cloudinary.com/dc3vcn9g6/image/upload/v1729200330/products/kc3jt3rrpyrmdgzgedrz.jpg",
  },
  {
    id: 7,
    name: "BURGUER MELANI",
    description: "La preferida de la Casa.\r\nCarne, pollo desmechado en tártara, pilla y arepa.",
    price: "17.50",
    image_url: "http://res.cloudinary.com/dc3vcn9g6/image/upload/v1729200342/products/rjeln2hssrmkfos2yzl9.jpg",
  },
  // Add more mock products here
]

export default function RestaurantMenu({ restaurant, addToCart }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // In a real app, you would fetch this data from an API based on the selected restaurant
    setProducts(mockProducts)
  }, [restaurant])

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Menú de {restaurant.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow p-4">
            <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold mb-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-primary text-white p-2 rounded hover:bg-primary-dark"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

