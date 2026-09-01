import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/index.js";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import Tellraw from "./pages/tellraw/index.js";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/generator/" component={Home} />
          <Route path="/generator/tellraw" component={Tellraw}></Route>
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
