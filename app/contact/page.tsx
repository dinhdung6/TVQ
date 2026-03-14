import { ContactForm } from '@/components/forms/contact-form'
import { ConsultationForm } from '@/components/forms/consultation-form'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Liên hệ - Tâm Việt Quang',
  description: 'Liên hệ với Tâm Việt Quang để được tư vấn',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Địa chỉ',
      details: '69 Ái Mộ, phường Ngọc Lâm, quận Long Biên, Hà Nội',
    },
    {
      icon: Phone,
      title: 'Điện thoại',
      details: '(+84) 123 456 789',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'tamvietquang@gmail.com',
    },
    {
      icon: Clock,
      title: 'Giờ làm việc',
      details: 'Thứ 2 - Thứ 6: 8:00 - 18:00\nThứ 7 - Chủ nhật: 9:00 - 17:00',
    },
  ]

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-lg text-gray-600">
            Chúng tôi rất vui được nghe từ bạn. Hãy liên hệ với chúng tôi ngay hôm nay
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line text-sm">{info.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>
              <p className="text-gray-600 mb-8">
                Vui lòng điền form dưới đây. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ
              </p>
              <ContactForm />
            </div>

            {/* Map/Info Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h2>

              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg h-64 flex items-center justify-center text-white mb-8 text-center">
                <span className="text-xl font-bold">Google Map sẽ được nhúng ở đây</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Trụ sở chính</h4>
                  <p className="text-gray-600">69 Ái Mộ, phường Ngọc Lâm, quận Long Biên, Hà Nội</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Liên hệ</h4>
                  <p className="text-gray-600">Email: tamvietquang@gmail.com</p>
                  <p className="text-gray-600">Phone: (+84) 123 456 789</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Mạng xã hội</h4>
                  <div className="flex gap-4">
                    <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
                      f
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
                      in
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
                      ig
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Yêu cầu tư vấn chuyên sâu
            </h2>
            <p className="text-blue-100 text-lg">
              Nếu bạn muốn được tư vấn về các giải pháp công nghệ cụ thể, vui lòng điền form bên dưới
            </p>
          </div>
          <div className="bg-white rounded-lg p-8">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Làm cách nào để đăng ký khóa học Eduverse?',
                a: 'Bạn có thể đăng ký trực tiếp trên website hoặc liên hệ với chúng tôi qua điện thoại. Chúng tôi sẽ hỗ trợ bạn hoàn thành quá trình đăng ký.',
              },
              {
                q: 'Chi phí cho các dịch vụ công nghệ là bao nhiêu?',
                a: 'Chi phí tùy thuộc vào nhu cầu cụ thể của doanh nghiệp. Chúng tôi cung cấp các gói tư vấn miễn phí để xác định giải pháp tốt nhất cho bạn.',
              },
              {
                q: 'Bạn có hỗ trợ sau bán hàng không?',
                a: 'Vâng, chúng tôi cung cấp hỗ trợ sau bán hàng toàn diện bao gồm đào tạo, bảo trì và cập nhật hệ thống.',
              },
              {
                q: 'Làm cách nào để trở thành đối tác của Tâm Việt Quang?',
                a: 'Liên hệ với chúng tôi để thảo luận về các cơ hội hợp tác. Chúng tôi luôn tìm kiếm các đối tác chiến lược.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-b pb-6 last:border-b-0">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
