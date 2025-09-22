import Products from "./Products";
import { Outlet, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
function ProductPage({ product,
                        cart,handleRemove,
                        handleCart}){

    const [filteredProducts,setFilteredProducts]=useState([])
     const {category}=useParams()
       console.log("category from url", category);


          useEffect(()=>{
           
           if(!category || category==="all"){
            setFilteredProducts(product)
       
          }
          else{
           // Filter products based on the selected category from allProducts
         
           const filter = product.filter(
             (product) => product.category === category
           );
           setFilteredProducts(filter)
       
         
           console.log("filteredProducts", filter);
          
       
          }
          },[category,product])
       
                          
    return(
      <div>
        <section className="grid pt-[90px] lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 px-6 py-6  gap-8 transition-all duration-1000">
                  {filteredProducts.map((product) => {
                    return (
                      <Products
                        key={product.id}
                        product={product}
                        handleRemove={handleRemove}
                        cart={cart}
                        handleCart={handleCart}
                      ></Products>
                    );
                  })}
                </section>
                <Outlet></Outlet>
                </div>


    )
}
export default ProductPage