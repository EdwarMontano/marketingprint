import React from 'react'
import Modal from "./Modal";



import "react-responsive-carousel/lib/styles/carousel.min.css";

import {Card} from 'flowbite-react'

 import { 
    AvisosIcon,         
    MayoristaIcon,
    GranFormatoIcon,
    CorteLaserIcon,
    ImpresionDigitalIcon,
    VehicularIcon,
    EmpaquesIcon,
    DisenoIcon,
    EstampadosIcon,
    DotacionIcon,
    LitografiaIcon,
  } from "@heroicons/react/24/solid";

const Productos = [
    {
      name: "VENTA MAYORISTA",
      description:
        "",
      href: "#",
      icon: MayoristaIcon,
    },
    {
      name: "AVISOS",
      description: "",
      href: "#",
      icon: AvisosIcon,
    },
    {
      name: "GRAN FORMATO",
      description: "",
      href: "#",
      icon: GranFormatoIcon,
    },
    {
      name: "CORTE LASER",
      description: "",
      href: "#",
      icon: CorteLaserIcon,
    },
    {
      name: "IMPRESIÓN DIGITAL",
      description:
        "",
      href: "#",
      icon: ImpresionDigitalIcon,
    },
    {
      name: "DECORACIÓN VEHICULAR",
      description:
        "",
      href: "#",
      icon: VehicularIcon,
    },
    {
      name: "BOLSAS",
      description: "",
      href: "#",
      icon: EmpaquesIcon,
    },
    {
      name: "DISEÑO GRÁFICO",
      description: "",
      href: "#",
      icon: DisenoIcon,
    },
    {
      name: "ESTAMPADOS",
      description: "",
      href: "#",
      icon: EstampadosIcon,
    },
    {
      name: "DOTACIÓN EMPRESARIAL",
      description:
        "",
      href: "#",
      icon: DotacionIcon,
    },
    {
      name: "LITOGRAFÍA",
      description: "",
      href: "#",
      icon: LitografiaIcon,
    },]
const Galery = () => {
  return (
    <section id="Galery" className="bg-gray-200 py-8 ">
      <div className="bg-gray-100 container mx-auto rounded-3xl">
        <h2 className=" text-center text-5xl  font-bold p-8">
          {" "}
          Productos
        </h2>
        <div className=" container  rounded-b-3xl xl:flex mb-4">
          <div className="w-full xl:w-1/3   rounded-bl-3xl bg-gray-100 p-12">
            <div className="hidden  md:block md:w-full   md:text-sm text-center font-medium text-gray-900 rounded-lg border border-gray-200   ">
              
                 {Productos.map((producto) => (
                     <button type="button" className="inline-flex relative items-center py-2 px-4 w-full   text-xl font-medium rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  " key={producto.name}
                     >                     
                     {/* <button type="button" className="inline-flex relative items-center py-2 px-4 w-full   text-xl font-medium rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  " key={producto.name}
                     onClick={function onClick(){return alert(producto.name)}}>                      */}
                     <producto.icon
                       className="w-16  px-2 text-red-600"
                       aria-hidden="true"
                     />
                    {producto.name}
                 </button>                  
                ))}
              
            </div>

            
          </div>
          <div className="w-full xl:w-2/3 p-2 text-center bg-gray-100 rounded-br-3xl ">
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 md:grid-rows-3  gap-8 p-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <Card                               
                >

                    <img className="max-w-lg h-auto rounded-lg" src={`https://res.cloudinary.com/dtlofy3ea/image/upload/w_500,h_500,f_auto,q_auto/MarketingPrint/Products/product-${index}.jpg` }/>

                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galery