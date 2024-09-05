

const Question =({question, onAnswerClick=()=>{}}) =>{

    return(
        <div className="Question">
            <h2>{question.question}</h2>
            <ul className="options">
                {question.answerOptions.map((answers)=>{
                    return(
                        <li key={answers.text}>
                            <button onClick={()=>onAnswerClick(answers.isCorrect)}>{answers.text}</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
export default Question;