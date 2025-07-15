'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AlertCircle, Loader2Icon } from 'lucide-react'

const registrationSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().trim().min(9, 'Telefone deve ter pelo menos 9 dígitos'),
  email: z.string().email('Email inválido'),
  emergencyContact: z.string().optional(),
  emergencyPhone: z.string().optional(),
})

type RegistrationData = z.infer<typeof registrationSchema>

export default function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (data: RegistrationData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      // Simulate API call
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          emergencyContact: data.emergencyContact,
          emergencyPhone: data.emergencyPhone,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar formulário')
      }

      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Registration error:', error)
      setSubmitError(
        error instanceof Error ? error.message : 'Erro ao enviar formulário'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 sm:p-6 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">
          Inscrição Realizada com Sucesso!
        </h3>
        <p className="text-sm md:text-base text-blue-700 mb-4">
          Obrigado por se inscrever no evento Corre com a Gente.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-4 w-full sm:w-auto">
          Nova Inscrição
        </Button>
      </div>
    )
  }

  if (submitError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center space-x-2">
        <AlertCircle className="w-5 h-5 text-red-600" />
        <p className="text-sm xs:text-base font-semibold">
          Erro: {submitError}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
      <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-4 xs:mb-6">
        Informações Pessoais
      </h3>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Seu nome completo"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1">
              Telefone *
            </label>
            <Input
              id="phone"
              {...register('phone')}
              placeholder="00000-0000"
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="seu@email.com"
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-4 xs:mb-6">
            Contato de Emergência
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="emergencyContact"
                className="block text-sm font-medium text-gray-700 mb-1">
                Nome *
              </label>
              <Input
                id="emergencyContact"
                {...register('emergencyContact')}
                placeholder="Nome do contato de emergência"
                className={errors.emergencyContact ? 'border-red-500' : ''}
              />
              {errors.emergencyContact && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.emergencyContact.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="emergencyPhone"
                className="block text-sm font-medium text-gray-700 mb-1">
                Telefone de Emergência *
              </label>
              <Input
                id="emergencyPhone"
                {...register('emergencyPhone')}
                placeholder="00000-0000"
                className={errors.emergencyPhone ? 'border-red-500' : ''}
              />
              {errors.emergencyPhone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.emergencyPhone.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <Button
          // type="submit"
          className="w-full bg-[#B8014A] hover:bg-[#99003a] text-white py-2 sm:py-3 text-sm sm:text-base"
          disabled>
          {isSubmitting ? (
            <Loader2Icon className="animate-spin" />
          ) : (
            'Inscrever-se'
          )}
        </Button>
      </form>
    </div>
  )
}
