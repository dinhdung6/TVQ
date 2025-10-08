import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Monitor, Users, Lightbulb, BookOpen } from "lucide-react"

export default function HomePage() {
  const programs = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Môn học STEAM",
      description: "Học liên môn tích hợp: Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học qua hoạt động thực tế",
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Lập trình cơ bản",
      description: "Làm quen với tư duy logic, thuật toán thông qua lập trình tùy theo độ tuổi của trẻ.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Robotics & AI sơ cấp",
      description: "Tương tác với robot, cảm biến, và hiểu các AI vận hành trong đời sống.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: "Tư duy phân biện và sáng tạo",
      description: "Khuyến khích học sinh đặt câu hỏi, thử nghiệm, nhiều cách giải quyết vấn đề khác nhau.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Kỹ năng làm việc nhóm",
      description: "Học sinh làm việc theo nhóm nhỏ, học cách phân công, hợp tác và giải quyết xung đột.",
    },
  ]

  const news = [
    {
      date: "15/03/2024",
      title: "TVQ khai giảng khóa học STEAM mùa xuân 2024",
      description: "Chương trình học mới với nhiều hoạt động thú vị, giúp trẻ khám phá thế giới khoa học...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      date: "15/03/2024",
      title: "TVQ khai giảng khóa học STEAM mùa xuân 2024",
      description: "Chương trình học mới với nhiều hoạt động thú vị, giúp trẻ khám phá thế giới khoa học...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      date: "15/03/2024",
      title: "TVQ khai giảng khóa học STEAM mùa xuân 2024",
      description: "Chương trình học mới với nhiều hoạt động thú vị, giúp trẻ khám phá thế giới khoa học...",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Eduverse</h1>
              <p className="text-xl text-gray-600 mb-8">
                Vũ trụ học tập STEAM cho bé, giúp thế hệ trẻ phát triển toàn diện về tư duy, sáng tạo và công nghệ
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full">
                Đăng Ký Học Thử Miễn Phí
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl flex items-center justify-center">
                <Image
                  src="/images/Asset1.png"
                  alt="Child learning"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Đối tác của chúng tôi</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">eduverse</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outstanding Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium mb-2">Lĩnh vực hoạt động</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Dịch vụ nổi bật</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tại Tâm Việt Quang, chúng tôi luôn tìm kiếm và phát triển những giải pháp sáng tạo giúp con người học tập,
              làm việc và sống tốt hơn từ những điều nhỏ nhất.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
              Eduverse - Giáo dục STEAM
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
              Phát triển Công nghệ
            </Button>
          </div>

          {/* Technology Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Dịch vụ Công nghệ
                <br />
                Đồng hành cùng doanh nghiệp Việt
              </h3>
              <p className="text-gray-600 mb-6">
                Cung cấp các giải pháp công nghệ linh hoạt, dễ ứng dụng, giúp doanh nghiệp vừa và nhỏ tiếp cận chuyển
                đổi số một cách hiệu quả.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Xem chi tiết dịch vụ</Button>
            </div>
            <div className="relative">
              <Image
                src="/images/Asset2.png"
                alt="Technology Services"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* STEAM Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Eduverse – Giáo dục STEAM
                <br />
                cho thế hệ trẻ
              </h3>
              <p className="text-gray-600 mb-6">
                Mang đến môi trường học tập sáng tạo, nơi trẻ em được tiếp cận với lập trình, robotics, AI và tư duy
                thiết kế từ sớm.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Khám phá Eduverse</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/Asset3.png"
                alt="STEAM Education 1"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="/images/Asset4.png"
                alt="STEAM Education 2"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="/images/Asset5.png"
                alt="STEAM Education 3"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="/images/Asset6.png"
                alt="STEAM Education 4"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Teach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium mb-2">Nội dung chương trình học</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Chúng tôi dạy điều gì?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {programs.map((program, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{program.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Lộ trình học theo từng cấp độ</h3>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-blue-600 font-medium mb-2">Tin tức và Sự kiện</p>
            <h2 className="text-4xl font-bold text-gray-900">Chia sẻ kiến thức</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {news.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[Hình ảnh tin tức {index + 1}]</span>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link href="#" className="text-red-600 hover:text-red-700 font-medium">
                    Đọc thêm →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
              Xem thêm
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
