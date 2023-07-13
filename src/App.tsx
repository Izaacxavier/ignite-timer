import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DeafultLayout";
import { History } from "./Pages/History/History";
import { Home } from "./Pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
