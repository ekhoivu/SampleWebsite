/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       KHOI VU
 *      Student ID: 124611203
 *      Date:       March 21st, 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
// Menu buttons
window.addEventListener("DOMContentLoaded", () => {
  var menu = document.querySelector("#menu");
  categories.forEach((element) => {
    let button = document.createElement("button");
    button.id = element.id;
    button.innerText = element.name;
    menu.appendChild(button);
  });
  defaultHeader();
  defaultBanner();
  updateDisplayHeader();
  updateBanner();
  displayProducts();
});

let updateBanner = () => {
  let allButtons = document.querySelectorAll("button");
  allButtons.forEach((element) => {
    element.addEventListener("click", () => {
      var banner = document.querySelector("#banner");
      banner.innerHTML = "";
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].name === element.innerText) {
          var image = document.createElement("img");
          image.src = categories[i].imageUrl;
          banner.appendChild(image);
        }
      }
    });
  });
};

let updateDisplayHeader = () => {
  let allButtons = document.querySelectorAll("button");
  allButtons.forEach((element) => {
    element.addEventListener("click", () => {
      var headerName = document.querySelector("#selected-category");
      headerName.innerText = element.innerText;
    });
  });
};

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  let title = document.createElement("h2");
  title.innerHTML = `${product.title}`;
  let description = document.createElement("p");
  description.innerHTML = `${product.description}`;
  let price = document.createElement("span");
  let priceCurrency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "CAD" }).format(
    product.price
  );
  price.innerHTML = `${priceCurrency}`;
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);

  return card;
}

let defaultHeader = () => {
  var headerName = document.querySelector("#selected-category");
  headerName.innerText = categories[0].name;
  let tbody = document.querySelector("#category-products");
  tbody.innerHTML = "";
  products.forEach((e) => {
    if (e.discontinued === false && e.categories.includes(`${categories[0].id}`)) {
      let card = createProductCard(e);
      tbody.appendChild(card);
    }
  });
};

let displayProducts = () => {
  let allButtons = document.querySelectorAll("button");
  allButtons.forEach((element) => {
    element.addEventListener("click", () => {
      let tbody = document.querySelector("#category-products");
      tbody.innerHTML = "";
      products.forEach((e) => {
        if (e.discontinued === false && e.categories.includes(`${element.id}`)) {
          let card = createProductCard(e);
          tbody.appendChild(card);
        }
      });
    });
  });
};

let defaultBanner = () => {
  var banner = document.querySelector("#banner");
  banner.innerHTML = "";
  var image = document.createElement("img");
  image.src = categories[0].imageUrl;
  banner.appendChild(image);
};
