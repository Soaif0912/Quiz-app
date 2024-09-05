
import "./QuizAppCss.css";
import { useState } from "react";
import QuizQuestions from "./QuizQuestions.json"
import Result from "./Component/result";
import Question from "./Component/questions";


const QuizApp =()=>{

    const [currentQuestions, setCurrentQuestions] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);

    const handleNextQuestion =(isCorrect)=>{
        setCurrentQuestions(currentQuestions +1);
        setUserAnswer([...userAnswer,isCorrect]);
        console.log(userAnswer);
    }
    const resetQuiz=()=>{
        setCurrentQuestions(0);
        setUserAnswer([]);
    }

    return(
        <div className="App">
            <h1>Worlds Quiz</h1>

            {/* question component */}
            {currentQuestions < QuizQuestions.length ? 
            <Question question={QuizQuestions[currentQuestions]}  onAnswerClick={handleNextQuestion} />:""
            }


            {/* user answer component */}
            {currentQuestions === QuizQuestions.length ?
            <Result userAnswer={userAnswer} question={QuizQuestions} onReset={resetQuiz} />
            :""}

        </div>
    )
}
export default QuizApp;