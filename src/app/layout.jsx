import { PedidosProvider } from '@/context/ComidaContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Orden from '../../components/Orden'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mordisco y Sabor',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <Navbar />
        <PedidosProvider>
          {children}
          <Orden />
        </PedidosProvider>
      </body>
    </html>
  )
};