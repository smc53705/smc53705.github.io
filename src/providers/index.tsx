import { ReactQueryProvider } from './ReactQueryProvider'

export function GlobalProviders({children}: React.PropsWithChildren) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>

}