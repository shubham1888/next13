import './globals.css'
// import { Inter } from 'next/font/google'
import Header from './components/Header'

// const inter = Inter({ subsets: ['latin'] })
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Netflix',
  description: 'Developed by shubham shah',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
