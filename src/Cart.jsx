import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Cart({ product, handleRemove }) {
  console.log("product in cart",product)
  // // state to hold cart open ,close
  // const [cart, setCart] = useState(false);

  // state to add quantity
  const [add, setAdd] = useState({});

  // state to hold total
  const [total, setTotal] = useState(0);

  // state to check discount >1000 only for styling
  const [isTotalMore1000, setIsTotalMore1000] = useState(false);

  //  state to hold discount
  const [discounPrice, setDiscountPrice] = useState(0);

  // alert popup fr close (BACK-btn)
  const [CloseAlert, setCloseAlert] = useState(false);

 

  // open  alert (back)
  let handleCartCloseAlert = () => setCloseAlert(true);

  

  //   alert (back)==>open cart  (back button)
  let handleCartCloseAlert_NO_CLOSE = () => {
    
    setCloseAlert(false);
  };

  // quantity +
  let handleAdd = (id) => {
    setAdd((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  // quantity -
  let handlesub = (id) => {
    setAdd((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) - 1,
    }));
  };

  // calc total
  useEffect(() => {
    let total = product.reduce((acc, item) => {
      const quantity = add[item.id] || 1;
      return acc + item.price * quantity;
    }, 0);
    setTotal(total.toFixed(2));
  }, [add, product]);

  // discount state to check discount applied if applied, it will be true always and never again discount applied
  useEffect(() => {
     if(product.length==0) {
      
      setDiscountPrice(0);
      setIsTotalMore1000(false);
    }
    else {
      setIsTotalMore1000(true);
      setDiscountPrice(total * 0.1);
    }
  }, [total]);

  return (
    <>
      {/* <NavBar handleCartAlert={handleCartAlert} product={product} /> */}

      
        <div className=" flex flex-col lg:flex-row w-full mx-auto h-auto lg:h-screen bg-gray-50 dark:bg-gray-900 mt-16 rounded-2xl shadow-lg overflow-hidden">
          {/* Cart Items */}
          <div className="flex-1 p-4 md:p-6 overflow-auto  bg-gradient-to-r from-[#0f2862] via-[#9e363a] via-[#091f36] to-[#4f5f76]">
            <div className="righteous-regular flex items-center justify-between mb-4">
              <h2 className="righteous-regular text-xl font-bold text-gray-800 dark:text-gray-200">
                Your Shopping Cart
              </h2>
              <button
                onClick={handleCartCloseAlert}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-red-300 text-gray-600 hover:bg-red-100 dark:text-gray-400 dark:border-red-700 dark:hover:bg-gray-800 transition transition duration-500 ease-in-out transform hover:scale-x-110"
              >
                ← Back
              </button>
            </div>

            {CloseAlert && (
              <div className="righteous-regular fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center">
                  <h2 className="text-lg font-semibold mb-3 text-gray-800">
                    Do you want to close the cart?
                  </h2>
                  <div className="flex justify-center gap-4">
                    <Link
                      
                      to="/"
                      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Yes
                    </Link>
                    <Link
                      onClick={handleCartCloseAlert_NO_CLOSE}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                      No
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {product.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">
                Your cart is empty 🛒
              </p>
             ) : (
              <div className="overflow-x-auto bg-[#E0E0E0]">
                <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300 bg-[#E0E0E0]">
                  <thead className="text-xs uppercase righteous-regular text-[#222222]">
                    <tr>
                      <th className="px-4 py-3">Image</th>
                      <th className="px-4 py-3">Product</th>
                      <th className="px-4 py-3">Qty</th>
                      <th className="px-4 py-3">Price</th>
                      <th className="px-4 py-3">Total</th>
                      <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-white dark:bg-gray-900 border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <td className="p-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 object-contain rounded"
                          />
                        </td>
                        <td className="px-4 py-3 font-medium">{item.title}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                add[item.id] > 1 && handlesub(item.id)
                              }
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border rounded-lg bg-gray-50 dark:bg-gray-700">
                              {add[item.id] || 1}
                            </span>
                            <button
                              onClick={() => handleAdd(item.id)}
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3 font-semibold">
                          ₹{item.price}
                        </td>
                         <td className="px-4 py-3 font-semibold">
                          ₹{item.price *(add[item.id] || 1)}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex justify-center gap-2">
                            <button className="px-4 py-1.5 text-sm rounded-lg border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition">
                              Save for Later
                            </button>
                            <button
                              onClick={() => handleRemove(item)}
                              className="px-4 py-1.5 text-sm rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {product.length > 0 && (
              <div className="righteous-regular flex justify-end mt-6">
                <button className="transition duration-500 ease-in-out transform hover:scale-x-110 px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                  Checkout →
                </button>
              </div>
            )}
          </div>

          {/* Price Summary */}
          <aside className="righteous-regular w-full lg:w-1/3 bg-white dark:bg-gray-800 p-6 border-t lg:border-l border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center justify-between">
              Price Details
            
            <span className="text-[#a4893d]">Items ({product.length})</span>
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span
                  className={`${
                    isTotalMore1000
                      ? "text-green-600"
                      : "text-red-500 line-through"
                  }`}
                >
                  Discount (10%)
                  <div className="ml-2 relative group inline-block">
                    <button className="h-5 w-5 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                      i
                    </button>

                    {/* Tooltip shown on hover */}
                    <div className="absolute bottom-full mb-1 left-3/4 transform -translate-x-1/2 w-max px-3 py-2 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Discount applied for orders above ₹1000
                    </div>
                  </div>
                </span>

                <span>
                  {isTotalMore1000 ? (
                    <div className="  text-green-500 ">
                      <span>-</span> ₹{discounPrice.toFixed(2)}
                    </div>
                  ) : (
                    <div className="text-red-500 ">₹ 0.00</div>
                  )}
                </span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-3">
                <span>Total</span>
                <span>₹{(total - discounPrice).toFixed(2)}</span>
              </div>
            </div>
            {isTotalMore1000 && (
              <p className="mt-3 text-sm text-green-600">
                You save ₹{discounPrice.toFixed(2)} on this order 🎉
              </p>
            )}
            <button className="transition duration-500 ease-in-out transform hover:scale-x-110 w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 transition">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      
    </>
  );
}
export default Cart;
