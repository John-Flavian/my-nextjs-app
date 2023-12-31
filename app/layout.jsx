import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'John Flavian',
  description: 'My Portfolio',
  keywords: 'software engineer, web design, javascript, react, node, html, css'
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
