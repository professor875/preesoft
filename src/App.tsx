import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Product from './pages/Product';
import WebDevelopment from './pages/WebDevelopment';
import DesktopApplications from './pages/DesktopApplications';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import AppDevelopment from './pages/AppDevelopment';
import GraphicDesign from './pages/GraphicDesign';
import DigitalMarketing from './pages/DigitalMarketing';
import Websites from './pages/Websites';
import Apps from './pages/Apps';
import Hosting from './pages/Hosting';
import ContactUs from "./pages/ContactUs.tsx";
import OurTeam from "./pages/OurTeam.tsx";
import OurClients from "./pages/OurClients.tsx";
import GetQuestion from "./pages/GetQuestion.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <ScrollToTop>
            <Routes>
              <Route path={'/'} element={<Home />}/>
              <Route path={'/web-development'} element={<WebDevelopment />}/>
              <Route path={'/desktop-applications'} element={<DesktopApplications />}/>
              <Route path={'/app-development'} element={<AppDevelopment />}/>
              <Route path={'/graphic-design'} element={<GraphicDesign />}/>
              <Route path={'/digital-marketing'} element={<DigitalMarketing />}/>
              <Route path={'/products'} element={<Product />}/>
              <Route path={'/hosting'} element={<Hosting />}/>
              <Route path={'/websites'} element={<Websites />}/>
              <Route path={'/apps'} element={<Apps />}/>
              <Route path={'/contact-us'} element={<ContactUs />}/>
              <Route path={'/our-team'} element={<OurTeam />}/>
              <Route path={'/our-clients'} element={<OurClients />}/>
              <Route path={'/get-a-question'} element={<GetQuestion />}/>
            </Routes>
          </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
