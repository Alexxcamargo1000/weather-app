
import { Card, CardContent, CardHeader } from "../card"


export interface RootCardHumidityProps {
  percentage: number
  indicator: string
}

export function CardHumidity({ percentage, indicator }: RootCardHumidityProps) {
  return (
    <Card className="min-h-[220px] max-h-[220px]">
      <CardHeader className="text-muted-foreground text-lg" >
        Umidade
      </CardHeader>
      <CardContent className=" flex-col flex gap-2 justify-center items-center">
        <p className="text-6xl font-medium">{percentage}%</p>
        <p className="text-muted-foreground">{indicator}👍</p>
      </CardContent>
    </Card>
  )
}