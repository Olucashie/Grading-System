
function calculateGrade() {
    const score = document.getElementById("score").value;
   
    var grade = Number(score.value)
    var songfail = new Audio ("audios/failure.mp3")
    var songpass = new Audio ("audios/good.mp3")
    var songaverage = new Audio ("audios/average.mp3")
    var songcredit = new Audio ("audios/credit.mp3")
    var songgood = new Audio ("audios/pass.mp3")
    var songexcellent = new Audio ("audios/clapping.mp3") 



    // let grade = "";
    if (score == ""){
      grade = "Empty ❗";
    }else if (score>100){
      grade = "Out of Score"
    } else if(score <0){
grade = "Lower than the score"
    }
    else if (score >=  90) {
      grade = "A1🙌";
      songexcellent.play()
    } else if (score >= 80) {
      grade = "B2👏";
      songgood.play()
    } else if (score >= 70) {
      grade = "B3🤝";
      songpass.play()
    } else if (score >= 65) {
      grade = "C4😏";
      songcredit.play()
    }else if (score >= 60) {
      grade = "C5🤨";
      songgood.play()
    }else if (score >= 55) {
      grade = "C6😒";
      songaverage.play()
    }else if (score >= 45) {
      grade = "D7🙁";
      songfail.play()
    }else if (score <= 40 || score == 0) {
      grade = "F9😢";
      songfail.play()
    }

    const result = document.getElementById("result");
    result.innerHTML = `Your grade is <span class="grade-${grade}">${grade}</span>`;
  }
  