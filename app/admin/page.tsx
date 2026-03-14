'use client'

import { useAuth } from '@/lib/auth-context'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table } from '@/components/ui/table'
import { Spinner } from '@/components/ui/spinner'
import { BarChart3, FileText, Mail, MessageSquare } from 'lucide-react'

export default function AdminDashboard() {
  const { user, isAuthenticated, loading: authLoading } = useAuth()
  const [stats, setStats] = useState({
    submissions: 0,
    consultations: 0,
    subscribers: 0,
    news: 0,
  })
  const [recentSubmissions, setRecentSubmissions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated && !authLoading) {
      window.location.href = '/login'
      return
    }

    if (isAuthenticated && user) {
      loadDashboardData()
    }
  }, [isAuthenticated, user, authLoading])

  const loadDashboardData = async () => {
    try {
      // Get submission counts
      const { count: submissions } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact' })

      const { count: consultations } = await supabase
        .from('consultation_requests')
        .select('*', { count: 'exact' })

      const { count: subscribers } = await supabase
        .from('newsletter_subscribers')
        .select('*', { count: 'exact' })
        .eq('is_active', true)

      const { count: news } = await supabase
        .from('news_posts')
        .select('*', { count: 'exact' })
        .eq('is_published', true)

      setStats({
        submissions: submissions || 0,
        consultations: consultations || 0,
        subscribers: subscribers || 0,
        news: news || 0,
      })

      // Get recent submissions
      const { data } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

      setRecentSubmissions(data || [])
    } catch (error) {
      console.error('Error loading dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="h-8 w-8" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your website content and submissions</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Contact Submissions</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.submissions}</p>
                </div>
                <MessageSquare className="h-10 w-10 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Consultations</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.consultations}</p>
                </div>
                <BarChart3 className="h-10 w-10 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Subscribers</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.subscribers}</p>
                </div>
                <Mail className="h-10 w-10 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Published News</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.news}</p>
                </div>
                <FileText className="h-10 w-10 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Submissions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Contact Submissions</CardTitle>
              <Link href="/admin/submissions">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {recentSubmissions.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No submissions yet</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Subject</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSubmissions.map((submission) => (
                      <tr key={submission.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">{submission.name}</td>
                        <td className="py-3 px-4 text-gray-600">{submission.email}</td>
                        <td className="py-3 px-4 text-gray-600">{submission.subject}</td>
                        <td className="py-3 px-4 text-gray-500 text-sm">
                          {new Date(submission.created_at).toLocaleDateString('vi-VN')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/news">
                <Button variant="outline" className="w-full justify-start">
                  Manage News Posts
                </Button>
              </Link>
              <Link href="/admin/projects">
                <Button variant="outline" className="w-full justify-start">
                  Manage Projects
                </Button>
              </Link>
              <Link href="/admin/services">
                <Button variant="outline" className="w-full justify-start">
                  Manage Services
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Submissions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/submissions">
                <Button variant="outline" className="w-full justify-start">
                  Contact Submissions
                </Button>
              </Link>
              <Link href="/admin/consultations">
                <Button variant="outline" className="w-full justify-start">
                  Consultation Requests
                </Button>
              </Link>
              <Link href="/admin/subscribers">
                <Button variant="outline" className="w-full justify-start">
                  Newsletter Subscribers
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
