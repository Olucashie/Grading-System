function calculateGrade() {
    const score = document.getElementById("score").value;
  
    let grade = "";
    if (score == ""){
      grade = "Empty ❗";
    } else if (score >=  90) {
      grade = "A1🙌";
    } else if (score >= 80) {
      grade = "B2👏";
    } else if (score >= 70) {
      grade = "B3🤝";
    } else if (score >= 65) {
      grade = "C4😏";
    }else if (score >= 60) {
      grade = "C5🤨";
    }else if (score >= 55) {
      grade = "C6😒";
    }else if (score >= 45) {
      grade = "D7🙁";
    }else if (score <= 40 || score == 0) {
      grade = "F9😢";
    }

    const result = document.getElementById("result");
    result.innerHTML = `Your grade is <span class="grade-${grade}">${grade}</span>`;
  }
  