import {
  ReactNode,
  ComponentType,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  Dispatch,
  SetStateAction,
} from 'react'
import { UseFormRegister } from 'react-hook-form'

import {
  RouteProps as ReactDOMRouteProps,
  RouteComponentProps,
} from 'react-router-dom'
import { IconBaseProps } from 'react-icons'

export interface Children {
  children: ReactNode
}

export interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: ComponentType<RouteComponentProps>
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme: string
}

export interface ButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconBaseProps>
  color: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: Record<string, any>
  register: UseFormRegister<any>
  rules: Record<string, unknown>
  name: string
}

export interface SignUpProps {
  signUpForm: boolean
  setSignUpForm: Dispatch<SetStateAction<boolean>>
}
export interface TooltipProps {
  title: string
  className?: string
  children: ReactNode
}
