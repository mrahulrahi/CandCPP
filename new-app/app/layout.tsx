import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import ImportBsJS from "./importBsJS";
import './globals.css'
import { Oswald, Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar';


export const oswald = Oswald({
  subsets: ['latin'], display: 'swap',
  variable: '--font-oswald',
});
export const inter = Inter({
  subsets: ['latin'], display: 'swap',
  variable: '--font-inter',
});

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
    <html lang="en">
      <ImportBsJS />
      <body className={`layout ${oswald.variable} ${inter.variable}`}>
        <Header />
        <main className="d-flex">
          <Sidebar />
          {children}</main>
        <Footer />
      </body>
    </html>
  )
}
