import { ReactNode } from 'react'

export interface FormInputProps {
  children: ReactNode
  type: string
  placeholder: string
  id: string
  htmlFor: string
}
