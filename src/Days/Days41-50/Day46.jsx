import "./Style/Day46.css";
import { useEffect } from "react";

export default function Day46() {
    const quizData = [
        {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
        },
        {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
        },
        {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
        },
        {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
        }
    ];

    useEffect(() => {
        loadQuiz();
    }, [])

    let currentQuiz = 0;
    let score = 0;

    function loadQuiz() {
        const questionEl = document.getElementById("question");
        const a_text = document.getElementById("a_text");
        const b_text = document.getElementById("b_text");
        const c_text = document.getElementById("c_text");
        const d_text = document.getElementById("d_text");
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }

    function deselectAnswers() {
        const answerEls = document.querySelectorAll(".answer");
        answerEls.forEach((answerEl) => (answerEl.checked = false));
    }

    function getSelected() {
        const answerEls = document.querySelectorAll(".answer");
        let answer;
        answerEls.forEach((answerEl) => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        });
        return answer;
    }

    function handleClick() {
        const quiz = document.getElementById("quiz");
        const answer = getSelected();
            if (answer) {
                if (answer === quizData[currentQuiz].correct) {
                    score++;
                }
              currentQuiz++;
                if (currentQuiz < quizData.length) {
                    loadQuiz();
                } else {
                    quiz.innerHTML = `
                            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                            <button onclick="location.reload()">Reload</button>
                        `;
                }
            }  
    }

    return (
        <div className="contenedorDia46">
            <div className="quiz-container" id="quiz">
                <div className="quiz-header">
                    <h2 id="question">Question text</h2>
                    <ul>
                        <li>
                            <input type="radio" name="answer" id="a" className="answer" />
                            <label for="a" id="a_text">
                                Question
                            </label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="b" className="answer" />
                            <label for="b" id="b_text">
                                Question
                            </label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="c" className="answer" />
                            <label for="c" id="c_text">
                                Question
                            </label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="d" className="answer" />
                            <label for="d" id="d_text">
                                Question
                            </label>
                        </li>
                    </ul>
                </div>
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}