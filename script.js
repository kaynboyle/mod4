let time = 75;
let timer;
let score = 0;

const questions = [
    {
        title: "Java indexes start with which number?",
        choices: ["10", "-1", "1", "0"],
        answer: "0"
    },
    {
        title: "How do you insert comments in Java code?",
        choices: ["#like this", "{like this}", "//like this", "**like this"],
        answer: "//like this"
    },
    {
        title: "Which one gets the length of a string?",
        choices: ["len()", "length()", "getLength()", "numeric()"],
        answer: "length()"
    },
    {
        title: "Which method can be used to find the highest value of x and y?",
        choices: ["Math.largest(x,y)", "Math.maxNum(x,y)", "Math.max(x,y)", "max(x,y)"],
        answer: "Math.max(x,y)"
    },
    {
        title: "Which is the proper format of an if statment in Java?",
        choices: ["if x>y:", "if x>y()", "(if x>y then)", "if (x>y)"],
        answer: "if (x>y)"
    }
]

document.querySelector(".start").addEventListener("click", function() {
    //hide start
    document.querySelector(".start-container").classList.add("hide");
    //show Questions - continaer
    document.querySelector(".question-container").classList.remove("hide");
    //start the timer
    timer = setInterval(function() {
        time--;
        document.querySelector("#time").textContent = time;
        if (time <= 0) {
            end();
        }
    },1000)
    //generate the first question   
    makeQuestion();
});

let qIndex = 0;
const makeQuestion = function() {
    const q = questions[qIndex];
    const template = `
        <div>
            <div>${q.title}</div>
            <ul class="choices-container">
                <li class="answer-choice">${q.choices[0]}</li>
                <li class="answer-choice">${q.choices[1]}</li>
                <li class="answer-choice">${q.choices[2]}</li>
                <li class="answer-choice">${q.choices[3]}</li>
                <li class="answer-choice">${q.choices[4]}</li>
            </ul>
        </div>
    `;

    document.querySelector(".question-container").innerHTML = template;
}

document.querySelector(".question-container").addEventListener("click", function(event) {
    if (event.target.className.includes("answer-choice")) {
        const q = questions[qIndex];
        //check if the answer is right
        if (q.answer === event.target.textContent) {
            score++;
        } else {
            time -= 5;
        }
        //show the next question
        qIndex++;
        if (qIndex === questions.length) {
            end()
        }
        makeQuestion();
    }
});

const end = function() {
     //hide question
     document.querySelector(".question-container").classList.add("hide");
     //show end - continaer
     document.querySelector(".end-container").classList.remove("hide");
        //show score
     document.querySelector("#score").textContent =score;
     //stop timer
     clearInterval(timer);
    }

var score_names = [
    {
        names: 'Kaylin',
        score: '3',
    }
]
// add the namee inputed to the empty list with the score attached- {name:score}
// for i in len(score_names) display score_names[i]
//store as an array of objects
// add {name: #initials
        // score: score}
// addEventListener.onclick
// const nstitle = "top scores";
let nsIndex = 0;


// event listener, when the user clicks sumbit after entering their initials the following should happen
document.querySelector(".submit").addEventListener("click", function(){
    // once submit has been clicked the div which is the class score_board should be revealed
    document.querySelector(".score_board").classList.remove("hide");
    // ns is now the first array in the list of arrays because nsIndex = 0

    const ns = score_names[nsIndex];
    // making a template to be put into score_board
    const template2 =  `
    <div>
        <div>${nstitle}</div>
        <ul class="score_board">
            <li class="answer-choice">${ns.names[0]}</li>

        </ul>
    </div>
    `;
    document.querySelector(".score_board").innerHTML = template;
});

            // <li class="answer-choice">${ns.names[1]}</li>
            // <li class="answer-choice">${ns.names[2]}</li>
            // <li class="answer-choice">${ns.names[3]}</li>