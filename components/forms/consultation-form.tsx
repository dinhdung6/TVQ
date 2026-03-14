'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitConsultationRequest } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface ConsultationFormProps {
  serviceType?: string
}

export function ConsultationForm({ serviceType = '' }: ConsultationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_type: serviceType,
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await submitConsultationRequest(formData)
      toast({
        title: 'Thành công',
        description: 'Yêu cầu tư vấn của bạn đã được gửi. Chúng tôi sẽ liên hệ với bạn sớm.',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_type: serviceType,
        message: '',
      })
    } catch (error) {
      console.error('[v0] Consultation form error:', error)
      toast({
        title: 'Lỗi',
        description: 'Không thể gửi yêu cầu. Vui lòng thử lại.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Họ và tên
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập họ và tên"
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Số điện thoại
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+84 (123) 456-7890"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Công ty
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Tên công ty"
            className="w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-2">
          Loại dịch vụ
        </label>
        <select
          id="service_type"
          name="service_type"
          value={formData.service_type}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Chọn dịch vụ</option>
          <option value="erp">ERP Solutions</option>
          <option value="cms">CMS Solutions</option>
          <option value="web-design">Web Design</option>
          <option value="marketing">Marketing Technology</option>
          <option value="ar">AR Solutions</option>
          <option value="ai">AI Solutions</option>
          <option value="other">Khác</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Chi tiết thêm
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mô tả nhu cầu của bạn"
          className="w-full min-h-32"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2"
      >
        {isLoading ? 'Đang gửi...' : 'Yêu cầu tư vấn'}
      </Button>
    </form>
  )
}
