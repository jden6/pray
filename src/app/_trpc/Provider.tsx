'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import { trpc } from '@/app/_trpc/client'
import { httpBatchLink } from '@trpc/client'

export default function Provider ({ children }
  : { children: ReactNode }
) {
  const [queryClient] = useState(() => new QueryClient({}))
  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/api/trpc',
      })
    ]
  }))

  return <trpc.Provider queryClient={queryClient} client={trpcClient}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </trpc.Provider>
}