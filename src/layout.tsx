import { Aside } from "@/components/aside";
import { MainNavigation } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";

interface layoutAppProps {
  children: React.ReactNode;
}

export function LayoutApp({ children }: layoutAppProps) {
  return (
    <div className="">
      <div className="grid grid-cols-app">
        <Aside />
        <div className="pl-10 col-start-2 bg-muted min-h flex  flex-col min-h-screen ">
          <div className="max-w-[1100px]">
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

    </div>
  )
}