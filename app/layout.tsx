import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

// <CHANGE> Updated to use DM Sans for premium restaurant aesthetic
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Bella Vista - Premium Dining Experience',
  description: 'Experience exquisite cuisine in an elegant atmosphere at Bella Vista Restaurant',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',   // ✅ add this
    apple: '/favicon.ico',      // ✅ optional, supports iOS
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}