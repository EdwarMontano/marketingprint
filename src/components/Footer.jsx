import React from 'react'
import Modal from "./Modal";
import { BsFacebook,BsInstagram ,BsTwitter } from "react-icons/bs";

const texto=`Empresa nacional 100% colombiana, con más de 12 años de experiencia en el sector de la comunicación visual; especialistas en: 

Gran Formato (impresión en vinilos, banner, rígidos, panaflex, microperforados, lienzo canvas, Mesh,
decoración vehicular).

Avisos (acrílico, acero, neon, cajas de luz, madera, alucobom)

Estampados y bordados (Camisetas, gorras, jeans, bolsas)

Corte Láser (Acrílico, mdf, acero, vidrio, poliestireno)

Laminado al calor y en frio.

Impresión digital en todo tipo de materiales (Lino Belga, Propalcote, Perlado, Opalina, Metalizado, Pergamino, Adhesivo, ecologíco, Fotografico, entre otros)

Papelería Comercial (Carpetas, volantes, tarjetas, plegables, brochure, empaques, talonarios, hojas membrete, etiquetas, plegadizas, sellos, entre otros)

Articulos Promocionales: (Lapiceros, Llaveros, mugs, memorias, linternas, entre otros)

Diseño gráfico, 3D, Diseño virtual y manejo de campañas políticas mediante estrategias visuales de marca.

Mobiliario: decoraciòn de interiores, oficinas y locales.

Decoraciòn Vehicular: camiones, furgones, vans, entre otros.

Bolsas: cambre, papel ecologico, kraft, propalcote, entre otros.

Enlazamos nuestra capacidad de producción y la expandimos a Marketing BTL con eventos de moda, lanzamientos de producto y/o marca, pasarelas y manejo de espacios publicitarios virtuales completando de esta manera un excelente equipo de trabajo a disposición de su empresa.

“Plasmamos tus ideas en innovación y mejoramiento continuo” En el 2020 queremos expandir nuestra capacidad nacional y ser los pioneros en I+D en el sur occidente colombiano." `

const Footer = () => {
  return (
    
<footer className=" bg-[#151515] p-4  sm:p-6 ">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
                <img src="/images/LOGOS/LOGO 2.svg" className="mr-3 h-8" alt="Marketing Print Logo" />
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Recursos</h2>
                <ul className="text-white ">
                    <li className="mb-4">                        
                        <Modal titulo="¿Quiénes somos?" cuerpo={texto}/>
                    </li>                   
                    <li className="mb-4">                        
                       Cll 18# 3-45
                    </li>                   
                    <li className="mb-4">                        
                       Cali-Valle
                    </li>                   
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Siguenos</h2>
                <ul className="text-white ">
                    <li className="mb-4">
                        <a href="https://www.facebook.com/marketingprint1/" 
                        target="_blank"
                        className="hover:underline ">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/marketingprint1/"
                        target="_blank"
                        className="hover:underline">Instagram</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
                <ul className="text-white">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacidad</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Terminos &amp; Condiciones</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-white sm:text-center ">© 2023 Diseño web por <a href="#" className="hover:underline">Marketing Print</a>. 
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/marketingprint1/" target="_blank" className="text-stone-50 hover:text-gray-500 ">
                <BsFacebook />
                <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/marketingprint1/" target="_blank" className="text-stone-50 hover:text-gray-500 ">
            <BsInstagram/>
                <span className="sr-only">Instagram</span>
            </a>
            <a href="#" target="_blank" className="text-stone-50 hover:text-gray-500 " >
                <BsTwitter/>
                <span className="sr-only">Twitter</span>
            </a>
           
            
        </div>
    </div>
</footer>

  )
}

export default Footer