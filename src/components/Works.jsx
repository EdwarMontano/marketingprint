import React from 'react'

const works = () => {
  return (
    <section id="services" className='bg-gray-100 p-8 xl:p-20'>
        <div className='mb-8'>
            <h1 className='text-2xl  font-bold'>NUESTROS SERVICIOS</h1>
            <p className='text-xl text-gray-500 font-light'> Empresa nacional 100% colombiana, con más de 15 años de experiencia en el sector de la comunicación visual especialistas en:</p>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>

          <div className='flex flex-col gap-4'>
            <div className=' bg-[#ff0534] rounded-[2.5rem] p-14'>
              <img className='w-full  h-[540px] object-cover rounded-3xl' src="https://res.cloudinary.com/dtlofy3ea/image/upload/v1670559134/MarketingPrint/Hero/3.jpg" />
            </div>
            
            <h3 className='text-2xl  font-bold'>Corte Laser</h3>
            <p className='text-rose-900 font-light'>Esta máquina hace maravillas creativas, ya sean marcadas o cortadas, en materiales como: MDF, madera, acrílico, polietileno, cartón, cuero. Si tienes algún proyecto que involucre corte o grabado, este servicio de corte laser te brinda un acabado profesional.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 xl:pl-8'>
            <div className='flex flex-col gap-4'>
              <div className=' bg-[#ff0534] rounded-xl p-4'>
                <img className='w-full h-44 object-cover  rounded-xl' src="https://res.cloudinary.com/dtlofy3ea/image/upload/v1670559134/MarketingPrint/Servicios/avisos_1.jpg" />
              </div>
              
              <h3 className='text-2xl  font-bold'>AVISOS</h3>
              <p className='text-rose-900 text-sm font-light'>Nuestra empresa te brinda la oportunidad de que elijas entre toda la gamas y combinaciones de materiales para la creación de tus avisos, garantizando de esta manera tu mayor satisfacción y un aviso para tu negocio acorde a tu idea y necesidades.</p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className=' bg-[#ff0534] rounded-xl p-4'>
                <img className='w-full h-44 object-cover  rounded-xl' src="https://res.cloudinary.com/dtlofy3ea/image/upload/v1670559134/MarketingPrint/Servicios/print-1.jpg" />
              </div>
             
              <h3 className='text-2xl  font-bold'>Impresión Digital</h3>
              <p className='text-rose-900 text-sm font-light'>Somos expertos en impresión digital gran formato, brindamos soluciones con los mejores materiales y diseño para promocionar tus productos, acompañado con la mejor tecnología para darle vida a tus ideas.</p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className=' bg-[#ff0534] rounded-xl p-4'>
                <img className='w-full h-44 object-cover  rounded-xl' src="https://res.cloudinary.com/dtlofy3ea/image/upload/v1670559134/MarketingPrint/Servicios/brandeo-1.jpg" />
              </div>
              
              <h3 className='text-2xl  font-bold'>DECORACIÓN VEHICULAR</h3>
              <p className='text-rose-900 text-sm font-light'>En Marketing Print contamos con personal capacitado para la decoración de tus automóviles, bien sea para negocio o particular. Usamos el mejor material especializados para el brandeo vehicular, el cual, con una capa de vinilo transparente laminada al calor, dan durabilidad al diseño.</p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className=' bg-[#ff0534] rounded-xl p-4'>
                <img className='w-full h-44 object-cover  rounded-xl' src="https://res.cloudinary.com/dtlofy3ea/image/upload/v1670559134/MarketingPrint/Servicios/diseno-1.jpg" />
              </div>
              
              <h3 className='text-2xl  font-bold'>Diseño</h3>
              <p className='text-rose-900 text-sm font-light'>Contamos con diseñadores certificados y capacitados para cumplir tareas en todos los niveles del diseño, utilizando herramientas de vanguardia de diseño gráfico (suite Adobe y Corel Draw). Están capacitados para entender a detalles las exigencias del cliente y plasmarlos de forma gráfica con mayor elegancia y pensando siempre en sus gustos.</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default works