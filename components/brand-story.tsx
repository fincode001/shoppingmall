export function BrandStory() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">브랜드 철학</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              LUXE는 단순히 옷을 파는 것이 아닌, 라이프스타일을 제안합니다. 우리는 각 개인의 독특함을 존중하며, 그들만의
              스타일을 찾아갈 수 있도록 돕습니다.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              지속 가능한 패션을 추구하며, 품질과 디자인에서 타협하지 않는 것이 우리의 약속입니다. 모든 제품은
              장인정신으로 제작되어 오랫동안 사랑받을 수 있습니다.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">년의 경험</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">만족한 고객</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">프리미엄 품질</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src="/luxury-fashion-atelier-with-designer-working.jpg" alt="브랜드 스토리" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
