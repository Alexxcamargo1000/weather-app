import { MoveDown, MoveUp } from "lucide-react"
import { Card, CardContent, CardHeader } from "../card"


export interface RootCardSunProps {
  sunrise: string
  sunset: string
}

export function CardSun({sunrise, sunset}: RootCardSunProps) {
  return (
    <Card className="min-h-[220px] max-h-[220px]">
      <CardHeader className="text-muted-foreground text-lg" >
        Nascer do sol
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-center">
        <div className="flex gap-2">
          <div className="p-2 rounded-full bg-yellow-400 border-yellow-100 border-2 text-yellow-50 relative">
            <span className="absolute inset-0 border-2 rounded-full border-orange-300" />
            <MoveUp className="z-10" />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-medium ">{sunrise} AM</p>
            <span className="text-sm text-muted-foreground">-1m 46s</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="p-2 rounded-full bg-yellow-400 border-yellow-100 border-2 text-yellow-50 relative">
            <span className="absolute inset-0 border-2 rounded-full border-orange-300" />
            <MoveDown className="z-10" />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-medium ">{sunset} PM</p>
            <span className="text-sm text-muted-foreground">-1m 46s</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}