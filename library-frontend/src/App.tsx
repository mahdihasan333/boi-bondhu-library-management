import { Outlet } from "react-router";
import { Footer } from "./components/layout/Footer";

import { NavBar } from "./components/layout/NavBar";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <>
      <NavBar />
      <div className="w-11/12 mx-auto lg:w-11/12 md:w-11/12 xl:container">
        <div className="min-h-[calc(100vh-441px)]">
          <Outlet />
          <ScrollTop />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
