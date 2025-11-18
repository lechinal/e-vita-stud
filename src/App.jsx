import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./index.css";

import Layout from "./components/Layout/Layout.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));
const Stables = lazy(() => import("./pages/Stables/Stables.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));
const Experience = lazy(() => import("./pages/Experience/Experience.jsx"));
const Legacy = lazy(() => import("./pages/Legacy/Legacy.jsx"));
const HorseCatalog = lazy(() =>
  import("./pages/HorseCatalog/HorseCatalog.jsx")
);
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/stables" element={<Stables />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/cai-de-vanzare" element={<HorseCatalog />} />
            {/* <Route path="/cai-de-vanzare/:id" element={<HorseDetails />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
