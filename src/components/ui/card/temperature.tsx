import { MoveDown, MoveUp } from "lucide-react"
import { Card, CardContent, CardHeader } from "../card"


export interface RootCardTemperatureProps {
  max: string
  min: string
}

export function CardTemperature({ max, min }: RootCardTemperatureProps) {
  return (
    <Card className="min-h-[220px] max-h-[220px]">
      <CardHeader className="text-muted-foreground text-lg" >
        Temperatura
      </CardHeader>
      <CardContent className="pt-6 flex gap-2 justify-center items-center">
        <p className="text-4xl font-medium ">{min}</p>
        <MoveDown  className="text-red-700"  />
        <p className="text-4xl font-medium ">{max}</p>
         <MoveUp className="text-blue-700" />

      </CardContent>
    </Card>
  )
}