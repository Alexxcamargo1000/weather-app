import { Sun } from "lucide-react";
import { Card } from "./card";

export interface CardWeatherProps { 
  data: {
    temperature: number;
    variation: number;
  }
 }

export function CardWeather({ data }: CardWeatherProps) {
  return (
    <Card className="flex max-w-[200px] items-center justify-center flex-col gap-2 p-4 w-full">
      <span>Sun</span>
      <Sun className="w-6 h-6" />
      <div className="flex gap-1">
        <span>{data.temperature}°C /</span>
        <span className="text-muted-foreground/50">{data.variation}°C</span>
      </div>
    </Card>



  )
}