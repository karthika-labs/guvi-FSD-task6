import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import AddToCart from "./AddToCart";
function Products({ product, handleCart,cart,handleRemove }) {





   
  
   

 

  
  

  return (
    <>
      <div className="righteous-regular  ">
        {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> */}
        <div className="bg-[#E0E0E0]  rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-1 h-full">
          <div className="flex flex-1 grow flex-wrap flex-col gap-2 px-4 justify-items-center  ">
            
            <Link to={`/products/${product.id}`}><img
              src={product.image}
              className="w-full grow  aspect-square rounded-lg  object-contain group-hover:opacity-75 xl:aspect-7/8"
              
            ></img></Link>
         

            {!(product.category === "jewelery") && (
              <div className="grow flex flex-row gap-2 justify-center items-center">
                <button className="  aspect-square w-3 h-3 rounded-full bg-rose-900 border border-white"></button>

                <button className="aspect-square w-3 h-3 rounded-full bg-black border border-white"></button>

                <button className="aspect-square w-3 h-3 rounded-full bg-green-700 border border-white"></button>
              </div>
            )}

            <div className="text-center grow text-blue-600 poppins-bold font-[700]">₹{product.price}</div>
            <div className="text-start poppins-bold grow ">{product.title}</div>
            {/* RATING COMPONENt */}
            <Rating product={product}></Rating>

            {/* ADD TO CART */}
            <AddToCart className="grow" product={product} handleCart={handleCart} handleRemove={handleRemove} cart={cart}></AddToCart>

           
          </div>
        </div>
       
      </div>
    </>
  );
}
export default Products;
