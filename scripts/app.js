let currentQuestion = 0;
let currentDivSelect = ".q" + currentQuestion.toString();
let answers = [];
const fadeDuration = 250;

$(".questionContainer").hide();
$(".results").hide();

$(".startBtn").on("click", () => {
  $(".startBtn").hide();
  $(currentDivSelect).fadeIn(fadeDuration);
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
  target.removeClass("answerBtn")
  target.siblings().prop("disabled", true)
  target.siblings().removeClass("answerBtn")
  target.parent().parent().children('.nextBtn').removeClass("hidden")
})

$(".nextBtn").on("click", () => {
  $(currentDivSelect).fadeOut(fadeDuration);
  currentQuestion++;
  currentDivSelect = ".q" + currentQuestion.toString();
  if (currentQuestion < 10) {
    setTimeout(() => {
      $(currentDivSelect).fadeIn(fadeDuration);
    }, fadeDuration)
  } else {
    const resultsDiv = $(".results")
    const result = (answers.length / 10) * 100;
    resultsDiv.children('.resultText').text(resultText(result))
    setTimeout(() => {
      resultsDiv.fadeIn(fadeDuration);
    }, fadeDuration)
  }
})

function resultText(result) {
  let resultText = `You answered ${result}% correct!`
  if (result < 50) {
    resultText += " Not great... Try again and see if you can do better!"
  } else if (result <= 80) {
    resultText += " I bet you can do even better next time..."
  } else if (result < 100) {
    resultText += " Very good! Try again to see if you can get every question right!"
  } else {
    resultText += " Wow, you must be some sort of genius."
  }
  return resultText;
}