import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { CollectionPreview } from "@/components/collection-preview"
import { BrandStory } from "@/components/brand-story"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedSection />
      <CollectionPreview />
      <BrandStory />
      <Footer />
    </main>
  )
}
