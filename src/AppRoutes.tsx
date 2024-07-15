import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/shop' element={<Home />} />
        <Route path='/team' element={<Home />} />
      </Route>
    </Routes>
  );
}
