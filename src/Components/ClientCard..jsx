import * as React from 'react';

export default function ClientCard({ img, title, Location, pSize, Details }) {
  return (
    <>
      <div className="client_card_container max-w-sm rounded overflow-hidden shadow-lg h-[800px] w-[full]">
        <img className="w-full h-[45%]" src={img} alt="Sunset in the mountains"/>
          <div className="px-6 py-1 bg-black h-[55%] ">
            <div className="font-bold mb-2 text-green-200  px-3 mt-3"><h2>{title}</h2></div>
            <p className="text-white text-base   px-3 ">
              <b>Location : &nbsp; </b> {Location} <br />
              <b>Project Size : &nbsp;</b> {pSize} <br />
              <b>Details : &nbsp;</b> <span className='text-justify'>{Details}</span>
            </p>
          </div>
      </div>
    </>
  );
}
