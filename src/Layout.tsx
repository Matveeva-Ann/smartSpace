import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

export default function Layout() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header></Header>
      <main className="mainStyle">
        <div className="layoutMain">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
}
