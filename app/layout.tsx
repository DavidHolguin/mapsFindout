import '@/styles/globals.css'
import { SessionProvider } from '@/contexts/SessionContext'

export const metadata = {
  title: 'Findout - Delivery App',
  description: 'Sistema de domicilios tipo Rappi con ofertas de usuarios a drivers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}

