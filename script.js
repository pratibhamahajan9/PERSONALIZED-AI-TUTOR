let studentName = "";
let studentLevel = "";
let studentScore = 0;

const quizQuestions = [
    {
        question: "1. What is an Operating System?",
        options: [
            "A type of hardware",
            "System software that manages computer resources",
            "A programming language",
            "A database"
        ],
        answer: 1
    },

    {
        question: "2. Which data structure follows FIFO?",
        options: [
            "Stack",
            "Tree",
            "Queue",
            "Graph"
        ],
        answer: 2
    },

    {
        question: "3. Which language is mainly used to structure a web page?",
        options: [
            "HTML",
            "SQL",
            "Python",
            "Java"
        ],
        answer: 0
    },

    {
        question: "4. What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User"
        ],
        answer: 0
    },

    {
        question: "5. Which algorithm is used to find the shortest path?",
        options: [
            "Dijkstra's Algorithm",
            "Binary Search",
            "Bubble Sort",
            "Linear Search"
        ],
        answer: 0
    },

    {
        question: "6. Which data structure uses LIFO?",
        options: [
            "Queue",
            "Stack",
            "Array",
            "Graph"
        ],
        answer: 1
    },

    {
        question: "7. What is the full form of HTTP?",
        options: [
            "Hyper Text Transfer Protocol",
            "High Transfer Text Program",
            "Hyperlink Transfer Technology Process",
            "Host Text Transfer Protocol"
        ],
        answer: 0
    },

    {
        question: "8. Which one is a database management system?",
        options: [
            "MySQL",
            "HTML",
            "CSS",
            "CPU"
        ],
        answer: 0
    },

    {
        question: "9. Which technique divides a problem into smaller subproblems?",
        options: [
            "Divide and Conquer",
            "Linear Search",
            "Compilation",
            "Encryption"
        ],
        answer: 0
    },

    {
        question: "10. Which of the following is an example of AI?",
        options: [
            "Calculator only",
            "AI chatbot",
            "Keyboard",
            "Monitor"
        ],
        answer: 1
    }
];


function login() {

    studentName = document.getElementById("studentName").value;

    if (studentName === "") {
        alert("Please enter your name");
        return;
    }

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";

    document.getElementById("welcomeName").innerText =
        "Welcome, " + studentName + "!";
}


function startLearning() {

    document.getElementById("homePage").style.display = "none";
    document.getElementById("learningPage").style.display = "block";
    showAdaptiveQuestion();

    document.getElementById("learningLevel").innerText =
        "Your Level: " + studentLevel;

    if (studentLevel === "Beginner") {

        document.getElementById("learningTitle").innerText =
            "Beginner Learning";

        document.getElementById("learningContent").innerText =
            "Artificial Intelligence (AI) is a technology that enables computers to perform tasks that normally require human intelligence.";

        document.getElementById("practiceQuestion").innerText =
            "What is Artificial Intelligence? Explain it in your own words.";

    }

    else if (studentLevel === "Intermediate") {

        document.getElementById("learningTitle").innerText =
            "Intermediate Learning";

        document.getElementById("learningContent").innerText =
            "Artificial Intelligence is a field of computer science that develops systems capable of learning from data, recognizing patterns and making decisions.";

        document.getElementById("practiceQuestion").innerText =
            "Explain two real-world applications of Artificial Intelligence.";

    }

    else {

        document.getElementById("learningTitle").innerText =
            "Advanced Learning";

        document.getElementById("learningContent").innerText =
            "Artificial Intelligence involves computational methods that enable machines to learn from data, perform inference, optimize decisions and adapt their behaviour.";

        document.getElementById("practiceQuestion").innerText =
            "Explain how Machine Learning differs from traditional rule-based programming.";
    }
}


function startTest() {

    document.getElementById("homePage").style.display = "none";
    document.getElementById("testPage").style.display = "block";

    displayQuestions();
}


function displayQuestions() {

    let questionHTML = "";

    quizQuestions.forEach((q, index) => {

        questionHTML += `
            <div class="question">

                <h3>${q.question}</h3>

                ${q.options.map((option, optionIndex) => `
                    <label>
                        <input
                            type="radio"
                            name="question${index}"
                            value="${optionIndex}">
                        ${option}
                    </label>
                `).join("")}

            </div>
        `;
    });

    document.getElementById("questions").innerHTML = questionHTML;
}


function submitTest() {

    let scoreValue = 0;



    quizQuestions.forEach((q, index) => {

        let selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (selected && Number(selected.value) === q.answer) {
            scoreValue++;
        }
    });

studentScore = scoreValue;
    
    let levelValue;

    if (scoreValue <= 4) {

        levelValue = "Beginner";

    } else if (scoreValue <= 7) {

        levelValue = "Intermediate";

    } else {

        levelValue = "Advanced";
    }

    studentLevel = levelValue;


    document.getElementById("testPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";

    document.getElementById("score").innerText =
        "Score: " + scoreValue + " / 10";

    document.getElementById("level").innerText =
        "Knowledge Level: " + levelValue;

    document.getElementById("recommendation").innerText =
        "Your learning content will be personalized according to your level.";
}


function goHome() {

    document.getElementById("resultPage").style.display = "none";
    document.getElementById("learningPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
}


function showProgress() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("progressPage").style.display = "block";

    document.getElementById("progressName").innerText = studentName;
    document.getElementById("progressScore").innerText =
    "🎯 Diagnostic Score: " + studentScore + " / 10";

document.getElementById("progressLevel").innerText =
    "📈 Knowledge Level: " + studentLevel;
}


function revision() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("revisionPage").style.display = "block";
}
function checkAnswer() {
    let answer = document.getElementById("answer").value.toLowerCase();

    if (answer.trim() === "") {
        alert("Please explain the concept first.");
        return;
    }

    if (
        answer.includes("learn") ||
        answer.includes("think") ||
        answer.includes("human") ||
        answer.includes("task") ||
        answer.includes("data") ||
        answer.includes("decision")
    ) {
        document.getElementById("feedback").innerText =
            "Good explanation! You have understood the basic concept of Artificial Intelligence.";
    } else {
        document.getElementById("feedback").innerText =
            "Let's improve your understanding. Review the concept and try again.";
    }
}
function showAdaptiveQuestion() {

    let question = "";

    if (studentLevel === "Beginner") {
        question = "Easy: What is one real-world example of Artificial Intelligence?";
    } 
    else if (studentLevel === "Intermediate") {
        question = "Medium: Explain two applications of Artificial Intelligence.";
    } 
    else {
        question = "Difficult: Explain the difference between Artificial Intelligence and Machine Learning.";
    }

    document.getElementById("adaptiveQuestion").innerText = question;
}
function completeRevision() {
    document.getElementById("revisionFeedback").innerText =
        "Excellent! Revision completed successfully. Keep revising the topic at regular intervals.";
}