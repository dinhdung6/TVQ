export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  created_at?: string
}

export interface ConsultationRequest {
  id?: string
  name: string
  email: string
  phone: string
  company?: string
  service_type: 'eduverse' | 'technology' | 'both'
  message?: string
  created_at?: string
}

export interface NewsletterSubscriber {
  id?: string
  email: string
  subscribed_at?: string
  unsubscribed_at?: string
  is_active?: boolean
}

export interface NewsPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  image_url?: string
  published_at: string
  author?: string
  category?: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  image_url?: string
  category: 'erp' | 'cms' | 'web' | 'ar' | 'ai' | 'marketing'
  technologies?: string[]
  link?: string
  published_at?: string
}

export interface UserProfile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  role?: 'user' | 'admin'
  created_at: string
  updated_at?: string
}

export interface FormError {
  field?: string
  message: string
}

export interface FormSuccess {
  message: string
  id?: string
}
