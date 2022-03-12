const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById(".progress");
const formSteps = document.querySelectorAll(".form-step");

let formStepsNum = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // move from one step to another
    formStepsNum++;
    updateFormSteps();
  });
});

function updateFormSteps(){
  formSteps[formStepsNum].classList.add("form-step-active")
}

