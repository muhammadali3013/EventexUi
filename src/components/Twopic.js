import React from 'react';
import img1 from '../Assets/img1.png';

const Twopic = () => {
  return (
    <div>
      <div className=" bg-fuchsia-900 px-4 py-10 sm:px-6  md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
        <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-14 xl:max-w-none xl:grid-cols-2">
          <div className="py-10 sm:py-20 px-4 sm:px-6" bis_skin_checked={1}>
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">
              “Exhibitions Bringing Industry Leaders Together”
            </p>
          </div>
          <form className="mt-6 sm:mt-0">
            <div className="mt-3 flex py-2.5 sm:py-5 pr-5 pl-5" bis_skin_checked={1}>
              <img className="h-auto w-full" src={img1} alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Twopic;
