function submitAnswers(){
    var total = 3;
    var score = 0;

    //user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;

    //validation
    for(i=1; i<=total; i++){
        if (eval('q'+i) == null || eval('q'+i) == ''){
            alert("You missed question " + i);
            return false;
        }
    }

    //set correct answers
    var answers=["a","d", "b"];

    //check answers
    for(i=1; i<=total; i++){
        if(eval('q'+i) == answers[i-1]){
            score++;
        }
    }

    //results
    var results = document.getElementById('results');
    results.innerHTML='<h3>You scored <span>'+ score + '</span> out of <span>' + total +'</span></h3>';
    alert("Quiz finished!");

    return false;
}

 