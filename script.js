let time = 75;
let timer;
let score = 0;
let qIndex = 0;

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

document.querySelector(".highscores").addEventListener("click", function() {
    document.querySelector(".score_board1").classList.remove("hide");
    document.querySelector(".score_board").classList.remove("hide");

});

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
        } else {
            makeQuestion();
        }
    }
});

const end = function() {
     //hide question
     document.querySelector(".question-container").classList.add("hide");
     //show end - continaer
     document.querySelector(".end-container").classList.remove("hide");
     document.querySelector(".submit").classList.remove("hide");
     document.querySelector("#score").classList.remove("hide");
        //show score
     document.querySelector("#score").textContent =score;
     //stop timer
     clearInterval(timer);
    }

// var score_names = [
//     {
//         names: 'K',
//         score: '3',
//     },

// ]
// add the namee inputed to the empty list with the score attached- {name:score}
// for i in len(score_names) display score_names[i]
//store as an array of objects
// add {name: #initials
        // score: score}
// addEventListener.onclick


// event listener, when the user clicks sumbit after entering their initials the following should happen
document.querySelector(".submit").addEventListener("click", function(){
    // once submit has been clicked the div which is the class score_board should be revealed
    //get initials get score
    // for i in array show every item for every element make a list element-  append name and score
    //empty ul
    document.querySelector(".score_board1").classList.remove("hide");

    // score_names['#initials'] = score;
    
    // get the initials value
    const initials = document.querySelector("#initials").value;
    // construct an oject entry
    const dataEntry = {
        initials: initials,
        score: score
    }
    // get old data from
    const oldData = JSON.parse(localStorage.getItem("userEntry")) || [];
    //add entry into old data array
    oldData.push(dataEntry);
    //write the data into storage
    localStorage.setItem("userEntry",JSON.stringify(oldData));

    



    let template = "";

    oldData.forEach((datum) => {
        template += `
            <div>
                <span>${datum.initials}: </span><span>${datum.score}</span>
            </div>
        `
    });

    document.querySelector(".score_board").innerHTML = template;
});

document.querySelector(".back").addEventListener("click", function(){
    document.querySelector(".score_board1").classList.add("hide");
    // document.querySelector(".score_board").classList.add("hide");
    document.querySelector(".submit").classList.add("hide");
    document.querySelector("#score").classList.add("hide");
    document.querySelector(".end-container").classList.add("hide");
    time = 75;
    score = 0;
    qIndex = 0;
    document.querySelector(".start-container").classList.remove("hide");
    makeQuestion().then(end()).then(document.querySelector(".score_board1").classList.remove("hide"),document.querySelector(".score_board").classList.remove("hide"));

    
    document.querySelector(".score_board").classList.remove("hide");
});


// document.querySelector(".back").addEventListener("click", function(){
//     document.querySelector(".end-container").classList.remove("hide");
// });


document.querySelector(".reset").addEventListener("click", function(){
    document.querySelector(".score_board1").classList.add("hide");
    // document.querySelector(".score_board").classList.add("hide");
    document.querySelector(".submit").classList.add("hide");
    document.querySelector("#score").classList.add("hide");
    document.querySelector(".end-container").classList.add("hide");
    time = 75;
    score = 0;
    qIndex = 0;
    localStorage.clear()
    document.querySelector(".start-container").classList.remove("hide");
    makeQuestion().then(end()).then(document.querySelector(".score_board1").classList.remove("hide"),document.querySelector(".score_board").classList.remove("hide"));

    
    document.querySelector(".score_board").classList.remove("hide");
    // document.querySelector(".score_board").classList.add("hide");
});





// I NEED HELP WITH .... 
//THIS PART
// - i cant get the questions to work when i do "back"
// they dont load so i cant' tell if reset works either






// document.querySelector(".submit").addEventListener("click", function(){
//     document.querySelector(".score_board").classList.remove("hide");
//     let time = 75;
//     let score = 0;
//     let qIndex = 0;
//     // makeQuestion();
// });
// reset function  // reset game button and go back button

            // <li class="answer-choice">${ns.names[1]}</li>
            // <li class="answer-choice">${ns.names[2]}</li>
            // <li class="answer-choice">${ns.names[3]}</li>