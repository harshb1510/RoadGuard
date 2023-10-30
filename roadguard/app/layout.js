import { Inter } from 'next/font/google'
import './globals.css'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RoadGuard',
  description: 'Simplified Traffic Movement',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Topbar/>
        {children}
        
        </body>
    </html>
  )
}
