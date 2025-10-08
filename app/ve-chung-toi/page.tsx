import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Tận tâm",
      description: "Chúng tôi luôn đặt khách hàng làm trung tâm, tận tâm trong từng dự án và dịch vụ.",
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Chất lượng",
      description: "Cam kết mang đến những sản phẩm và dịch vụ chất lượng cao nhất.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Hợp tác",
      description: "Xây dựng mối quan hệ đối tác bền vững, cùng nhau phát triển.",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Sáng tạo",
      description: "Không ngừng đổi mới, sáng tạo để mang đến những giải pháp tối ưu.",
    },
  ]

  const team = [
    {
      name: "Lý Tấn Đạt",
      position: "CEO & Founder",
      description: "10+ năm kinh nghiệm trong lĩnh vực công nghệ và giáo dục",
      image: "/images/Asset12.jpg",
    },
    {
      name: "Lưu Bá Anh",
      position: "CTO",
      description: "Chuyên gia công nghệ với nhiều năm kinh nghiệm phát triển sản phẩm",
      image: "/images/Asset13.jpg",
    },
    {
      name: "Nguyễn Thắng Thành",
      position: "Head of Education",
      description: "Chuyên gia giáo dục STEAM với bằng thạc sĩ giáo dục học",
      image: "/images/Asset14.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Khởi nguồn sáng tạo
              <br />
              Vững bước tương lai
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Nơi công nghệ, giáo dục và sáng tạo hội tụ
              <br />
              Chúng tôi không chỉ tạo ra sản phẩm, mà tạo nên giải pháp phục vụ con người
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Tìm hiểu về chúng tôi
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg bg-transparent"
              >
                Xem các lĩnh vực hoạt động
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Câu chuyện của chúng tôi</h2>
              <p className="text-lg text-gray-600 mb-6">
                Tâm Việt Quang được thành lập với sứ mệnh mang công nghệ và giáo dục chất lượng cao đến gần hơn với mọi
                người. Chúng tôi tin rằng giáo dục và công nghệ là hai yếu tố then chốt để xây dựng một tương lai tốt
                đẹp hơn.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Từ những ngày đầu khởi nghiệp, chúng tôi đã không ngừng nỗ lực để phát triển các sản phẩm và dịch vụ có
                ý nghĩa, góp phần vào sự phát triển của cộng đồng và xã hội.
              </p>
              <p className="text-lg text-gray-600">
                Ngày hôm nay, với đội ngũ chuyên gia giàu kinh nghiệm và tâm huyết, chúng tôi tự hào là đối tác tin cậy
                của nhiều doanh nghiệp và tổ chức giáo dục trên toàn quốc.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/Asset15.jpg"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh</h3>
                <p className="text-gray-600 text-lg">
                  Mang đến những giải pháp công nghệ và giáo dục tiên tiến, giúp cá nhân và doanh nghiệp phát triển bền
                  vững trong thời đại số.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn</h3>
                <p className="text-gray-600 text-lg">
                  Trở thành công ty hàng đầu Việt Nam trong lĩnh vực công nghệ giáo dục và chuyển đổi số, góp phần xây
                  dựng một xã hội thông minh và phát triển.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Giá trị cốt lõi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Những giá trị này định hướng mọi hoạt động của chúng tôi và là nền tảng để xây dựng niềm tin với khách
              hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Đội ngũ lãnh đạo</h2>
            <p className="text-lg text-gray-600">Những con người tài năng và tâm huyết đang dẫn dắt Tâm Việt Quang</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Thành tựu của chúng tôi</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Dự án hoàn thành</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">Khách hàng tin tưởng</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-gray-600">Năm kinh nghiệm</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Chuyên gia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Cùng chúng tôi xây dựng tương lai</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi đồng hành cùng bạn trong hành trình phát triển và thành công
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">Liên hệ với chúng tôi</Button>
        </div>
      </section>
    </div>
  )
}
