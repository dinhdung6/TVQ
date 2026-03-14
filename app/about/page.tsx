import { HeroWithVideo } from '@/components/sections/hero-with-video'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Users, Target, Lightbulb, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Về chúng tôi - Tâm Việt Quang',
  description: 'Tìm hiểu về đội ngũ, tầm nhìn, sứ mệnh của Tâm Việt Quang',
}

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Sáng tạo',
      description: 'Chúng tôi luôn tìm tòi những ý tưởng mới, những giải pháp sáng tạo để giải quyết các thách thức',
    },
    {
      icon: Target,
      title: 'Tập trung',
      description: 'Mọi nỗ lực của chúng tôi đều hướng tới một mục tiêu rõ ràng: phát triển con người',
    },
    {
      icon: Users,
      title: 'Cộng tác',
      description: 'Chúng tôi tin rằng thế mạnh của chúng tôi nằm ở khả năng làm việc nhóm và hợp tác',
    },
  ]

  const team = [
    {
      name: 'Nguyễn Văn A',
      position: 'Giám đốc Điều hành',
      bio: 'Hơn 15 năm kinh nghiệm trong lĩnh vực giáo dục công nghệ',
    },
    {
      name: 'Trần Thị B',
      position: 'Trưởng phòng Giáo dục',
      bio: 'Chuyên gia về STEAM education và phát triển chương trình',
    },
    {
      name: 'Lê Minh C',
      position: 'Trưởng phòng Công nghệ',
      bio: 'Kỹ sư phần mềm, chuyên gia về AI và robotics',
    },
    {
      name: 'Phạm Hồng D',
      position: 'Trưởng phòng Marketing',
      bio: 'Chuyên gia digital marketing và branding',
    },
  ]

  const timeline = [
    {
      year: '2018',
      title: 'Thành lập công ty',
      description: 'Tâm Việt Quang được thành lập với sứ mệnh giáo dục STEAM',
    },
    {
      year: '2019',
      title: 'Khai trương Eduverse',
      description: 'Mở trung tâm học STEAM đầu tiên tại Hà Nội',
    },
    {
      year: '2020',
      title: 'Mở rộng toàn quốc',
      description: 'Phát triển đến 5 thành phố lớn trong cả nước',
    },
    {
      year: '2021',
      title: 'Bắt đầu dịch vụ công nghệ',
      description: 'Cung cấp giải pháp công nghệ cho doanh nghiệp',
    },
    {
      year: '2022',
      title: 'Hơn 1000 học sinh',
      description: 'Đạt mốc 1000 học sinh học tập tại Eduverse',
    },
    {
      year: '2024',
      title: 'Nâng cấp hệ thống',
      description: 'Ra mắt nền tảng Eduverse online và mở rộng dịch vụ AI',
    },
  ]

  return (
    <main>
      {/* Hero Section with Video */}
      <HeroWithVideo
        videoSrc="/videos/hero-about.mp4"
        tagline="ABOUT US"
        title="Khởi nguồn sáng tạo Vũng bước tương lai"
        subtitle="Nơi công nghệ, giáo dục và sáng tạo hợp tụ để tạo nên giải pháp phục vụ con người"
        primaryCta={{
          text: 'Tìm hiểu thêm',
          href: '#story',
        }}
        secondaryCta={{
          text: 'Liên hệ với chúng tôi',
          href: '/contact',
        }}
      />

      {/* Company Story */}
      <section id="story" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Câu chuyện của chúng tôi</h2>
              <p className="text-lg text-gray-600 mb-4">
                Tâm Việt Quang được thành lập với một thúc đẩy đơn giản nhưng mạnh mẽ: giúp thế hệ trẻ phát triển toàn diện thông qua giáo dục STEAM và công nghệ.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Chúng tôi tin rằng giáo dục không chỉ là truyền đạt kiến thức, mà còn là phát triển tư duy sáng tạo, kỹ năng giải quyết vấn đề và khả năng hợp tác.
              </p>
              <p className="text-lg text-gray-600">
                Hôm nay, chúng tôi tự hào phục vụ hơn 1000 học sinh tại 15 thành phố, và tiếp tục mở rộng các dịch vụ công nghệ cho doanh nghiệp.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg h-96 flex items-center justify-center text-white text-center p-6">
              <span className="text-2xl font-bold">Tâm Việt Quang - Nơi khởi đầu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh của chúng tôi</h3>
              <p className="text-gray-600 text-lg">
                Cung cấp những cơ hội học tập chất lượng cao, nơi trẻ em được phát triển toàn diện về tư duy, sáng tạo, kỹ năng công nghệ và nhân phẩm. Giúp doanh nghiệp Việt tiếp cận công nghệ tiên tiến một cách dễ dàng và hiệu quả.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn của chúng tôi</h3>
              <p className="text-gray-600 text-lg">
                Trở thành nền tảng giáo dục và công nghệ hàng đầu ở Đông Nam Á, nơi những ý tưởng sáng tạo được biến thành hiện thực, và con người được phát triển hết tiềm năng của họ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hành trình của chúng tôi
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 md:w-1/2">
                    <div className={`bg-white rounded-lg p-6 ${idx % 2 === 0 ? 'md:text-right' : ''} shadow-sm hover:shadow-md transition-shadow`}>
                      <span className="text-blue-600 font-bold text-lg">{item.year}</span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-lg text-gray-600">
              Những người tài năng, đam mê và hết lòng vì sứ mệnh chung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Muốn cùng chúng tôi xây dựng tương lai?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Hãy liên hệ với chúng tôi để tìm hiểu thêm về các cơ hội hợp tác
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold">
              Liên hệ ngay <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
