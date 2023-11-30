import { Input } from "./ui/input";
import { Cloud, CloudRain, Sun } from "lucide-react";
import { Separator } from "./ui/separator";
import { api } from "@/lib/api";
import { useState, FormEvent }from 'react'
export function Aside() {
  const [location , setLocation] = useState('')
  const [loading , setLoading] = useState(false)

  async function handleGetLocation(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
   const response = await api.get("forecast.json" , {
      params: {
        q: location
      }
    })
    setLoading(false)

    console.log(response.data)
    
  }


  return (
    <div className="p-8 fixed inset-0 max-w-[350px] border-r border-border bg-background ">
      <div className="space-y-8 flex flex-col h-full">
        <form onSubmit={handleGetLocation}>
        <Input 
          placeholder="Buscar por lugares..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          disabled={loading}
       />
        </form>
        <Sun className="w-80 h-80" />

        <span className="font-thin text-8xl">12°C</span>
        <div className="flex items-end gap-1 px-4 mb-4">
          <span>Monday,</span>
          <span className="text-muted-foreground/50  ">16:00</span>
        </div>

        <Separator className="my-16" />

        <div className="flex flex-col gap-y-4">
          <span className="flex items-center gap-2"><Cloud className="w-4 h-4"/> Mastly Claudy</span>
          <span className="flex items-center gap-2"><CloudRain className="w-4 h-4 text-primary"/> Rain - 30%</span>
        </div>

        <div className="flex items-center justify-center flex-1">
          <strong className="text-lg">New York, NY, USA</strong>
        </div>
      </div>
    </div>
  )
}