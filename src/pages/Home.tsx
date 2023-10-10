import { Card, CardHeader } from "@/components/ui/card";
import { CardWeather } from "@/components/ui/card-weather";



export default function Home() {
  return (
    <>
    
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

            <h3 className="font-semibold text-2xl">Today's Highlights</h3>

            <div className="grid grid-cols-3 grid-rows-2">
              <Card>
                <CardHeader>
                  H
                </CardHeader>
              </Card>
            </div>
    </>

  )
}