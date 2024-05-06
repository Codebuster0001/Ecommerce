import React from 'react';

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="w-auto h-auto shadow-xl outline-1 outline-slate-900 rounded-2xl">
          <figure className='w-auto h-2/2 rounded-lg overflow-hidden  p-5 '>
            <img src={item.image} alt="Shoes" className=" rounded-2xl w-auto h-76 
             " />
          </figure>
          
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div> 
             <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Cards;
