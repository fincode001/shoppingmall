import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance mb-8">
            세련된 스타일과
            <br />
            <span className="font-normal">완벽한 품질</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
            LUXE는 현대적인 감각과 시대를 초월한 우아함을 결합하여 당신만의 독특한 스타일을 완성합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              컬렉션 둘러보기
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              브랜드 스토리
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
