import { ReactNode } from 'react'

export interface FormInputProps {
  children: ReactNode
  type: string
  placeholder: string
  id: string
  htmlFor: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
