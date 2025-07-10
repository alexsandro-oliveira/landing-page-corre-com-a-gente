'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2, User, Mail, Phone } from 'lucide-react'
import { formSchema, type FormData } from '@/lib/validations'
import { submitToGoogleSheets } from '@/lib/googleSheets'
import { cn } from '@/lib/utils'

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      const result = await submitToGoogleSheets(data)

      if (result.success) {
        setIsSubmitted(true)
        setSubmitMessage(result.message)
        reset()
      } else {
        setSubmitMessage(result.message)
      }
    } catch {
      setSubmitMessage('Erro inesperado. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewRegistration = () => {
    setIsSubmitted(false)
    setSubmitMessage('')
    reset()
  }

  if (isSubmitted) {
    return (
      <section
        id="inscricao"
        className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-green-100 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Inscrição Realizada!
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {submitMessage}
              </p>

              <button
                onClick={handleNewRegistration}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Fazer Nova Inscrição
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="inscricao"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-6">
              Inscreva-se Agora
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Preencha o formulário abaixo e junte-se a nós nesta experiência
              única.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-green-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-lg font-semibold text-gray-700 mb-3">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    {...register('nome')}
                    type="text"
                    id="nome"
                    className={cn(
                      'w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-100',
                      errors.nome
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-green-500'
                    )}
                    placeholder="Digite seu nome completo"
                  />
                </div>
                {errors.nome && (
                  <p className="mt-2 text-red-600 text-sm">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700 mb-3">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={cn(
                      'w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-100',
                      errors.email
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-green-500'
                    )}
                    placeholder="Digite seu email"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-red-600 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <label
                  htmlFor="telefone"
                  className="block text-lg font-semibold text-gray-700 mb-3">
                  Telefone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    {...register('telefone')}
                    type="tel"
                    id="telefone"
                    className={cn(
                      'w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-100',
                      errors.telefone
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-green-500'
                    )}
                    placeholder="Digite seu telefone (com DDD)"
                  />
                </div>
                {errors.telefone && (
                  <p className="mt-2 text-red-600 text-sm">
                    {errors.telefone.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg',
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary hover:bg-primary  text-white hover:shadow-xl'
                  )}>
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="w-6 h-6 animate-spin mr-3" />
                      Processando...
                    </div>
                  ) : (
                    'Confirmar Inscrição'
                  )}
                </button>
              </div>

              {/* Error Message */}
              {submitMessage && !isSubmitted && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-center">{submitMessage}</p>
                </div>
              )}

              {/* Privacy Notice */}
              <div className="pt-4 text-center">
                <p className="text-sm text-gray-500">
                  Seus dados serão utilizados apenas para comunicação sobre o
                  evento.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
