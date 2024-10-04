const data = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};

const topReply = document.querySelector(".top-reply");
const topReplyModal = document.querySelector(".top-reply-modal");
const btnTopModalReply = document.querySelector(".btn-top-modal-reply");
const modalEditTop = document.querySelector(".modal-edit-top");
const topUpdatedText = document.querySelector(".top-updated-text");
const replyInput = document.querySelector(".reply-text-top");
const replyInputText = document.querySelector(".top-updated-text");
const editText = document.querySelector(".edit-container");
const textAreaTopNext = document.querySelector(".text-area-top");
const btnTopUpdate = document.querySelector(".send-top");
const deleteOption = document.querySelector(".delete-option");
const deleteTop = document.querySelector(".delete-top");
const no = document.querySelector(".no");
const yes = document.querySelector(".yes");
const plusTop = document.querySelector(".plus-top");
const minusTop = document.querySelector(".minus-top");
const topValue = document.querySelector(".top-value");

plusTop.addEventListener("click", () => {
  topValue.innerText++;
  if (topValue.innerText > 12) {
    plusTop.setAttribute("disabled", true);
    minusTop.removeAttribute("disabled", true);
  }
});
minusTop.addEventListener("click", () => {
  topValue.innerText--;
  if (topValue.innerText < 12) {
    minusTop.setAttribute("disabled", true);
    plusTop.removeAttribute("disabled", true);
  }
});

let replyText;
//top reply button
topReply.addEventListener("click", () => {
  topReplyModal.classList.add("visible");
  topReply.setAttribute("disabled", true);
});

//Reply Modal Button
btnTopModalReply.addEventListener("click", () => {
  replyText = replyInput.value;
  // console.log(replyText);
  replyInputText.textContent = replyText;
  topReplyModal.classList.remove("visible");
  modalEditTop.classList.add("visible");
});
//Delete Modal Button
let topCount;
deleteTop.addEventListener("click", () => {
  topCount = 0;
  deleteOption.classList.add("visible");
  topReplyModal.classList.remove("visible");
  // modalEditTop.classList.add("visible");
});
yes.addEventListener("click", () => {
  if (topCount === 0) {
    deleteOption.classList.remove("visible");
    modalEditTop.classList.remove("visible");
    topReply.removeAttribute("disabled", true);
    replyText = "";
    replyInput.value = "@amyrobson, ";
  }
});
no.addEventListener("click", () => {
  deleteOption.classList.remove("visible");
});
//edit button
editText.addEventListener("click", () => {
  textAreaTopNext.value = replyText;
  // alert(replyText);
  topUpdatedText.classList.add("hidden");
  textAreaTopNext.classList.add("visible");
  btnTopUpdate.classList.add("visible");

  // modalEditTop.classList.add("visible");
});

//update button

btnTopUpdate.addEventListener("click", () => {
  replyText = textAreaTopNext.value;
  replyInputText.textContent = replyText;

  topUpdatedText.classList.remove("hidden");
  textAreaTopNext.classList.remove("visible");
  btnTopUpdate.classList.remove("visible");
});

// ==============================================================
// ==============================================================

const topNReply = document.querySelector(".top-next");
const nextReplyModal = document.querySelector(".next-reply-modal");
const btnNextModalReply = document.querySelector(".btn-next-modal-reply");
const modalEditNext = document.querySelector(".modal-edit-next");
const nextUpdatedText = document.querySelector(".next-updated-text");
const replyInputN = document.querySelector(".reply-text-next");
const replyInputTextN = document.querySelector(".next-updated-text");
const editTextN = document.querySelector(".next-container");
const textAreaNext = document.querySelector(".text-area-next");
const btnNextUpdate = document.querySelector(".send-next");
const deleteNext = document.querySelector(".delete-next");
const plusNext = document.querySelector(".plus-next");
const minusNext = document.querySelector(".minus-next");
const nextValue = document.querySelector(".next-value");

plusNext.addEventListener("click", () => {
  nextValue.innerText++;
  if (topValue.innerText > 5) {
    plusNext.setAttribute("disabled", true);
    minusNext.removeAttribute("disabled", true);
  }
});
minusNext.addEventListener("click", () => {
  nextValue.innerText--;
  if (nextValue.innerText < 5) {
    minusNext.setAttribute("disabled", true);
    plusNext.removeAttribute("disabled", true);
  }
});

let replyTextN;

//top reply button
topNReply.addEventListener("click", () => {
  nextReplyModal.classList.add("visible");
  topNReply.setAttribute("disabled", true);
});

//Reply Modal Button
btnNextModalReply.addEventListener("click", () => {
  replyTextN = replyInputN.value;
  // console.log(replyText);
  replyInputTextN.textContent = replyTextN;
  nextReplyModal.classList.remove("visible");
  modalEditNext.classList.add("visible");
});
//Delete Modal Button
deleteNext.addEventListener("click", () => {
  topCount = 1;
  deleteOption.classList.add("visible");
  nextReplyModal.classList.remove("visible");
  // modalEditNext.classList.add("visible");
});
yes.addEventListener("click", () => {
  if (topCount === 1) {
    deleteOption.classList.remove("visible");
    modalEditNext.classList.remove("visible");
    topNReply.removeAttribute("disabled", true);
    replyTextN = "";
    replyInputN.value = "@amyrobson, ";
  }
});
no.addEventListener("click", () => {
  deleteOption.classList.remove("visible");
});
//edit button
editTextN.addEventListener("click", () => {
  textAreaNext.value = replyTextN;
  // alert(replyText);
  nextUpdatedText.classList.add("hidden");
  textAreaNext.classList.add("visible");
  btnNextUpdate.classList.add("visible");

  // modalEditTop.classList.add("visible");
});

//update button

btnNextUpdate.addEventListener("click", () => {
  replyTextN = textAreaNext.value;
  replyInputTextN.textContent = replyTextN;

  nextUpdatedText.classList.remove("hidden");
  textAreaNext.classList.remove("visible");
  btnNextUpdate.classList.remove("visible");
});
// ==============================================================
// ==============================================================

const topLReply = document.querySelector(".last-reply");
const lastReplyModal = document.querySelector(".last-reply-modal");
const btnLastModalReply = document.querySelector(".btn-last-modal-reply");
const modalEditLast = document.querySelector(".modal-edit-last");
const lastUpdatedText = document.querySelector(".last-updated-text");
const replyInputL = document.querySelector(".reply-text-last");
const replyInputTextL = document.querySelector(".last-updated-text");
const editTextL = document.querySelector(".last-container");
const textAreaLast = document.querySelector(".text-area-last");
const btnLastUpdate = document.querySelector(".send-last");
const deleteLast = document.querySelector(".delete-last");
const plusLast = document.querySelector(".plus-last");
const minusLast = document.querySelector(".minus-last");
const lastValue = document.querySelector(".last-value");

plusLast.addEventListener("click", () => {
  lastValue.innerText++;
  if (lastValue.innerText > 4) {
    plusLast.setAttribute("disabled", true);
    minusLast.removeAttribute("disabled", true);
  }
});
minusLast.addEventListener("click", () => {
  lastValue.innerText--;
  if (lastValue.innerText < 4) {
    minusLast.setAttribute("disabled", true);

    plusLast.removeAttribute("disabled", true);
  }
});
let replyTextL;
//top reply button
topLReply.addEventListener("click", () => {
  lastReplyModal.classList.add("visible");
  topLReply.setAttribute("disabled", true);
});

//Reply Modal Button
btnLastModalReply.addEventListener("click", () => {
  replyTextL = replyInputL.value;
  // console.log(replyText);
  replyInputTextL.textContent = replyTextL;
  lastReplyModal.classList.remove("visible");
  modalEditLast.classList.add("visible");
});

//Delete Modal Button
deleteLast.addEventListener("click", () => {
  topCount = 2;
  deleteOption.classList.add("visible");
  lastReplyModal.classList.remove("visible");
  // modalEditLast.classList.add("visible");
});
yes.addEventListener("click", () => {
  if (topCount === 2) {
    deleteOption.classList.remove("visible");
    modalEditLast.classList.remove("visible");
    topLReply.removeAttribute("disabled", true);
    replyTextL = "";
    replyInputL.value = "@amyrobson, ";
  }
});
no.addEventListener("click", () => {
  deleteOption.classList.remove("visible");
});

//edit button
editTextL.addEventListener("click", () => {
  textAreaLast.value = replyTextL;
  // alert(replyText);
  lastUpdatedText.classList.add("hidden");
  textAreaLast.classList.add("visible");
  btnLastUpdate.classList.add("visible");

  // modalEditTop.classList.add("visible");
});

//update button

btnLastUpdate.addEventListener("click", () => {
  replyTextL = textAreaLast.value;
  replyInputTextL.textContent = replyTextL;

  lastUpdatedText.classList.remove("hidden");
  textAreaLast.classList.remove("visible");
  btnLastUpdate.classList.remove("visible");
});
// ==============================================================
// ==============================================================

const modalEditEx = document.querySelector(".modal-edit-ex");
const exUpdatedText = document.querySelector(".ex-updated-text");

const replyInputTextE = document.querySelector(".ex-updated-text");
const editTextE = document.querySelector(".ex-container");
const textAreaEx = document.querySelector(".text-area-ex");
const btnExUpdate = document.querySelector(".send-ex");
const exQuote = document.querySelector(".quote-ex");
const deleteEx = document.querySelector(".delete-ex");
const up = document.querySelector(".btn-up");
const down = document.querySelector(".btn-down");
const textValue = document.querySelector(".text-value");

up.addEventListener("click", () => {
  textValue.innerText++;
  if (textValue.innerText > 0) {
    up.setAttribute("disabled", true);
    down.removeAttribute("disabled", true);
  }
});
down.addEventListener("click", () => {
  if (textValue.innerText > 0) {
    textValue.innerText--;
    down.setAttribute("disabled", true);
    up.removeAttribute("disabled", true);
  }
});
let replyTextE;

//edit button
editTextE.addEventListener("click", () => {
  replyTextE = replyInputTextE.innerText;
  textAreaEx.value = replyTextE;
  // alert(replyTextE);
  exUpdatedText.classList.add("hidden");
  exQuote.classList.add("hidden");
  textAreaEx.classList.add("visible");
  btnExUpdate.classList.add("visible");

  // modalEditTop.classList.add("visible");
});
//Delete Modal Button
deleteEx.addEventListener("click", () => {
  topCount = 3;
  deleteOption.classList.add("visible");
  // nextReplyModal.classList.remove("visible");
  // modalEditNext.classList.add("visible");
});
yes.addEventListener("click", () => {
  if (topCount === 3) {
    deleteOption.classList.remove("visible");
    modalEditEx.classList.add("hidden");
  }
});
no.addEventListener("click", () => {
  deleteOption.classList.remove("visible");
});

//update button

btnExUpdate.addEventListener("click", () => {
  replyTextE = textAreaEx.value;
  replyInputTextE.textContent = replyTextE;
  exQuote.classList.remove("hidden");

  exUpdatedText.classList.remove("hidden");
  textAreaEx.classList.remove("visible");
  btnExUpdate.classList.remove("visible");
});

// window.addEventListener("DOMContentLoaded", () => renderPosts());

// ==============================================================
// ==============================================================

const addModal = document.querySelector(".add-modal"); // send button
const inputAddNew = document.querySelector(".input-add-new"); //send text area
const modalEditNew = document.querySelector(".modal-edit-new"); // modal container
const editTextNew = document.querySelector(".new-container"); //edit icon
const newUpdatedText = document.querySelector(".new-updated-text"); //p text
const textAreaNew = document.querySelector(".text-area-new"); //edit textarea
const btnNewUpdate = document.querySelector(".send-new"); //update btn
const deleteNew = document.querySelector(".delete-new"); //update btn

const newSection = document.querySelector(".new-section");
let myDiv = document.createElement("div");

let replyTextNew;
//send button
addModal.addEventListener("click", () => {
  replyTextNew = inputAddNew.value.trim();
  if (replyTextNew !== "") {
    newUpdatedText.innerText = replyTextNew;
    modalEditNew.classList.add("visible");
    inputAddNew.value = "";
    // topLReply.setAttribute("disabled", true);
  }
});

//Delete Modal Button
deleteNew.addEventListener("click", () => {
  topCount = 4;
  deleteOption.classList.add("visible");
  // nextReplyModal.classList.remove("visible");
  // modalEditNext.classList.add("visible");
});
yes.addEventListener("click", () => {
  if (topCount === 4) {
    deleteOption.classList.remove("visible");
    modalEditNew.classList.remove("visible");
    topNReply.removeAttribute("disabled", true);
  }
});
no.addEventListener("click", () => {
  deleteOption.classList.remove("visible");
});

//edit button
editTextNew.addEventListener("click", () => {
  textAreaNew.value = replyTextNew;
  // alert(replyText);
  newUpdatedText.classList.add("hidden");
  textAreaNew.classList.add("visible");
  btnNewUpdate.classList.add("visible");
  // modalEditTop.classList.add("visible");
});

//update button

btnNewUpdate.addEventListener("click", () => {
  replyTextNew = textAreaNew.value;
  newUpdatedText.textContent = replyTextNew;

  newUpdatedText.classList.remove("hidden");
  textAreaNew.classList.remove("visible");
  btnNewUpdate.classList.remove("visible");
});

// ================================================================================
// ================================================================================

// modal reply section
const up0 = document.querySelector(".up");
const down0 = document.querySelector(".down");
const text0 = document.querySelector(".text");

up0.addEventListener("click", () => {
  text0.innerText++;
  if (text0.innerText > 0) {
    up0.setAttribute("disabled", true);
    down0.removeAttribute("disabled", true);
  }
});
down0.addEventListener("click", () => {
  if (text0.innerText > 0) {
    text0.innerText--;
    down0.setAttribute("disabled", true);
    up0.removeAttribute("disabled", true);
  }
});
//one
const up1 = document.querySelector(".up-1");
const down1 = document.querySelector(".down-1");
const text1 = document.querySelector(".text-1");

up1.addEventListener("click", () => {
  text1.innerText++;
  if (text1.innerText > 0) {
    up1.setAttribute("disabled", true);
    down1.removeAttribute("disabled", true);
  }
});
down1.addEventListener("click", () => {
  if (text1.innerText > 0) {
    text1.innerText--;
    down1.setAttribute("disabled", true);
    up1.removeAttribute("disabled", true);
  }
});

//two
const up2 = document.querySelector(".up-2");
const down2 = document.querySelector(".down-2");
const text2 = document.querySelector(".text-2");

up2.addEventListener("click", () => {
  text2.innerText++;
  if (text2.innerText > 0) {
    up2.setAttribute("disabled", true);
    down2.removeAttribute("disabled", true);
  }
});
down2.addEventListener("click", () => {
  if (text2.innerText > 0) {
    text2.innerText--;
    down2.setAttribute("disabled", true);
    up2.removeAttribute("disabled", true);
  }
});

//three
const up3 = document.querySelector(".up-3");
const down3 = document.querySelector(".down-3");
const text3 = document.querySelector(".text-3");

up3.addEventListener("click", () => {
  text3.innerText++;
  if (text3.innerText > 0) {
    up3.setAttribute("disabled", true);
    down3.removeAttribute("disabled", true);
  }
});
down3.addEventListener("click", () => {
  if (text3.innerText > 0) {
    text3.innerText--;
    down3.setAttribute("disabled", true);
    up3.removeAttribute("disabled", true);
  }
});

const addThis = `  <div class="">
              <div class="top-modal-width modal-edit-new">
                <div class="single-post">
                  <div class="left">
                    <div class="img-container">
                      <img src="images/icon-plus.svg" alt="" />
                    </div>
                    <b>0</b>
                    <div class="img-container">
                      <img src="images/icon-minus.svg" alt="" />
                    </div>
                  </div>
                  <div class="middle top-modal-width" id="my-width">
                    <div class="top">
                      <div class="top-left">
                        <img
                          src="images/avatars/image-juliusomo.png"
                          alt=""
                          class="img"
                        />
                        <b>juliusomo</b>
                        <span id="you">You</span>
                        <p>Now</p>
                      </div>
                      <div class="top-right edit-delete-btn">
                        <span class="delete-container">
                          <img src="images/icon-delete.svg" alt="" /><b
                            class="delete"
                            >Delete</b
                          >
                        </span>
                        <span class="new-container">
                          <img src="images/icon-edit.svg" alt="" />
                          <b class="edit">Edit</b>
                        </span>
                      </div>
                    </div>
                    <div class="middle-text top-text-width">
                      <p class="width-manage"></p>
                      <p class="new-updated-text"></p>

                      <div class="bottom-section modal-width">
                        <textarea
                          name=""
                          id=""
                          style="resize: none"
                          placeholder="Add a comment..."
                          class="text-area-new"
                        >
  @remsesmiron, </textarea
                        >
                      </div>
                      <div
                        class="bottom-section"
                        style="justify-content: flex-end; padding: 5px 0"
                      >
                        <button class="btn-send send-new">UPDATE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
