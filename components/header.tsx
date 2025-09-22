import { Button } from "@/components/ui/button"
import { Menu, ShoppingBag, User } from "lucide-react"

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="ml-4 md:ml-0">
              <h1 className="text-2xl font-bold tracking-tight">LUXE</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              컬렉션
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              브랜드 스토리
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              매장 안내
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              고객 서비스
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
