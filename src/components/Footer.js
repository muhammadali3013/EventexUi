import React from 'react'

const Footer = () => {
  return (
    <div className='pt-32 pb-24 bg-fuchsia-900'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10 lg:px-44">
  
      <div>
        <img className="h-32 mx-auto" src="./images/logo.png" alt="Logo" />
        <p className='text-white text-start text-medium font-semibold mt-8 pr-4 md:pr-10 lg:pr-4'>
          EVENTEX, an organization, started its activities in the exhibition sector with its first organization in 2012,
          and over the years, it has brought 4 different specialization exhibitions at international standards to the chemical & Allied industry.
        </p>
      </div>
  
      <div className='pl-4 md:pl-10 lg:pl-4'>
        <h1 className='text-white text-start text-3xl mt-6'> Quick Links</h1>
        <ul className='text-white text-start pt-4 md:pt-8 pl-4 md:pl-10 lg:pl-4 text-base font-medium'>
          <li className='mb-2'>ABOUT</li>
          <li className='mb-2'>CONTACT</li>
          <li className='mb-2'>DOMESTIC FAIRS</li>
          <li className='mb-2'>INTERNATIONAL FAIRS</li>
        </ul>
      </div>
  
      <div className='pl-4 md:pl-10 lg:pl-4'>
        <h1 className='text-white text-start text-3xl mt-6'> Contact</h1>
        <ul className='text-white text-start pt-4 md:pt-6 pl-4 md:pl-8 lg:pl-4 text-base font-medium'>
          <li className='mb-2 flex items-center'>
            <i className="fa-sharp fa-solid fa-location-dot pr-2 text-2xl"></i>
            <h4>82-M, Model Town Extension, Lahore - PAKISTAN</h4>
          </li>
          <li className='mb-2 flex items-center'>
            <i className="fa-sharp fa-solid fa-phone pr-2 text-2xl"></i> 042-35196500 <br /> 92-321-9437041
          </li>
          <li className='mb-2 flex items-center'>
            <i className="fa-solid fa-envelope pr-2 text-2xl"></i> haider@eventex.com.pk
          </li>
        </ul>
      </div>
  
    </div>
  </div>
  
  )
}

export default Footer
