
const Result =({userAnswer, question, onReset=()=>{}})=>{

    const correctAnswer = userAnswer.filter((answer)=>answer).length;
    return(
        <div className="result">
            <h2>Results</h2>
            <p>You answered {correctAnswer} out of {question.length} question. 
            <span onClick={onReset}>Click here to Retry</span></p>

            <ul>{question.map((question, index)=>{
                return(
                    <li key={index} data-correct={userAnswer[index]} >
                        Q{index+1}. {question.question} {" "}
                        <b>
                            <span className="correctAnswer">{question.answerOptions.find((ans)=>ans.isCorrect).text}</span>
                        </b>
                    </li>
                )
            })}</ul>

        </div>
    )
}
export default Result;