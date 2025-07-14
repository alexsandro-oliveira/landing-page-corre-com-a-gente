'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Loader2,
  Download,
  RefreshCw,
  Users,
  Calendar,
  Mail,
  Phone,
  HomeIcon,
} from 'lucide-react'
import { redirect } from 'next/navigation'

type Registration = {
  timestamp: string
  name: string
  email: string
  phone: string
  emergencyContact: string
  emergencyPhone: string
}

type ApiResponse = {
  success: boolean
  data: Registration[]
  pagination: {
    total: number
    limit: number
    offset: number
    hasMore: boolean
  }
  error?: string
  details?: string
}

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 50,
    offset: 0,
    hasMore: false,
  })

  const fetchRegistrations = async (limit = 50, offset = 0) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `/api/submit?limit=${limit}&offset=${offset}`
      )
      const data: ApiResponse = await response.json()

      if (data.success) {
        if (offset === 0) {
          setRegistrations(data.data)
        } else {
          setRegistrations((prev) => [...prev, ...data.data])
        }
        setPagination(data.pagination)
      } else {
        setError(data.error || 'Erro ao carregar dados')
      }
    } catch (err) {
      setError('Erro de conexão')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLoadMore = () => {
    fetchRegistrations(pagination.limit, pagination.offset + pagination.limit)
  }

  const handleRefresh = () => {
    setRegistrations([])
    setPagination((prev) => ({ ...prev, offset: 0 }))
    fetchRegistrations(pagination.limit, 0)
  }

  const exportToCSV = () => {
    const headers = [
      'Data/Hora',
      'Nome',
      'Email',
      'Telefone',
      'Contato Emergência',
      'Tel. Emergência',
    ]
    const csvContent = [
      headers.join(','),
      ...registrations.map((reg) =>
        [
          new Date(reg.timestamp).toLocaleString('pt-PT'),
          `"${reg.name}"`,
          reg.email,
          reg.phone,
          `"${reg.emergencyContact}"`,
          reg.emergencyPhone,
        ].join(',')
      ),
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute(
      'download',
      `inscricoes_${new Date().toISOString().split('T')[0]}.csv`
    )
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    fetchRegistrations()
  }, [])

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleString('pt-PT')
    } catch {
      return dateString
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Administração - Inscrições
              </h1>
              <p className="text-gray-600 mt-1">
                Gestão das inscrições do evento &quot;Corre com a Gente!&quot;
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => redirect('/')}>
                <HomeIcon className="w-4 h-4" />
              </Button>

              <Button
                onClick={handleRefresh}
                disabled={loading}
                variant="outline"
                className="flex items-center gap-2">
                <RefreshCw
                  className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}
                />
                Atualizar
              </Button>
              <Button
                onClick={exportToCSV}
                disabled={registrations.length === 0}
                className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Exportar CSV
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total de Inscrições
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {pagination.total}
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Carregadas</p>
                <p className="text-2xl font-bold text-gray-900">
                  {registrations.length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Última Atualização
                </p>
                <p className="text-sm text-gray-900">
                  {registrations[0]
                    ? formatDate(registrations[0].timestamp)
                    : 'N/A'}
                </p>
              </div>
              <RefreshCw className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            <p className="font-semibold">Erro:</p>
            <p>{error}</p>
          </div>
        )}

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data/Hora
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contato
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Emergência
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {registrations.map((registration, index) => (
                  <tr
                    key={`${registration.email}-${index}`}
                    className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {formatDate(registration.timestamp)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {registration.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          {registration.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          {registration.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="space-y-1">
                        <div>{registration.emergencyContact}</div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          {registration.emergencyPhone}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
              <span className="ml-2 text-gray-500">Carregando...</span>
            </div>
          )}

          {/* Empty State */}
          {!loading && registrations.length === 0 && !error && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Nenhuma inscrição encontrada</p>
            </div>
          )}

          {/* Load More Button */}
          {pagination.hasMore && !loading && (
            <div className="px-6 py-4 border-t border-gray-200">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                className="w-full">
                Carregar Mais ({pagination.total - registrations.length}{' '}
                restantes)
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
