import React, {useState} from 'react'
import { RiCheckboxBlankCircleFill, RiMenu3Fill,RiCloseLine,RiUser3Fill} from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu]= useState(false)
    return <header className=" fixed inset-x-0  flex items-center justify-between xl:justify-end w-full py-4 px-8 h-[8vh] bg-[#f9fafb] opacity-75 z-50">
        <div className="w-1/6" >
            <a href="#" className="fill-red">
                <img src="/images/LOGOS/LOGO 2.svg" className="h-4 mr-6 mt-1 xl:h-12 md:h-4 " alt="MarketingPrint Logo" />  
            </a>                   
        </div>
        <nav className={`fixed bg-[#f9fafb] w-[80%] md:[40%] xl:w-full h-full ${showMenu ? "left-0":"-left-full"} top-0  xl:static flex-1  flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`}>
            <div className="rounded-t-2xl rounded-bl-2xl  py-2 px-2 border-2 border-[#d94038]">
                <a href="#" className="uppercase text-black">Cotizar Aquí</a>
            </div>
            {/* <a href="#" className="text-primary">Registrarse</a> */}
            <a href="#" className="uppercase text-black">UBÍCANOS</a>
            {/* <a href="#" className="uppercase text-black">CONTÁCTANOS</a>
            <a href="#" className="uppercase text-black">CONOCENOS</a> */}
            <a href="#" className="uppercase text-black ">Iniciar Sesión</a>
        </nav>
        <button onClick={()=>setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2 text-black"> {showMenu ? <RiCloseLine/>:<RiMenu3Fill/> }</button>
    </header>  
}
export default Header