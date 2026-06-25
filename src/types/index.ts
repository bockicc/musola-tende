export type { Product, ProductCategory, ProductFilter } from './product'
export type { ContactFormData } from './contact'

export interface KPI {
  value: number | string
  suffix: string
  label: string
}

export interface Reference {
  id: string
  name: string
  category: string
  image: string
  year: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface ContactInfo {
  address: string
  phone1: string
  phone2: string
  email: string
  workingHours: string
  mapsLink: string
}
