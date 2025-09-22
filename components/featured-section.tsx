import { Card, CardContent } from "@/components/ui/card"

export function FeaturedSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">주요 특징</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">LUXE가 선택받는 이유를 확인해보세요</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-primary">1</div>
              </div>
              <h3 className="text-xl font-medium mb-4">프리미엄 소재</h3>
              <p className="text-muted-foreground">
                세계 최고 품질의 원단과 소재만을 엄선하여 최상의 착용감과 내구성을 제공합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-primary">2</div>
              </div>
              <h3 className="text-xl font-medium mb-4">독창적 디자인</h3>
              <p className="text-muted-foreground">
                트렌드를 선도하는 디자이너들이 창조한 독특하고 세련된 디자인을 만나보세요.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-primary">3</div>
              </div>
              <h3 className="text-xl font-medium mb-4">완벽한 서비스</h3>
              <p className="text-muted-foreground">
                개인 맞춤 스타일링부터 애프터 서비스까지 고객 만족을 위한 완벽한 서비스를 제공합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
