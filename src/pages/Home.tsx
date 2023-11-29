
import { CardInfo } from "@/components/ui/card-info";
import { CardWeather } from "@/components/ui/card-weather";



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

      <h3 className="font-semibold text-2xl mb-8">Today's Highlights</h3>

      <div className="grid grid-cols-3 grid-rows-2">
        <CardInfo.Root>
          <CardInfo.Header>
            Wind status
          </CardInfo.Header>
          <CardInfo.Content wind>
            11
          </CardInfo.Content>
        </CardInfo.Root>
      </div>
    </div>

  )
}