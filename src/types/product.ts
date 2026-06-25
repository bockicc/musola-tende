export interface Product {
  id: string
  title: string
  category:
    | 'tende'
    | 'pergole'
    | 'roletne'
    | 'zavese'
    | 'komarnici'
    | 'zatvaranje-terasa'
    | 'suncobrani'
  description: string
  longDescription: string
  image: string
  images: string[]
  material?: string
  featured: boolean
  features: string[]
  materials: string[]
}

export type ProductCategory = Product['category']

export interface ProductFilter {
  category: ProductCategory | 'all'
  material?: string | 'all'
  search: string
  sort: 'popular' | 'newest' | 'price-asc' | 'price-desc'
}
