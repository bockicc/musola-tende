import type { ProductCategory } from '@/types'
import content from './content.sr'

export interface CategoryInfo {
  id: ProductCategory
  name: string
  description: string
  longDescription: string
  slug: string
  image: string
  isNew?: boolean
}

export const categoryList: ProductCategory[] = [
  'tende',
  'pergole',
  'roletne',
  'zavese',
  'komarnici',
  'zatvaranje-terasa',
  'suncobrani',
]

export const categories: CategoryInfo[] = [
  {
    id: 'tende',
    name: content.categories.tende.name,
    description: content.categories.tende.description,
    longDescription: content.categories.tende.longDescription,
    slug: 'tende',
    image: '/images/categories/tende.jpg',
  },
  {
    id: 'pergole',
    name: content.categories.pergole.name,
    description: content.categories.pergole.description,
    longDescription: content.categories.pergole.longDescription,
    slug: 'pergole',
    image: '/images/categories/pergole.jpg',
  },
  {
    id: 'roletne',
    name: content.categories.roletne.name,
    description: content.categories.roletne.description,
    longDescription: content.categories.roletne.longDescription,
    slug: 'roletne',
    image: '/images/categories/roletne.jpg',
  },
  {
    id: 'zavese',
    name: content.categories.zavese.name,
    description: content.categories.zavese.description,
    longDescription: content.categories.zavese.longDescription,
    slug: 'zavese',
    image: '/images/categories/zavese.jpg',
  },
  {
    id: 'komarnici',
    name: content.categories.komarnici.name,
    description: content.categories.komarnici.description,
    longDescription: content.categories.komarnici.longDescription,
    slug: 'komarnici',
    image: '/images/categories/komarnici.jpg',
  },
  {
    id: 'zatvaranje-terasa',
    name: content.categories['zatvaranje-terasa'].name,
    description: content.categories['zatvaranje-terasa'].description,
    longDescription: content.categories['zatvaranje-terasa'].longDescription,
    slug: 'zatvaranje-terasa',
    image: '/images/categories/zatvaranje-terasa.jpg',
    isNew: true,
  },
  {
    id: 'suncobrani',
    name: content.categories.suncobrani.name,
    description: content.categories.suncobrani.description,
    longDescription: content.categories.suncobrani.longDescription,
    slug: 'suncobrani',
    image: '/images/categories/suncobrani.jpg',
  },
]

export function getCategoryById(id: ProductCategory): CategoryInfo | undefined {
  return categories.find((c) => c.id === id)
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug)
}
