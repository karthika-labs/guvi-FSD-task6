import { Link } from "react-router-dom";
function Category({ allProducts }) {
  // collects all categories
  let filteredCategories = [];
  allProducts.forEach((productCategory) => {
    if (!filteredCategories.includes(productCategory.category)) {
      //to remove duplicates
      filteredCategories.push(productCategory.category);
    }
  });

  // images in category menu bar
  const categoryImage = {
    "men's clothing":
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    jewelery:
      "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    electronics: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    "women's clothing":
      "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
  };

  return (
    <>
      <div className="righteous-regular flex flex-col gap-4 mt-4 roboto-font">
        <Link to="/category/all" className="flex gap-2 items-center px-4 py-2 bg-[#4f5f76]  text-white rounded-sm border border-transparent hover:bg-white hover:text-gray-800 hover:border-white transition duration-300 ease-in-out">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            className=" object-contain aspect-square w-10 h-10 rounded-sm"
          ></img>
          <span className="righteous-regular">show all</span>
        </Link>

        {filteredCategories.map((category) => {
          return (
            <Link
              to={`/category/${category}`}
              className=" flex gap-2 items-center px-4 py-2 bg-[#4f5f76] text-white rounded-sm border border-transparent hover:bg-white hover:text-gray-800 hover:border-white transition duration-300 ease-in-out "
              key={category}
            >
              <img
                src={categoryImage[category]}
                className=" object-contain aspect-square w-10 h-10 rounded-sm"
              ></img>
              <span className="righteous-regular  ">{category}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Category;
