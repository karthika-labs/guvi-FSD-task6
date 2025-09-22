# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#  Shopping Cart Application

A React.js based **E-Commerce Shopping Cart** application built with **React Router, Tailwind CSS, and FakeStore API**.  
This app demonstrates routing, state management, cart handling, product filtering, and UI interactions with toasts.

---

##  Features

- **Home (Products Route)**
  - Displays all products from FakeStore API
  - Each product has **Add to Cart** button
  - If product already in cart → button changes to **Remove**
  - Tooltip on hover: *"Already in cart — click to Remove"*

- **Cart**
  - Shows all items added to cart
  - Item count displayed on **cart icon badge**
  - Items can be removed directly
  - **Dynamic total calculation** with **10% discount**
  - Toast notifications:
    - ✅ Item added successfully
    - ❌ Item removed from cart

- **Category Route**
  - Filters products by selected category
  - Shows category-specific products using API data

- **Overview Route**
  - Displays full details of a single product
  - Includes product rating, description, price, and add/remove cart button

- **Toasts**
  - Success (green) → Item added
  - Error (red) → Item removed
  - Auto hide after 2 seconds

---

##  Tech Stack

- **Frontend:** React.js, React Router
- **Styling:** Tailwind CSS
- **API:** [FakeStore API](https://fakestoreapi.com/)
- **UI Features:** Toasts, Tooltips, Responsive Layouts

---

##  Project Structure

