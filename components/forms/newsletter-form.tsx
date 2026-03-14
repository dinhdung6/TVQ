'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { subscribeNewsletter } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export function NewsletterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await subscribeNewsletter(email)
      toast({
        title: 'Thành công',
        description: 'Bạn đã đăng ký nhận bản tin thành công!',
      })
      setEmail('')
    } catch (error: any) {
      console.error('[v0] Newsletter error:', error)
      if (error.message?.includes('duplicate')) {
        toast({
          title: 'Thông báo',
          description: 'Email này đã được đăng ký rồi.',
          variant: 'default',
        })
      } else {
        toast({
          title: 'Lỗi',
          description: 'Không thể đăng ký. Vui lòng thử lại.',
          variant: 'destructive',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6"
        >
          {isLoading ? 'Đang gửi...' : 'Đăng ký'}
        </Button>
      </div>
    </form>
  )
}
