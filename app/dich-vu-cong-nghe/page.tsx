import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Smartphone, Globe, Database, Shield, Zap } from "lucide-react"

export default function TechServicesPage() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Phát triển Website",
      description: "Thiết kế và phát triển website chuyên nghiệp, tối ưu SEO và trải nghiệm người dùng.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Ứng dụng Mobile",
      description: "Phát triển ứng dụng di động đa nền tảng iOS và Android với công nghệ hiện đại.",
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Hệ thống quản lý",
      description: "Xây dựng hệ thống quản lý doanh nghiệp, CRM, ERP phù hợp với quy mô công ty.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Bảo mật thông tin",
      description: "Tư vấn và triển khai các giải pháp bảo mật thông tin cho doanh nghiệp.",
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Tự động hóa",
      description: "Phát triển các giải pháp tự động hóa quy trình làm việc, tăng hiệu quả.",
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Tư vấn công nghệ",
      description: "Tư vấn chuyển đổi số, lựa chọn công nghệ phù hợp với doanh nghiệp.",
    },
  ]

  const projects = [
    {
      title: "Hệ thống quản lý bán hàng",
      description: "Phát triển hệ thống quản lý bán hàng tích hợp cho chuỗi cửa hàng bán lẻ",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Ứng dụng học tập trực tuyến",
      description: "Xây dựng nền tảng học tập trực tuyến với tính năng tương tác cao",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Website thương mại điện tử",
      description: "Thiết kế và phát triển website bán hàng online với giao diện hiện đại",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Dịch vụ Công nghệ</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Đồng hành cùng doanh nghiệp Việt trong hành trình chuyển đổi số
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">Tư vấn miễn phí</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                Xem portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Dịch vụ của chúng tôi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cung cấp các giải pháp công nghệ linh hoạt, dễ ứng dụng, giúp doanh nghiệp vừa và nhỏ tiếp cận chuyển đổi
              số một cách hiệu quả.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-6 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Công nghệ chúng tôi sử dụng</h2>
            <p className="text-lg text-gray-600">Luôn cập nhật và sử dụng những công nghệ tiên tiến nhất</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL"].map((tech) => (
              <div key={tech} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-medium text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Dự án tiêu biểu</h2>
            <p className="text-lg text-gray-600">Một số dự án chúng tôi đã thực hiện thành công</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Sẵn sàng bắt đầu dự án của bạn?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp công nghệ phù hợp nhất
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">Liên hệ ngay</Button>
        </div>
      </section>
    </div>
  )
}
