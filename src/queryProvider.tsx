import React, { type ReactNode } from 'react'

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function useGlobalErrors() {
  const queryCache = new QueryCache({})

  const mutationCache = new MutationCache({})

  return { queryCache, mutationCache }
}

function QueryProvider({ children }: { children: ReactNode }) {
  const { queryCache, mutationCache } = useGlobalErrors()

  const queryClient = new QueryClient({
    queryCache,
    mutationCache,
    defaultOptions: {
      queries: {
        staleTime: 10000,
        retry: true,
        refetchOnWindowFocus: true,
      },
      mutations: { retry: false, onSuccess: () => queryCache.clear() },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default React.memo(QueryProvider)
