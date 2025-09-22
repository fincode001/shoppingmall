import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CollectionPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">시즌 컬렉션</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            이번 시즌의 트렌드를 반영한 특별한 컬렉션을 만나보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="group cursor-pointer overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                <img
                  src="/elegant-woman-in-minimalist-fashion-outfit.jpg"
                  alt="여성 컬렉션"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">여성 컬렉션</h3>
                <p className="text-muted-foreground">우아함과 모던함의 완벽한 조화</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                <img
                  src="/stylish-man-in-contemporary-fashion.jpg"
                  alt="남성 컬렉션"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">남성 컬렉션</h3>
                <p className="text-muted-foreground">세련된 남성을 위한 프리미엄 스타일</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                <img
                  src="/luxury-fashion-accessories-and-bags.jpg"
                  alt="액세서리 컬렉션"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">액세서리</h3>
                <p className="text-muted-foreground">스타일을 완성하는 특별한 디테일</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            전체 컬렉션 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
