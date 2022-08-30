const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hero Test Made Language",
        ans: "ans3"
    },

    {
        question: "Q2: What is CSS?",
        a: "CSS is a style sheet language",
        b: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
        c: "CSS is the language used to style the HTML documents",
        d: "All of the mentioned",
        ans: "ans4"
    },

    {
        question: "Q3:  Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        a: "HTML",
        b: "PHP",
        c: "CSS",
        d: "AJAX",
        ans: "ans3"
    },

    {
        question: "Q4: Which of the following CSS framework is used to create a responsive design?",
        a: "Bootstrap",
        b: "django",
        c: "Spring Boot",
        d: "Flask",
        ans: "ans1"
    }
];


const question = document.querySelector('.question');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

const submitBtn = document.querySelector('#submit');

let questionCount = 0;
let score=0;

//Load Question 
const loadQuestion = ()=>{
    const questionList = quizDB[questionCount];

    //Putting question on Page
    question.innerText = questionList.question;

    //Putting options on Page
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

//Load Question
loadQuestion();


//Adding Event Listener on Submit Button
submitBtn.addEventListener('click',function(){

    //Get Checked Answer
    const checkedAnswer = getCheckedAnswer();

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    //Increment the question count by 1
    questionCount++;

    //Removing Selected Options
    deselectAll();

    if(questionCount < quizDB.length){
        //Loading Next Question on clicking submit button
        loadQuestion();
    }else{

        //Showing Score and Play Again
        showScore.innerHTML = `
            <h3>Your Score - ${score}/${quizDB.length}</h3>

            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        //Removing score Area class which has a property display:none
        showScore.classList.remove('scoreArea');

    }
});


//Get Checked Answer
const getCheckedAnswer = ()=>{
    let answer;

    //Looping through Answers Array
    answers.forEach(currentAns => {
        if(currentAns.checked){
            answer = currentAns.id;
        }
    });

    return answer;
}


//Deselecct ALl
const deselectAll = ()=>{
    answers.forEach(currentAns =>{
        currentAns.checked = false;
    });
}