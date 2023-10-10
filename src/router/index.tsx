import Home from "@/pages/Home";
import { Week } from "@/pages/Week";
import { LayoutApp } from "@/pages/layout";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LayoutApp>
        <Home />
      </LayoutApp>} />
      <Route path="/week" element={ <LayoutApp>
          <Week/>
        </LayoutApp>} />
    </Route>
  )
);