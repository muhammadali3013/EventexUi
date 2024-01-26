import React from 'react'
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/img4.jpg';
import img5 from '../Assets/img5.png';

const CoreValue = () => {
  return (
    <div className='mb-20'>
       
        <div className="pt-20  pb-5  max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24" bis_skin_checked={1}>
  <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
  OUR CORE VALUES</h2>
    </div>
    {/* <div className='grid grid-flow-row grid-cols-3'> </div> */}
    {/* --------------row 1----------- */}
    <div className="px-8 sm:px-16 md:px-20 lg:px-40 m-2">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
 <div className="py-8 md:py-20 bg-fuchsia-900">
          <h1 className="text-2xl text-start mb-2 px-8 font-bold text-white">Loyalty</h1>
          <p className="font-display text-start text-white px-8">
            We epitomize LOYALTY by working collaboratively with our guests,
            employees, partners, and suppliers to exceed shared goals.
          </p>
        </div>

        <div className="brightness-90">
          <img className="h-full w-full" alt="" src={img2} />
        </div>

        <div className="py-8 md:py-20 bg-fuchsia-900">
          <h1 className="text-2xl text-start mb-2 px-8 font-bold text-white">Service Excellence</h1>
          <p className="font-display text-start text-white px-8">
            We are committed to the pursuit of SERVICE EXCELLENCE.
          </p>
        </div>

        <div className="brightness-90">
          <img className="h-full w-full" alt="" src={img3} />
        </div>

        <div className="py-8 md:py-20 bg-fuchsia-900">
          <h1 className="text-2xl text-start mb-2 px-8 font-bold text-white">Loyalty</h1>
          <p className="font-display text-start text-white px-8">
            We epitomize LOYALTY by working collaboratively with our guests,
            employees, partners, and suppliers to exceed shared goals.
          </p>
        </div>

        <div className="brightness-90">
          <img className="h-full w-full" alt="" src={img4} />
        </div>

        <div className="py-8 md:py-20 bg-fuchsia-900">
          <h1 className="text-2xl text-start mb-2 px-8 font-bold text-white">Loyalty</h1>
          <p className="font-display text-start text-white px-8">
            We epitomize LOYALTY by working collaboratively with our guests,
            employees, partners, and suppliers to exceed shared goals.
          </p>
        </div>

        <div className="brightness-90">
          <img className="h-full w-full" alt="" src={img5} />
        </div>

        <div className="py-8 md:py-20 bg-fuchsia-900">
          <h1 className="text-2xl text-start mb-2 px-8 font-bold text-white">Service Excellence</h1>
          <p className="font-display text-start text-white px-8">
            We are committed to the pursuit of SERVICE EXCELLENCE.
          </p>
        </div>
      </div>
      
    </div>
      </div>
  )
}

export default CoreValue
