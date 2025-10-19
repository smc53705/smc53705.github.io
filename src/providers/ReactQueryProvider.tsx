import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { queryClient } from '../api/queryClient'


export function ReactQueryProvider({children}: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}