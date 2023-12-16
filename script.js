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
        "question": "Der größte Berg der Welt?",
        "answer_1": "Mount Rushmore",
        "answer_2": "Ever Mounterest",
        "answer_3": "Mount Everest",
        "answer_4": "Zugspitze",
        "right_answer": 3
    },
    {
        "question": "Wie heißt der Protagonist von 'The Witcher 3'",
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

let currentQuestion = 0;

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
   
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answerGiven(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);

let idOfRightAnswer = `answer_${question['right_answer']}`;


    if(selectedQuestionNumber == question['right_answer']){
        console.log(selection, 'ist die richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success')
    } else {
         document.getElementById(selection).parentNode.classList.add('bg-danger')
         document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
    }
    document.getElementById('nextButton').disabled = false;

}

function nextQuestion() {
    currentQuestion++; //Array wird hier von 0 auf 1 gestellt;
    

    document.getElementById('nextButton').disabled = true;
    resetQuestion();
    showQuestion();
  

}

function resetQuestion(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');

    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

