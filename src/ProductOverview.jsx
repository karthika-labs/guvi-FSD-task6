import { useParams, Link } from "react-router-dom";
import Rating from "./Rating";
import AddToCart from "./AddToCart";

function ProductOverview({ products, handleCart, cart, handleRemove }) {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);


     if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="poppins-bold fixed inset-0 z-50 flex items-center justify-center bg-black/80 overflow-auto p-4">
      {/* Card Container */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-[#0f2862] via-[#9e363a] via-[#091f36] to-[#4f5f76] border border-gray-200 rounded-xl shadow-2xl dark:border-gray-700 overflow-visible min-h-[500px] p-8">
        <div className="flex flex-col md:flex-row gap-8 p-8 overflow-visible">
          
          {/* Image Section */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              className="rounded-lg w-80 h-80 md:w-96 md:h-96 object-contain shadow-lg"
              src={product.image}
              alt="Overview"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between space-y-6 flex-1">
            {/* Title & Description */}
            <div>
              <h5 className="text-3xl md:text-4xl font-semibold text-white">
                {product.title}
              </h5>
              <p className="text-base md:text-lg text-cyan-200 mt-3">
                {product.description}
              </p>
            </div>

            {/* Price & Rating */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-4xl md:text-5xl font-bold text-white">
                ₹{product.price}
              </span>
              <span className="bg-blue-100 text-black-100 text-sm md:text-base font-semibold px-3 py-1 rounded">
                <Rating product={product} />
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-6 justify-start mt-6 w-full">
              <AddToCart
                className="grow"
                product={product}
                handleCart={handleCart}
                handleRemove={handleRemove}
                cart={cart}
              />

              <Link
                to="/"
                className="flex items-center justify-center text-cyan-200 hover:text-white border border-blue-100 hover:bg-gradient-to-r from-[#0f2862] via-[#9e363a] via-[#091f36] to-[#4f5f76] focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base md:text-lg px-5 py-3 min-w-[120px]"
              >
                Back
                <svg
                  className="w-5 h-5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
