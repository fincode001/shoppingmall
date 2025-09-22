import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Clock, Users, Briefcase } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/">
              <Button variant="ghost" className="mb-8 text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                홈으로 돌아가기
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">채용 정보</h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              LUXE와 함께 패션의 미래를 만들어갈 인재를 찾습니다
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Company Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">LUXE Fashion과 함께하세요</h2>
            <p className="text-lg text-muted-foreground mb-8">
              LUXE는 혁신적인 디자인과 최고의 품질로 고객에게 특별한 경험을 제공하는 프리미엄 패션 브랜드입니다. 
              우리는 창의적이고 열정적인 인재들과 함께 패션 산업의 새로운 기준을 만들어가고 있습니다.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle>다양성</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    다양한 배경과 경험을 가진 인재들이 함께 성장합니다
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <Briefcase className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle>성장 기회</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    지속적인 교육과 발전을 통해 전문성을 키워갑니다
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle>혁신</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    창의적 아이디어로 패션 산업의 미래를 선도합니다
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">채용 공고</h2>
            
            {/* Fashion Designer */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">패션 디자이너</CardTitle>
                    <CardDescription className="mt-2">
                      새로운 컬렉션의 디자인을 담당하며, 브랜드의 창의적 비전을 구현합니다.
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">정규직</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    서울시 강남구
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    주 5일 근무 (09:00-18:00)
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">자격 요건</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>패션 디자인 관련 학과 졸업 또는 동등한 경력</li>
                      <li>Adobe Creative Suite (Illustrator, Photoshop) 숙련</li>
                      <li>패션 트렌드에 대한 깊은 이해와 감각</li>
                      <li>영어 의사소통 가능 (토익 700점 이상)</li>
                      <li>3년 이상의 패션 디자인 경험</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">우대 사항</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>해외 브랜드 또는 럭셔리 브랜드 경험</li>
                      <li>패션쇼 및 컬렉션 기획 경험</li>
                      <li>패턴 메이킹 및 샘플링 경험</li>
                      <li>다양한 소재 및 텍스타일 지식</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marketing Manager */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">마케팅 매니저</CardTitle>
                    <CardDescription className="mt-2">
                      브랜드 마케팅 전략 수립 및 실행을 통해 브랜드 인지도와 매출을 향상시킵니다.
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">정규직</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    서울시 강남구
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    주 5일 근무 (09:00-18:00)
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">자격 요건</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>마케팅, 광고홍보, 경영학 관련 학과 졸업</li>
                      <li>패션/럭셔리 브랜드 마케팅 경험 3년 이상</li>
                      <li>디지털 마케팅 및 SNS 마케팅 경험</li>
                      <li>데이터 분석 도구 활용 능력 (Google Analytics, Facebook Ads Manager)</li>
                      <li>영어 의사소통 가능 (토익 700점 이상)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">우대 사항</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>패션 브랜드 런칭 또는 리브랜딩 경험</li>
                      <li>인플루언서 마케팅 및 협업 경험</li>
                      <li>크리에이티브 에이전시 경험</li>
                      <li>CRM 및 고객 데이터 분석 경험</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store Manager */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">매장 매니저</CardTitle>
                    <CardDescription className="mt-2">
                      매장 운영 전반을 관리하며 고객 서비스 품질 향상과 매출 목표 달성을 담당합니다.
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">정규직</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    서울시 강남구 (신세계백화점)
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    주 5일 근무 (10:30-20:30, 휴일 근무 포함)
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">자격 요건</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>고등학교 졸업 이상</li>
                      <li>패션/럭셔리 매장 관리 경험 2년 이상</li>
                      <li>고객 서비스 및 판매 경험</li>
                      <li>매장 운영 및 재고 관리 경험</li>
                      <li>기본적인 컴퓨터 활용 능력 (POS 시스템 등)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">우대 사항</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>백화점 매장 관리 경험</li>
                      <li>팀 리더십 및 직원 관리 경험</li>
                      <li>패션 상품 지식 및 스타일링 경험</li>
                      <li>외국어 가능자 (영어, 중국어, 일본어)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">지원 절차</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">1</span>
                  </div>
                  <CardTitle className="text-lg">온라인 지원</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    이력서와 자기소개서를 제출해주세요
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">2</span>
                  </div>
                  <CardTitle className="text-lg">서류 심사</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    제출하신 서류를 검토합니다 (1-2주)
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">3</span>
                  </div>
                  <CardTitle className="text-lg">면접</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    1차 면접 및 2차 면접을 진행합니다
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">4</span>
                  </div>
                  <CardTitle className="text-lg">최종 합격</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    최종 합격자에게 연락드립니다
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">지원 문의</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">인사팀 연락처</h3>
                <p className="text-muted-foreground mb-1">이메일: careers@luxefashion.com</p>
                <p className="text-muted-foreground mb-1">전화: 02-1234-5678</p>
                <p className="text-muted-foreground">운영시간: 평일 09:00-18:00</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">지원 시 유의사항</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 지원서는 정확한 정보로 작성해주세요</li>
                  <li>• 포트폴리오가 필요한 직무는 함께 제출해주세요</li>
                  <li>• 면접 일정은 개별 연락드립니다</li>
                  <li>• 합격자에 한해 개별 통보합니다</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


