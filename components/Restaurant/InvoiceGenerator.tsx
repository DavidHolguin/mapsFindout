'use client'

import { useState } from 'react'
import QRCode from 'qrcode.react'

export default function InvoiceGenerator() {
  const [qrCode, setQrCode] = useState('')
  const [invoiceData, setInvoiceData] = useState(null)

  const generateInvoice = () => {
    // In a real app, you would generate an invoice and get a payment link from your backend
    const mockInvoiceData = {
      invoiceNumber: Math.floor(Math.random() * 1000000),
      total: 50.00,
      paymentLink: 'https://example.com/pay/123456'
    }
    setInvoiceData(mockInvoiceData)
    setQrCode(mockInvoiceData.paymentLink)
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Generar Factura</h2>
      <button
        onClick={generateInvoice}
        className="bg-primary text-white p-2 rounded hover:bg-primary-dark mb-4"
      >
        Generar Factura y Código QR
      </button>
      {invoiceData && (
        <div className="mt-4">
          <p className="mb-2"><strong>Número de Factura:</strong> {invoiceData.invoiceNumber}</p>
          <p className="mb-2"><strong>Total:</strong> ${invoiceData.total.toFixed(2)}</p>
          <p className="mb-2"><strong>Link de Pago:</strong> {invoiceData.paymentLink}</p>
          <div className="mt-4">
            <QRCode value={qrCode} size={128} />
          </div>
        </div>
      )}
    </div>
  )
}

