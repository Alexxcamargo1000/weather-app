import { Aside } from "@/components/aside";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardHeader } from "@/components/ui/card";
import { CardWeather } from "@/components/ui/card-weather";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";



export default function Home() {
  return (
    <div className="h-screen w-full bg-muted">
      <div className="grid grid-cols-app">
        <Aside />
        <div className="col-start-2 flex flex-col h-screen container ">
          <div className="p-8 flex justify-between">
          <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
              </TabsList>
            </Tabs>
            <ModeToggle />
          </div>
          <div className="flex-1 p-8">
           

            <div className="grid grid-cols-7 gap-4 my-6 ">
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
          </div>
        </div>
      </div>

    </div>
  )
}