import "./index.css";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// const categories = [
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing",
// ];

const root = document.querySelector("#root");

// console.log(createElement("p",null,"Product Category"))

// const app = createElement(
//   "div",
//   { id: "category-section", className: "p-5" },
//   createElement(
//     "p",
//     { className: "text-2xl text-gray-600" },
//     "Product Category"
//   ),
//   createElement(
//     "div",
//     { className: "mt-5" },
//     categories.map((category) =>
//       createElement(
//         "button",
//         { className: "border px-4 py-2 border-black mx-2" },
//         category
//       )
//     )
//   )
// );

createRoot(root).render(App());

// const title = document.createElement("p");
// title.innerText = "Product Categories";
// // title.classList.add("text-2xl ","text-gray-600")
// title.classList.add("text-2xl","mb-3","ml-5")

// const categoryButton = (categoryName) => {
//     const btn = document.createElement("button");
//     btn.innerText = categoryName;
//     btn.classList.add("border","px-4","py-2","mx-5")
//     return btn;
// }
// root.append(title);
// categories.forEach((category) => root.append(categoryButton(category)) )
