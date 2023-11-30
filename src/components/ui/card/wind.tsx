
import { Card, CardContent, CardHeader } from "../card"


export interface RootCardWindProps {
  speed: number
  direction: string
}

export function CardWind({ speed, direction }: RootCardWindProps) {
  return (
    <Card className="min-h-[220px] max-h-[220px]">
      <CardHeader className="text-muted-foreground text-lg" >
        Vento
      </CardHeader>
      <CardContent className=" flex-col flex gap-2 justify-center items-center">
        <p className="text-6xl font-medium">{speed}
          <span className="text-base">{' '}km/h</span>
        </p>
        <p className="text-muted-foreground">{direction}</p>
      </CardContent>
    </Card>
  )
}