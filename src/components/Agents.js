import React from 'react';
import AjentsData from '../Utils/AjentsData';

const Agents = () => {
  return (
    <div className='pb-20'>
      <div className="pt-20 pl-4 md:pl-10 lg:pl-40 pb-5 max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
        <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
          OUR PARTNERS & AGENTS
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2 md:px-10 lg:px-40">
        {AjentsData.map((data, index) => (
          <div key={index} className="flex items-stretch bg-fuchsia-900 mb-3">
            {data.imageSrc ? (
            <img className="h-auto w-full border border-gray-100 shadow-lg bg-white object-cover" src={data.imageSrc} alt={data.title} />
            ) : (
              <div className="flex-grow flex flex-col justify-center items-center">
                <h1 className="font-display text-2xl sm:text-2xl lg:text-3xl text-start text-slate-50 p-6 font-bold">
                  {data.title}
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;

