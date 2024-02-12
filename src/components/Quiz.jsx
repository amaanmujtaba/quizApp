import { useState } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";


function shuffleArray(array) {
    // Create a copy of the original array to avoid modifying the original
    const newArray = array.slice();
    
    // Iterate over the array in reverse order
    for (let i = newArray.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
    
        // Swap elements at indices i and j
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    
    return newArray;
}

const shuffled = shuffleArray(QUESTIONS);

const corretAnswers = [];
shuffled.forEach(element => {
    corretAnswers.push(element.answers[0]);
});

shuffled.forEach((element,index) => {
    shuffled[index].answers = shuffleArray(shuffled[index].answers)
});



export default function Quiz(){


    const [userAnswer, setUserAnswer] = useState([]);
    const qIndex = userAnswer.length;

    function handleSelect(answer){
        setUserAnswer((prev) => {
            return [...prev, answer]
        })
    }

    if(userAnswer.length === QUESTIONS.length){
        return (
            <Summary userAnswer = {userAnswer} corretAnswers ={corretAnswers} questions = {shuffled}/>
        )
    }






    
    return(
        <div id="quiz">
            <div id="question">
                <h2> {shuffled[qIndex].text} </h2>
                <ul id = "answers">
                    {shuffled[qIndex].answers.map(function(answer){
                        return(
                            <li className="answer" key = {answer}> 
                                <button onClick={()=>handleSelect(answer)}>{answer}</button> 
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}