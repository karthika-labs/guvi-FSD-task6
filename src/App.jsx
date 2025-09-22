import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProductPage from "./ProductPage";
import CategoryPage from "./CategoryPage";
import Products from "./Products";
import Category from "./Category";
import Cart from "./Cart";
import NavBar from "./NavBar";
import ProductOverview from "./ProductOverview";



function App() {
  // State to hold the displayed products (can be filtered)
  const [products, setProducts] = useState([]);

  // State to hold the original full list of products from the API
  const [allProducts, setAllProducts] = useState([]);

  // state for cart items
  const [cart, setCart] = useState([]);

  // Fetch products from the API and store in both states
  let getProducts = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    if (data.ok) {
      let resultData = await data.json();
      setProducts(resultData);
      setAllProducts(resultData);
      console.log("data fetched");
    }
  };

  useEffect(() => {
    console.log("fetched data 1"); // Fetch products once when the component mounts
    getProducts();
  }, []);

  // Show all products by resetting the displayed list from the original full list
  let handleShowAll = () => {
    console.log("category");
    setProducts(allProducts);
  };

  // Add to Cart
  let handleCart = (product) => {
    let isCart = cart.some((item) => item.id === product.id);
    if (isCart) {
      return console.log("Item already in the cart");
    } else {
      setCart([...cart, product]);
      console.log("cart product:", cart);
    }
  };

  // Remove from Cart
  let handleRemove = (product) => {
    let index = cart.findIndex((item) => item.title == product.title);
    console.log("remove index:", index);
    cart.splice(index, 1);
    console.log("remove", cart);
    setCart([...cart]);
  };

  return (
    <Router>
      <div className="w-full mx-auto bg-gradient-to-r from-[#0f2862] via-[#9e363a] via-[#091f36] to-[#4f5f76] ">
        <Routes>
          <Route path="/" element={<NavBar product={cart}></NavBar>}>
            <Route
              index
              element={<Navigate to="products" replace></Navigate>}
            ></Route>
            <Route
              path="/products"
              element={
                <ProductPage
                  product={products}
                  cart={cart}
                  handleCart={handleCart}
                  handleRemove={handleRemove}
                ></ProductPage>
              }
            >
              <Route
                path=":id"
                element={
                  <ProductOverview
                    products={products}
                    handleCart={handleCart}
                    cart={cart}
                    handleRemove={handleRemove}
                  ></ProductOverview>
                }
              ></Route>
            </Route>
            
            <Route
              path="cart"
              element={<Cart product={cart} handleRemove={handleRemove} />}
            />
            <Route
              path="category"
              element={<CategoryPage allProducts={allProducts}></CategoryPage>}
            >
              {/* Nested route: show all products initially */}
              <Route
                index
                element={
                  <ProductPage
                    product={products}
                    cart={cart}
                    handleCart={handleCart}
                    handleRemove={handleRemove}
                  ></ProductPage>
                }
              ></Route>

              {/* Nested route: filter by category */}
              <Route
                path=":category"
                element={
                  <ProductPage
                    product={products}
                    cart={cart}
                    handleCart={handleCart}
                    handleRemove={handleRemove}
                  ></ProductPage>
                }
              ></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* <Route
            path="/products"
            element={<Cart product={cart} handleRemove={handleRemove}></Cart>}
           ></Route> */
}
