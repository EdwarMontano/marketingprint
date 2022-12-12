// import React from 'react'
import React from "react";
import { render } from "react-dom";
import Carousel from "./Corousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiBuildingLine, RiPhoneFill} from "react-icons/ri";



const Hero = () => {

  return ( 
    <section className="min-h-[90vh]  grid grid-cols-1 md:grid-cols-8">
            
        {/* <div className="md:col-span-1"></div> */}
        <div  className="md:col-span-4 xl:col-span-3 flex items-center justify-center p-8 xl:px-12">
            <div className="flex flex-col gap-8">
                <h1 className="capitalize text-4xl xl:text-5xl font-body  font-bold text-center  xl:text-left text-white">Adquiere los mejores Servicios de impresión</h1>
                <p className="hidden md:block text-white text-xl font-body  font-extralight text-left leading-[2.5rem]">con más de una decada de experiencia en el sector de la comunicación visual somos especialistas en Plasmar tus ideas en innovación y mejorarlas continuamente</p>
                <div className="flex flex-col md:flex-row items-center gap-3 justify-around">
                    <button className="bg-gradient-to-tr from-[#df1515]/[.62] to-[#ea578b]  flex items-center gap-4 text-white rounded-t-2xl rounded-bl-2xl  py-2 px-6 md:text-base  xl:text-2xl   hover:from-[#df1515]/[.8] hover:to-yellow-500  ">

                    <RiPhoneFill/>
                        <a href="https://api.whatsapp.com/send?phone=+573113817831&text=">
                        CONTACTANOS
                        </a>
                        </button>
                    <button className="bg-slate-900/25 text-white  flex items-center gap-4 xl:rounded-t-2xl xl:rounded-bl-2xl rounded-t-xl rounded-bl-xl py-2 px-6 text-base  xl:text-2xl  hover:bg-[#df1515]/[.62] hover:to-yellow-500 ">
                        <RiBuildingLine/>
                        <a href="#services">

                        CONOCENOS
                        </a>
                    </button>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-white  md:col-span-4 xl:col-span-5 ">
            <Carousel  />          
        </div>
    </section>
  )
}

export default Hero