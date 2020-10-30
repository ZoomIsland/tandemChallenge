let currentQuestion = 0;
let currentDivSelect = ".q" + currentQuestion.toString();
let answers = [];

$(".startBtn").on("click", () => {
  $(".startBtn").addClass("hidden")
  $(currentDivSelect).removeClass("hidden");
})

$(".answerBtn").on("click", (event) => {
  let answer = event.target.value
  const target = $( event.target )
  const responseDiv = target.parent().parent().children(".correctOrWrong")
  if (answer === "false") {
    target.addClass("wrong")
    responseDiv.children(".wrongAnswer").removeClass("hidden")
  } else {
    answers.push(answer)
    target.addClass("correct")
    responseDiv.children(".correctAnswer").removeClass("hidden")
  }
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
  } else {
    const resultsDiv = $(".results")
    const result = (answers.length / 10) * 100;
    resultsDiv.children('.resultText').text(`You answered ${result}% correct!`)
    resultsDiv.removeClass("hidden");
  }
})



//upon clicking start/next
  //new question is made visible on the questionContainer

//upon answer
  //all other answer buttons are disabled
  // "next" button is appended