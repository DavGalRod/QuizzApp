let questions = [
    {
        "question": "Wer ist der älteste meiner Brüder?",
        "answer_1": "Julien",
        "answer_2": "Luis",
        "answer_3": "Antonio",
        "answer_4": "Felipe",
        "right_answer": 3
    },
    {
        "question": "Welcher ist der größte Berg der Welt?",
        "answer_1": "Mount Rushmore",
        "answer_2": "Ever Mounterest",
        "answer_3": "Mount Everest",
        "answer_4": "Zugspitze",
        "right_answer": 3
    },
    {
        "question": "Wie heißt der Protagonist von 'The Witcher 3'?",
        "answer_1": "Geralt von Rivia",
        "answer_2": "Super Mario",
        "answer_3": "Link",
        "answer_4": "Alexander der Große",
        "right_answer": 1
    },
    {
        "question": "Das erste Element im Periodensystem der Elemente?",
        "answer_1": "Sauerstoff (O)",
        "answer_2": "Eisen (Fe)",
        "answer_3": "Xenon (Xe)",
        "answer_4": "Wasserstoff (H)",
        "right_answer": 4
    }



];

let rightQuestions = 0;
let currentQuestion = 0;

let audioStart = new Audio('sounds/gameMusic.mp3');
let audioSuccess = new Audio('sounds/success.mp3');
let audioFail = new Audio('sounds/fail.mp3');



function init() {
    document.getElementById('allQuestions',).innerHTML = questions.length;
    audioStart.play();

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        //EndScreen       
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('quizEnd').style = '';
        document.getElementById('restartButton').style = '';
        document.getElementById('allQuestionsTwo').innerHTML = questions.length;
        document.getElementById('rightAnswers').innerHTML = rightQuestions;
        document.getElementById('imageID').src = 'img/pokal.jpg';
        document.getAnimations('imageID').innerHTML = percent;

    } else { //shows Question

        //Percent-Bar:
        let percent = Math.round(currentQuestion / questions.length * 100);
        document.getElementById('percentBar').innerHTML = `${percent}%`;
        document.getElementById('percentBar').style = `width: ${percent}%`;



        let question = questions[currentQuestion];

        document.getElementById('pageOfQuestion').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answerGiven(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (selectedQuestionNumber == question['right_answer']) {
        console.log(selection, 'ist die richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success')
        audioSuccess.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
        audioFail.play();
    }
    document.getElementById('nextButton').disabled = false;
  

}

function nextQuestion() {
    currentQuestion++; //Array wird hier von 0 auf 1 gestellt;



    document.getElementById('nextButton').disabled = true;
    resetQuestion();
    showQuestion();


}

function resetQuestion() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');

    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('imageID').src = 'img/card_img.jpg';
    rightQuestions = 0;
    currentQuestion = 0;
    document.getElementById('questionBody').style = '';
    document.getElementById('quizEnd').style = 'display: none';
    init();

}

