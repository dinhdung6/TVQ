import { Facebook, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-400 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cần thêm nguồn lực để phát triển?</h2>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
            Nhận tư vấn miễn phí ngay
          </Button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trụ sở</h3>
            <p className="text-sm leading-relaxed">
              69 Ái Mộ, phường Ngọc Lâm
              <br />
              quận Long Biên, Hà Nội
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Phone:</span> (+84) 123 456 789
              </div>
              <div>
                <span className="font-medium">Email:</span> tamvietquang@gmail.com
              </div>
              <div>
                <span className="font-medium">Website:</span> tamvietquang.vn
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
            <div className="space-y-2 text-sm">
              <div>Eduverse - Giáo dục STEAM</div>
              <div>Giải pháp công nghệ</div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Đăng ký nhận thông tin mới nhất</h3>
            <div className="flex space-x-2">
              <Input
                placeholder="Nhập email tại đây"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
