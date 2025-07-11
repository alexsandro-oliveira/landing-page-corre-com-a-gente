'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, User, Mail, Phone } from 'lucide-react'
import * as z from 'zod'

const registrationSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Telefone deve ter pelo menos 9 dígitos'),
  emergencyContact: z.string().min(2, 'Contato de emergência é obrigatório'),
  emergencyPhone: z
    .string()
    .min(9, 'Telefone de emergência deve ter pelo menos 9 dígitos'),
  terms: z.boolean().refine((val) => val === true, {
    message: 'Deve aceitar os termos e condições',
  }),
})
type RegistrationForm = z.infer<typeof registrationSchema>

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  })

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log('Registration data:', data)
      setSubmitSuccess(true)
      reset()

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Registration error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="inscricao"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-700 mb-3 xs:mb-4">
            Inscreva-se Agora
          </h2>
          <p className="text-base xs:text-lg text-gray-600 max-w-2xl mx-auto">
            Garante já a sua participação neste evento único. Preencha o
            formulário abaixo e junte-se a nós!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-center">
              <p className="text-sm xs:text-base font-semibold">
                Inscrição realizada com sucesso! Receberá um email de
                confirmação em breve.
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 xs:space-y-6">
            {/* Personal Information */}
            <div className="bg-white p-4 xs:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-4 xs:mb-6">
                Informações Pessoais
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 xs:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      className="w-full pl-10 xs:pl-12 pr-4 py-2 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chart-1 focus:border-transparent text-sm xs:text-base"
                      placeholder="Seu nome completo"
                      {...register('name')}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 xs:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      className="w-full pl-10 xs:pl-12 pr-4 py-2 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chart-1 focus:border-transparent text-sm xs:text-base"
                      placeholder="seu.email@exemplo.com"
                      {...register('email')}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 xs:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      className="w-full pl-10 xs:pl-12 pr-4 py-2 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chart-1 focus:border-transparent text-sm xs:text-base"
                      placeholder="123 456 789"
                      {...register('phone')}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white p-4 xs:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-4 xs:mb-6">
                Contato de Emergência
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
                <div>
                  <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                    Nome do Contato *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chart-1 focus:border-transparent text-sm xs:text-base"
                    placeholder="Nome do contato de emergência"
                    {...register('emergencyContact')}
                  />
                  {errors.emergencyContact && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.emergencyContact.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                    Telefone de Emergência *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chart-1 focus:border-transparent text-sm xs:text-base"
                    placeholder="123 456 789"
                    {...register('emergencyPhone')}
                  />
                  {errors.emergencyPhone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.emergencyPhone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="bg-white p-4 xs:p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-3 mb-4 xs:mb-6">
                <input
                  type="checkbox"
                  className="mt-1 text-chart-1 focus:ring-chart-1 border-gray-300 rounded"
                  {...register('terms')}
                />
                <label className="text-sm xs:text-base text-gray-700">
                  Aceito os{' '}
                  <a href="#" className="text-chart-1 hover:underline">
                    termos e condições
                  </a>{' '}
                  e autorizo o uso dos meus dados para fins de organização do
                  evento.
                </label>
              </div>
              {errors.terms && (
                <p className="mb-4 text-sm text-red-600">
                  {errors.terms.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 xs:py-4 px-6 xs:px-8 rounded-lg font-semibold text-base xs:text-lg hover:bg-chart-1/90 focus:ring-2 focus:ring-chart-1 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processando...</span>
                  </>
                ) : (
                  <span>Confirmar Inscrição</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
