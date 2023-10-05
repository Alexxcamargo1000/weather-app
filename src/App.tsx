import { Aside } from "./components/aside"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <div className="h-screen w-full bg-muted">
      <div className="grid grid-cols-app">
        <Aside />
        <div className="col-start-2 h-screen container ">
          <div className="p-8 flex justify-end">
            <ModeToggle />
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default App
