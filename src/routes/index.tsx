import { Hero } from '@/components/sections/Hero'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { FeaturedCategory } from '@/components/sections/FeaturedCategory'
import { AboutSplit } from '@/components/sections/AboutSplit'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <FeaturedCategory />
      <AboutSplit />
    </>
  )
}
