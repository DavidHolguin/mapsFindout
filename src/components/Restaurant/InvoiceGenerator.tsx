import { useState } from 'react'

export default function InvoiceGenerator() {
  const [qrCode, setQrCode] = useState('')

  const generateInvoice = () => {
    // In a real app, you would generate a QR code here
    setQrCode('https://example.com/payment')
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Generar Factura</h2>
      <button
        onClick={generateInvoice}
        className="bg-primary text-white p-2 rounded hover:bg-primary-dark"
      >
        Generar Factura y Código QR
      </button>
      {qrCode && (
        <div className="mt-2">
          <p>Código QR generado: {qrCode}</p>
          {/* In a real app, you would display the QR code image here */}
        </div>
      )}
    </div>
  )
}

