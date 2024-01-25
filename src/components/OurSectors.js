import React from 'react'
import OursectorsData from '../Utils/OursectorsData'

const OurSectors = () => {
  return (
    <div className=' bg-slate-200 pb-10'>
              <div className="pt-20   max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24" bis_skin_checked={1}>
  <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
  OUR SECTORS</h2>
    </div>
        
    <div className="pt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 px-2 md:px-10 lg:px-40">

    
   { OursectorsData.map((sectorData) => (
    
<>

  <div className=''>
   
   


<a className="flex flex-col items-center   border-gray-200 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-96  h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={sectorData.imageSrc} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-fuchsia-900 dark:text-white">{sectorData.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{sectorData.decription}</p>
    </div>
</a>
</div>
 
 
</>))}

</div>


    </div>
  )
}

export default OurSectors
