let currentQuestion = 0;
let currentDivSelect = ".q" + currentQuestion.toString();
let answers = [];

$(".startBtn").on("click", () => {
  $(currentDivSelect).removeClass("hidden");
})

$(".answerBtn").on("click", (event) => {
  answers.push(event.target.value)
  console.log(answers)
  const target = $( event.target )
  target.prop("disabled", true)
  target.siblings().prop("disabled", true)
  target.parent().parent().children('.nextBtn').removeClass("hidden")
})

$(".nextBtn").on("click", () => {
  $(currentDivSelect).addClass("hidden");
  currentQuestion++;
  currentDivSelect = ".q" + currentQuestion.toString();
  if (currentQuestion < 10) {
    $(currentDivSelect).removeClass("hidden");
  }
})



//upon clicking start/next
  //new question is made visible on the questionContainer

//upon answer
  //all other answer buttons are disabled
  // "next" button is appended