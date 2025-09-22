import { useState } from "react";
import Category from "./Category";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function CategoryPage({ allProducts }) {
  // state to hold the category open close
  const [categoryMenu, setCategoryMenu] = useState(false);
  return (
    <div className="flex h-screen  gap-4 px-4 py-4">
      
        <aside className=" text-white  pt-[80px] cursor-pointer p-2 rounded shadow transition-all duration-500 flex flex-col items-start  sticky top-0 h-screen overflow-auto">
          <Link
          to=""
            onClick={() =>
              categoryMenu ? setCategoryMenu(false) : setCategoryMenu(true)
            }
            className="mt-2  text-white hover:text-blue-800 transition duration-500 ease-in-out transform hover:scale-x-110 text-center"
          >
            <button
              type="button"
              className=" bona-nova-sc-bold text-[20px] text-white bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Category
            </button>
          </Link>
          {categoryMenu && (
            <div>
              <Category
                allProducts={allProducts}
                onClick={() => setCategoryMenu(true)}
              ></Category>
            </div>
          )}
        </aside>
    
       <main className="flex-1 overflow-auto hide-scrollbar">
        <Outlet /> {/* ProductPage will render here */}
      </main>
      
    </div>
  );
}
export default CategoryPage;
