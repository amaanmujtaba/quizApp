import quizComplete from "../assets/quiz-complete.png";



export default function Summary({ userAnswer , corretAnswers, questions }){
        let correct = 0;
        userAnswer.forEach((element, index) => {
            if(userAnswer[index] === corretAnswers[index]){
                correct += 1;
            } 
        });
        console.log("correct:" + correct);
        return(
            <div id="summary">

                <img src = {quizComplete} alt ="trophy"></img>
                <h2>COMPLETED</h2>
                <div id = "summary-stats">
                    <p>
                     <span className="number">{100*(correct/userAnswer.length).toFixed(2)}%</span>
                    <span className="text">Correct</span>
                    </p>
                    <p>
                     <span className="number">{(100-(100*(correct/userAnswer.length))).toFixed(0)}%</span>
                    <span className="text">Wrong</span>
                    </p>
                </div>
            


                <ol>
                    {questions.map(function(question, index){
                        let css = "user-answer";
                        if(corretAnswers[index]===userAnswer[index]){
                            css+= " correct";
                        }
                        else{
                            css+= " wrong";
                        }
                        return(
                            <li key = {question+index}> 
                                <h3>{index+1}</h3>
                                <p className="question">{question.text}</p> 
                                <p className={css}>{corretAnswers[index]}</p>

                            </li>
                        )
                    })}
                </ol>
            </div>
        )
}