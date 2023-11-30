
import { Card, CardContent, CardHeader } from "../card"


export interface RootCardUVIndexProps {
  index: number
}

export function CardUVIndex({ index }: RootCardUVIndexProps) {
  return (
    <Card className="min-h-[220px] max-h-[220px]">
      <CardHeader className="text-muted-foreground text-lg" >
        Índice UV
      </CardHeader>
      <CardContent className=" flex-col flex gap-2 justify-center items-center">
        <p className="text-6xl font-medium">{index}</p>
      </CardContent>
    </Card>
  )
}