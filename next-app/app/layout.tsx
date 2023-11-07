import './globals.css'
import type { Metadata } from 'next'
import NavBar from './NavBar'
import { Oswald, Inter } from 'next/font/google'

 
export const oswald = Oswald({ subsets: ['latin'], display: 'swap',
variable: '--font-oswald', });
export const inter = Inter({ subsets: ['latin'], display: 'swap',
variable: '--font-inter', });


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="lemonade dark">
      <body className={`layout ${oswald.variable} ${inter.variable}`}>
        <NavBar />
        <main className='pt-5'>{children}</main>
      </body>
    </html>
  )
}
