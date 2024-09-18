const buttons = document.querySelectorAll(".btn");
const answers = document.querySelectorAll(".answers");
const questions = document.querySelectorAll(".question");

buttons.forEach((btn, btnIndex) =>
  btn.addEventListener("click", () => {
    answers.forEach((answer, answerIndex) => {
      questions.forEach((question, questionIndex) => {
        if (btnIndex === answerIndex) {
          answer.classList.toggle("visible");
          btn.classList.toggle("btn-rotate");
          console.log(btnIndex, questionIndex, answerIndex);
          if (btnIndex === questionIndex) {
            question.classList.toggle("bold");
          }
        }
      });
    });
  })
);
