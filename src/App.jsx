import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import routes from "./routes";
export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.slug} path={route.slug} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </main>
  );
}
