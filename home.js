let score=0
let index=0
let questions=[
    {
        qn:"What is the capital of france?",
        option1:"Berlin",
        option2:"Madrid",
        option3:"Paris",
        option4:"Spain",
        ans:"Paris"
    },{
        qn:"what is 2+2",
        option1:"2",
        option2:"4",
        option3:"1",
        option4:"9",
        ans:"4"
    },{
        qn:"which programming langugae this quiz written in",
        option1:"JavaScript",
        option2:"Java",
        option3:"cpp",
        option4:"python",
        ans:"JavaScript"
    }
]

displayQuestions(index)
function displayQuestions(index){
    if(index<questions.length){
    let question=document.getElementById("question")
    question.innerHTML=questions[index].qn
    let option1=document.getElementById("op1")
    option1.innerHTML=questions[index].option1
    let option2=document.getElementById("op2")
    option2.innerHTML=questions[index].option2
    let option3=document.getElementById("op3")
    option3.innerHTML=questions[index].option3
    let option4=document.getElementById("op4")
    option4.innerHTML=questions[index].option4
}else{
    displayResult(score);
}
}
function scorecalcualtor(event){
   let answeredQuestion= event.target.innerHTML

   console.log(questions.length)
   if(answeredQuestion==questions[index].ans){
    score++;
   }
   index++;
   displayQuestions(index)
}
function displayResult(score){
    document.write(`you scored ${score} out of ${questions.length}`)
}