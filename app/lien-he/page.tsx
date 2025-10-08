"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Địa chỉ",
      content: "69 Ái Mộ, phường Ngọc Lâm, quận Long Biên, Hà Nội",
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Điện thoại",
      content: "0967692780",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      content: "tamvietquang@gmail.com",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 8:00 - 17:30\nThứ 7: 8:00 - 12:00",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi. Hãy để lại thông tin để được tư vấn miễn phí!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">Gửi tin nhắn cho chúng tôi</CardTitle>
                <p className="text-gray-600">Điền thông tin vào form bên dưới, chúng tôi sẽ liên hệ lại trong 24h</p>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Họ và tên *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Chủ đề
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Nhập chủ đề"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Nội dung tin nhắn *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Send className="w-4 h-4 mr-2" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14895.147638088545!2d105.85632266330508!3d21.0412106316281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abd7ea4c69a1%3A0xaf596217408f3318!2zNjkgUC4gw4FpIE3hu5ksIELhu5MgxJDhu4EsIExvbmcgQmnDqm4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1759928294415!5m2!1svi!2s"
                      width={600}
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl shadow-md w-full"
                    />
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Liên hệ nhanh</h3>
                  <p className="text-gray-600 mb-4">Cần hỗ trợ gấp? Gọi hotline hoặc chat với chúng tôi ngay!</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Gọi ngay
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                      <Mail className="w-4 h-4 mr-2" />
                      Gửi email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Câu hỏi thường gặp</h2>
            <p className="text-lg text-gray-600">Một số câu hỏi khách hàng thường quan tâm</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Thời gian phản hồi là bao lâu?</h3>
                <p className="text-gray-600">
                  Chúng tôi cam kết phản hồi trong vòng 24 giờ làm việc. Đối với các trường hợp khẩn cấp, vui lòng gọi
                  hotline để được hỗ trợ ngay lập tức.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Có tư vấn miễn phí không?</h3>
                <p className="text-gray-600">
                  Có, chúng tôi cung cấp tư vấn miễn phí cho tất cả khách hàng. Bạn có thể đặt lịch hẹn qua form liên hệ
                  hoặc gọi trực tiếp.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Làm việc với khách hàng ở xa như thế nào?</h3>
                <p className="text-gray-600">
                  Chúng tôi có thể làm việc từ xa thông qua các công cụ họp trực tuyến. Đối với các dự án lớn, chúng tôi
                  sẵn sàng đến tận nơi tư vấn.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Chi phí dịch vụ như thế nào?</h3>
                <p className="text-gray-600">
                  Chi phí phụ thuộc vào quy mô và độ phức tạp của dự án. Chúng tôi sẽ báo giá chi tiết sau khi tìm hiểu
                  yêu cầu cụ thể của bạn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
