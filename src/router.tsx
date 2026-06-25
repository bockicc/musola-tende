import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  basepath: '/musola-tende',
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
