import React from 'react'
import { Button as NextUIButton, ButtonProps as NextUIButtonProps } from "@nextui-org/react"

export interface ButtonProps extends NextUIButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <NextUIButton {...props}>
      {label}
    </NextUIButton>
  )
}