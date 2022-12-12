import Header from "./components/Header";
import HeaderT from "./components/Header2";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Clientes from "./components/Clientes";
import Works from "./components/Works";
import Footer from "./components/Footer";
import GaleryProducts from "./components/Galery";
import Contact from "./components/Contact";
import { RiWhatsappFill, RiPhoneFill } from "react-icons/ri";

// import GetRequestHooks from './components/GetRequestHooks'

function App() {
  return (
    <div className="from-[#0A0101] to-[#df1515] bg-gradient-[45deg]">
      {/* <Header/> */}
      <HeaderT />
      <Hero />
      <Works />
      <GaleryProducts />
      {/* <Product/>         */}
      {/* <Contact/>         */}
      <Clientes />
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=+573113817831&text="
        rel="noreferrer"
        className="fixed bottom-3 right-8"
        target="_blank"
      >
        <RiWhatsappFill className="bg-white rounded-3xl border-4 border-[#292b33] p-2 text-7xl text-[#43c453] " />
      </a>

      {/* <GetRequestHooks/>         */}
    </div>
  );
}

export default App;
