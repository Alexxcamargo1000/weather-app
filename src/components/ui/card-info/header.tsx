import { ComponentProps, ReactNode } from "react"
import { CardHeader } from "../card"

interface CardInfoHeaderProps extends ComponentProps<typeof CardHeader> {
  children: ReactNode
}

export function CardInfoHeader({ children, ...props }: CardInfoHeaderProps) {
  return (
    <CardHeader className="text-muted-foreground text-lg" {...props}>{children}</CardHeader>
  )
}