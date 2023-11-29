import { Card } from "../card"

export interface RootCardInfoProps {
  children: React.ReactNode
}

export function CardInfoRoot({ children }: RootCardInfoProps) {
  return (
    <Card className="min-h-[220px] flex flex-col">
      {children}
    </Card>
  )
}