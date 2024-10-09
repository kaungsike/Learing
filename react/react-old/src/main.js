import "./index.css";

const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]

const root = document.querySelector("#root");

const title = document.createElement("p");
title.innerText = "Product Categories";
// title.classList.add("text-2xl ","text-gray-600")
title.classList.add("text-2xl","mb-3","ml-5")


const categoryButton = (categoryName) => {
    const btn = document.createElement("button");
    btn.innerText = categoryName;
    btn.classList.add("border","px-4","py-2","mx-5")
    return btn;
}
root.append(title);
categories.forEach((category) => root.append(categoryButton(category)) )

