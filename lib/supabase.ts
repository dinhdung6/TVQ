import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database tables
export type ContactSubmission = {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: 'pending' | 'reviewed' | 'responded'
  created_at: string
  updated_at: string
}

export type NewsletterSubscriber = {
  id: string
  email: string
  subscribed_at: string
  unsubscribed_at?: string
}

export type ConsultationRequest = {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  service_type: string
  message?: string
  status: 'pending' | 'contacted' | 'completed'
  created_at: string
  updated_at: string
}

export type NewsPost = {
  id: string
  title: string
  slug: string
  content?: string
  excerpt?: string
  featured_image_url?: string
  author?: string
  status: 'draft' | 'published' | 'archived'
  published_at?: string
  created_at: string
  updated_at: string
}

export type TechnologyProject = {
  id: string
  title: string
  slug: string
  category: string
  description?: string
  image_url?: string
  demo_url?: string
  technologies?: string[]
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  created_at: string
  updated_at: string
}

// Helper functions
export async function submitContactForm(data: Omit<ContactSubmission, 'id' | 'status' | 'created_at' | 'updated_at'>) {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([{ ...data, status: 'pending' }])
    .select()

  if (error) throw error
  return result
}

export async function subscribeNewsletter(email: string) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }])
    .select()

  if (error) throw error
  return data
}

export async function submitConsultationRequest(data: Omit<ConsultationRequest, 'id' | 'status' | 'created_at' | 'updated_at'>) {
  const { data: result, error } = await supabase
    .from('consultation_requests')
    .insert([{ ...data, status: 'pending' }])
    .select()

  if (error) throw error
  return result
}

export async function getPublishedNewsPosts(limit = 10, offset = 0) {
  const { data, error } = await supabase
    .from('news_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) throw error
  return data
}

export async function getNewsPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('news_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) throw error
  return data
}

export async function getPublishedProjects(category?: string, limit = 10, offset = 0) {
  let query = supabase
    .from('technology_projects')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query.range(offset, offset + limit - 1)

  if (error) throw error
  return data
}

export async function getProjectBySlug(slug: string) {
  const { data, error } = await supabase
    .from('technology_projects')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) throw error
  return data
}
