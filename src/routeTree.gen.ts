import { createRootRouteWithContext, createRoute } from '@tanstack/react-router'
import RootLayout from './routes/__root'
import HomePage from './routes/index'
import ProductsPage from './routes/proizvodi'
import ProductDetailPage from './routes/proizvodi.$slug'
import GalleryPage from './routes/galerija'
import ContactPage from './routes/kontakt'
import AboutPage from './routes/o-nama'

interface RouterContext {}

export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
})

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/proizvodi',
  component: ProductsPage,
})

export const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/proizvodi/$slug',
  component: ProductDetailPage,
  loader: async ({ params }) => {
    const { getProductBySlug } = await import('@/data/products')
    const product = getProductBySlug(params.slug)
    return { product }
  },
})

export const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/galerija',
  component: GalleryPage,
})

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/kontakt',
  component: ContactPage,
})

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/o-nama',
  component: AboutPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  productsRoute,
  productDetailRoute,
  galleryRoute,
  contactRoute,
  aboutRoute,
])

export { routeTree }
