'use client'

import { forwardRef } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface Country {
  code: string
  name: string
  flag: string
  dialCode: string
}

const countries: Country[] = [
  { code: 'BR', name: 'Brasil', flag: '🇧🇷', dialCode: '+55' },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹', dialCode: '+351' },
  { code: 'ES', name: 'Espanha', flag: '🇪🇸', dialCode: '+34' },
]

interface PhoneInputProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  error?: boolean
  countryCode?: string
  onCountryChange?: (countryCode: string) => void
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value = '',
      onChange,
      placeholder = 'Número do telefone',
      className,
      error,
      countryCode = 'BR',
      onCountryChange,
      ...props
    },
    ref
  ) => {
    const selectedCountry =
      countries.find((c) => c.code === countryCode) || countries[0]

    const handlePhoneChange = (phoneNumber: string) => {
      // Remove caracteres não numéricos exceto o +
      const cleanNumber = phoneNumber.replace(/[^\d]/g, '')
      onChange?.(cleanNumber)
    }

    const handleCountryChange = (newCountryCode: string) => {
      onCountryChange?.(newCountryCode)
    }

    const formatPhoneNumber = (number: string) => {
      if (!number) return ''

      // Para Brasil, format as (XX) XXXXX-XXXX
      if (countryCode === 'BR') {
        const cleaned = number.replace(/\D/g, '')
        if (cleaned.length === 11) {
          return `(${cleaned.slice(0, 2)}) ${cleaned.slice(
            2,
            7
          )}-${cleaned.slice(7)}`
        }
        return number
      }

      // Para outros países, formatação simples
      return number.replace(/(\d{3})(\d{3})(\d{0,4})/, '$1-$2-$3').trim()
    }

    return (
      <div className={cn('flex', className)}>
        <Select value={countryCode} onValueChange={handleCountryChange}>
          <SelectTrigger className="w-[140px] rounded-r-none border-r-0 focus:z-10">
            <SelectValue>
              <div className="flex items-center gap-2">
                <span className="text-lg">{selectedCountry.flag}</span>
                <span className="text-sm font-medium">
                  {selectedCountry.dialCode}
                </span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-sm">{country.dialCode}</span>
                  <span className="text-sm text-gray-600">{country.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          ref={ref}
          value={formatPhoneNumber(value)}
          onChange={(e) => handlePhoneChange(e.target.value)}
          placeholder={placeholder}
          className={cn('rounded-l-none focus:z-10', error && 'border-red-500')}
          {...props}
        />
      </div>
    )
  }
)

PhoneInput.displayName = 'PhoneInput'

export { PhoneInput, type PhoneInputProps, countries }
