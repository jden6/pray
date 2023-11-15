import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/app/_trpc/Provider'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/app/_components/sessionProvider'
import { Theme } from '@radix-ui/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pray all of the time',
  description: 'Pray everyone all of the time for us',
}

export default async function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>

          <Provider>
            <SessionProvider session={session}>
              {children}
            </SessionProvider>
          </Provider>
        </Theme>
      </body>
    </html>
  )
}
