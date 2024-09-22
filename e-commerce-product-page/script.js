const img_El = document.querySelectorAll(".img-version");

const main_img = document.querySelector(".img-Big");

const float_thumbnail = document.querySelector(".float-background");

let previous_img_index;

img_El.forEach((img) => {
  img.addEventListener("click", () => {
    main_img.src = img.src;
  });
});

main_img.addEventListener("click", () => {
  float_thumbnail.classList.add("show");
});

// Float Thumbnail Version

const img_El_float = document.querySelectorAll(".img-version-float");

const main_img_float = document.querySelector(".img-Big-float");

const btn_close = document.querySelector(".close-img");

img_El_float.forEach((img, imgIndex) => {
  img.addEventListener("click", () => {
    main_img_float.src = img.src;
    previous_img_index = imgIndex;
    // console.log(previous_img_index);
  });
});

btn_close.addEventListener("click", () => {
  float_thumbnail.classList.remove("show");
});

// Navigation Buttons
const next = document.querySelector("#next");
const previous = document.querySelector("#previous");

next.addEventListener("click", () => {
  if (previous_img_index === undefined) {
    previous_img_index = 0;
  }
  if (previous_img_index < img_El_float.length - 1) {
    previous_img_index++;
    // console.log(previous_img_index);
    main_img_float.src = img_El_float[previous_img_index].src;
  }
});

previous.addEventListener("click", () => {
  if (previous_img_index === undefined) {
    previous_img_index = 0;
  }
  if (previous_img_index > 0) {
    previous_img_index--;
    main_img_float.src = img_El_float[previous_img_index].src;
  }
});

// Navigation Buttons Mobile
const next_btn = document.querySelector("#next-btn");
const previous_btn = document.querySelector("#previous-btn");

next_btn.addEventListener("click", () => {
  if (previous_img_index === undefined) {
    previous_img_index = 0;
  }
  if (previous_img_index < img_El.length - 1) {
    previous_img_index++;
    // console.log(previous_img_index);
    main_img.src = img_El[previous_img_index].src;
  }
});

previous_btn.addEventListener("click", () => {
  if (previous_img_index === undefined) {
    previous_img_index = 0;
  }
  if (previous_img_index > 0) {
    previous_img_index--;
    main_img.src = img_El[previous_img_index].src;
  }
});

// Cart section
let cart_count = document.querySelector(".cart-count");
let item_count = document.querySelector("#cart-number");
let add_El = document.querySelector("#add-btn");
let minus_El = document.querySelector("#minus-btn");

// Cart Drop-down
let cart_box = document.querySelector(".cart-details-container");
let cart = document.querySelector(".right-nav");
let cart_empty = document.querySelector(".cart-empty");
let cart_details = document.querySelector(".cart-details");
let multiply = document.querySelector("#mul");
let total = document.querySelector("#total_price");
let delete_icon = document.querySelector("#delete-icon");
let btn_add = document.querySelector(".btn-add-to-cart");

delete_icon.addEventListener("click", () => {
  item_count.textContent = 0;
  cart_count.classList.remove("visible");
  cart_empty.classList.remove("hide");
  cart_details.classList.remove("show-important");
});

add_El.addEventListener("click", () => {
  if (cart_empty.classList.contains("hide")) {
    add_El.setAttribute("disable", true);
  } else {
    item_count.textContent++;

    if (item_count.textContent > 0) {
      // cart_count.classList.add("visible");
      multiply.textContent = item_count.textContent;
      total.textContent = (item_count.textContent * 125).toFixed(2);
      cart_count.textContent = item_count.textContent;
    }
    //   cart_empty.classList.add("hide");
    //   cart_details.classList.add("show-important");
  }
});

minus_El.addEventListener("click", () => {
  if (cart_empty.classList.contains("hide")) {
    minus_El.setAttribute("disable", true);
  } else {
    if (item_count.textContent > 0) {
      item_count.textContent--;
      cart_count.textContent = item_count.textContent;
      total.textContent = (item_count.textContent * 125).toFixed(2);
      multiply.textContent = item_count.textContent;
      if (item_count.textContent <= 0) {
        //   cart_count.classList.remove("visible");
        //   cart_empty.classList.remove("hide");
        //   cart_details.classList.remove("show-important");
      }
    }
  }
});

btn_add.addEventListener("click", () => {
  if (item_count.textContent <= 0) {
    btn_add.setAttribute("disable", true);
  } else {
    cart_count.classList.add("visible");
    cart_details.classList.add("show-important");
    cart_empty.classList.add("hide");
  }
});

//-------------------------------------------------------

//Cart icon
cart.addEventListener("click", () => {
  if (item_count.textContent <= 0) {
    cart_box.classList.toggle("visible");
  } else {
    cart_box.classList.toggle("visible");
  }
});

// Mobile nav
const open = document.querySelector("#open-btn");
const close = document.querySelector("#close-btn");
const nav_mobile = document.querySelector(".main-nav ul");
// const nav_mobile_ul = document.querySelector(".ul");

close.addEventListener("click", () => {
  nav_mobile.classList.remove("show-important");
});
open.addEventListener("click", () => {
  nav_mobile.classList.add("show-important");
  //   nav_mobile_ul.classList.add("show");
});
