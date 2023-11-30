
import { CardWeather } from "@/components/ui/card-weather";
import { CardHumidity } from "@/components/ui/card/humidity";
import { CardSun } from "@/components/ui/card/sun";
import { CardTemperature } from "@/components/ui/card/temperature";
import { CardWind } from "@/components/ui/card/wind";



export default function Home() {
  return (
    <div className="flex-1">
      <div className="flex gap-4 my-6 ">
        <CardWeather data={{
          temperature: 12,
          variation: 2
        }} />
        <CardWeather data={{
          temperature: 12,
          variation: 2
        }} />
        <CardWeather data={{
          temperature: 12,
          variation: 2
        }} />
        <CardWeather data={{
          temperature: 12,
          variation: 2
        }} />
      </div>

      <h3 className="font-semibold text-2xl mb-8">Destaques de hoje</h3>

      <div className="grid gap-3 grid-cols-3 grid-rows-2">
        <CardTemperature
          max="20"
          min="10"
        />
        <CardSun
          sunrise="6:00"
          sunset="6:00"
        />
        <CardWind 
        speed={20} 
        direction="NW" 
        />
        <CardHumidity
          indicator="Moderada"
          percentage={12}
        />

      </div>
    </div>

  )
}