import { Aside } from "@/components/aside";
import { MainNavigation } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";

interface layoutAppProps {
  children: React.ReactNode;
}

export function LayoutApp({ children }: layoutAppProps) {
  return (
    <div className="h-screen w-full bg-muted">
      <div className="grid grid-cols-app">
        <Aside /> 
        <div className="col-start-2 min-h bg-muted flex flex-col h-screen container ">
          <div className="p-8 flex justify-between">
            <MainNavigation />
            <ModeToggle />
          </div>
          <div className="flex-1 p-8">
               {children}
          </div>
        </div>
      </div>

    </div>
  )
}