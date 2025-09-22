import React, { useEffect, useState } from "react";
function AddToCart({ product, handleCart, cart, handleRemove }) {
  // remove button
  const [removeButton, setRemoveButton] = useState(false);

  // state to hold items added already toast
  const [showToast, setShowToast] = useState(false);

  // state to hold items added successfully toast
  const [showToastSuccess, setShowToastSuccess] = useState(false);

  //1.when add to card clicked it will setAlert=true ask,...Do you want to add this product to cart?
  // 2 .."handleAlertConfirm" confirm=> add items,(setShowToastSuccess=true)success toast, alreadyInCart state true,
  // 3. if we again click add to card call "handleAlert" checks "alreadyInCart" ,if it is true ("ShowToast=true(items added already toast)  ,  ShowToastSuccess=false") pop "items added already toast"

  let handleAlert = () => {
    //  to check items added already in cart
    const alreadyInCart = cart.some(
      (itemInCart) => itemInCart.title === product.title
    );
    if (alreadyInCart) {
      setShowToastSuccess(false); // show "already added"
      setRemoveButton(true); //remove button
    } else {
      handleCart(product);
      setShowToastSuccess(true);
    }
  };

  // showtoast
  useEffect(() => {
    if (showToastSuccess) {
      setTimeout(() => {
        setShowToastSuccess(false);
      }, 2000);
    }
  }, [showToastSuccess]);

  // Remove item from cart and show toast "remved"
  let handleRemoveToast = () => {
    handleRemove(product);
    setShowToast(true);
    if (removeButton) {
      setTimeout(() => {
        setRemoveButton(false);
      }, 2000);
    }
  };

  // auto hide already added toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      setRemoveButton(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);

  return (
    <>
      {removeButton ? (
        <button
          onClick={() => handleRemoveToast()}
          className="relative cursor-pointer px-4 py-1.5 text-sm rounded-lg border border-red-600 text-red-600 group hover:bg-red-600 hover:text-white transition "
        >
          Remove
          <span className="absolute left-0 top-full mt-1 w-max px-4 py-2 text-s text-gray-900 bg-yellow-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Already in cart — click to  <span className="text-rose-700 px-2 py-1"> Remove </span>{" "}
            
          </span>
        </button>
      ) : (
        <button
          className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-500 transform hover:scale-105 dark:focus:ring-blue-800"
          onClick={() => handleAlert()}
        >
          Add to Cart
        </button>
      )}

      {showToast && (
        <div
          id="toast-warning"
          className="fixed left-1/4 top-1/4 flex items-center w-full max-w-xs p-4 text-gray-500 bg-red-600 rounded-lg shadow-sm dark:text-gray-400 "
          role="alert"
        >
          <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
          </div>
          <div className="ms-3 text-sm font-normal text-white">
            Item <span className="text-red-900"> Removed </span> from the cart.
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-warning"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}

      {showToastSuccess && (
        <div
          id="toast-success"
          className="toast-zoom flex fixed left-1/4 top-1/4 items-center w-full max-w-xs p-4 mb-4 text-gray-500  rounded-lg shadow-sm dark:text-gray-400 bg-green-600"
          role="alert"
        >
          <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal text-white ">
            Item added successfully.
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default AddToCart;
