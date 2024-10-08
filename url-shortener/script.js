const toggleContainer = document.querySelector(".toggle-container");
const toggleBar = document.querySelector(".toggle-bar");
const toggleClose = document.querySelector(".toggle-close");
const navSection = document.querySelector(".nav-section");
const heroSection = document.querySelector(".left-hero h1");
const rightNav = document.querySelector(".right-nav");
const leftNav = document.querySelector(".left-nav-content");
const outputDisplay = document.querySelector(".here");

toggleBar.addEventListener("click", () => {
  toggleClose.classList.toggle("visible");
  toggleBar.classList.add("hidden");
  rightNav.classList.add("visible");
  leftNav.classList.add("visible");
  leftNav.setAttribute("display", "block");
  heroSection.classList.add("add-margin");
});
toggleClose.addEventListener("click", () => {
  toggleBar.classList.remove("hidden");
  toggleClose.classList.toggle("visible");
  rightNav.classList.remove("visible");
  leftNav.classList.remove("visible");
  heroSection.classList.remove("add-margin");
});

const inputEl = document.querySelector(".input");
const shortenBtn = document.querySelector(".btn-shorten");
const causion = document.querySelector(".causion");

let url;
let shortUrl;
let btnText = "copy";
let btn_Copied;
let single_btn;

shortenBtn.addEventListener("click", () => {
  url = inputEl.value;
  if (url.trim() !== "") {
    shortenUrl();
    setTimeout(() => {
      createNew();
    }, 1000);
    setTimeout(() => {
      btn_Copied = document.querySelectorAll(".btn-copy");
      console.log(btn_Copied);
      btn_Copied?.forEach((btn) =>
        btn.addEventListener("click", () => {
          btn.textContent = "Copied";
          localStorage.setItem("link", shortUrl);
          navigator.clipboard.writeText(shortUrl);
          btn.classList.add("btn-style");
        })
      );
    }, 1200);

    inputEl.value = "";
    causion.classList.remove("visible");
    inputEl.classList.remove("border-style");
  } else {
    inputEl.classList.add("border-style");
    causion.classList.add("visible");
  }
});

async function shortenUrl() {
  const url = inputEl.value;
  const response = await fetch(
    `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
  );
  if (response.ok) {
    const data = await response.text();
    shortUrl = data;
  } else {
    alert("Error while Shortening");
    shortUrl = "Error while Shortening";
  }
}
const createNew = () => {
  const singleOuput = `  <section class="output-display">
    <div class="single">
      <div class="left-output">
        <b>${url}</b>
      </div>
      <div class="right-output">
        <b>${shortUrl}</b>
        <button class="btn-copy">${btnText}</button>
         </div>
    </div>
  </section>`;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = singleOuput;
  outputDisplay.append(newDiv);
};
// createNew();

// console.log(single_btn);
// single_btn?.addEventListener("click", () => {
//   alert("clicked");
//   single_btn.classList.add("btn-style");
//   single_btn.textContent = "Copied";
// });
// btn_Copied?.forEach((btn) =>
//   btn.addEventListener("click", () => {
//     btn.textContent = "Copied";
//     btn.classList.add("btn-style");
// console.log(btn_Copied.length);
//   })
// );
