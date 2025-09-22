export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">LUXE</h3>
            <p className="text-primary-foreground/80 mb-6">
              세련된 스타일과 완벽한 품질을 제공하는 프리미엄 패션 브랜드입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">쇼핑</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  여성 컬렉션
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  남성 컬렉션
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  액세서리
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  세일
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">고객 서비스</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  배송 안내
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  교환/반품
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  사이즈 가이드
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  고객센터
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">회사 정보</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  브랜드 스토리
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  매장 안내
                </a>
              </li>
              <li>
                <a href="/careers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  채용 정보
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2024 LUXE Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
