import React from 'react'


const Clientes = () => {
  return (
    <section id="clientes" className='p-8 flex flex-col  items-center gap-8 mt-20 xl:mt-0'>
        <h1 className='text-2xl text-center font-bold text-gray-100'>
        FORMA PARTE DE NUESTROS CLIENTES SATISFECHOS
        </h1>
    
            <div className='grid grid-cols-3 md:grid  md:grid-cols-7  xl:flex  xl:flex-row xl:flex-wrap gap-3 xl:gap-20'>
            {[1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14].map(index => <img src={`https://res.cloudinary.com/dtlofy3ea/image/upload/f_auto,q_auto/MarketingPrint/Clientes/LOGOS-CLIENTES${index}.jpg`}className='w-30 md:w-40 xl:w-50' />)}
                
            </div>
        
        
    </section>
  )
}

export default Clientes