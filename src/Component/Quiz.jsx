import { useCallback, useState } from 'react';
import REACT_QUESTIONS from '../questions.js'
import quizComplete from '../assets/quiz-complete.png'
import Timer from './Timer.jsx';

function Quiz()
{
    const [answer,setAnswer] = useState([]);

    const selectedQuestion = answer.length;
    const isGameOver = answer.length === REACT_QUESTIONS.length;

    const answerClicking = useCallback(
    function answerClicking(ans)
    {
        setAnswer((prevAnswer)=>{
            return(
                [...prevAnswer,ans]
            );
        });
        console.log(ans);
    },[]);
    
    const answerClickingTimeout = useCallback(() => answerClicking(null) ,[answerClicking])

    if(isGameOver)
    {
        return(
        <div id="summary">
            <img src={quizComplete} alt='Game Completed.Thank you For Playing!!'/>
            <h2>Game Over!!</h2>
        </div>
        );
    }

    const shuffledAnswers = REACT_QUESTIONS[selectedQuestion].answers;
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return(
        <div id="quiz">
            <div id="question">
                <Timer key={selectedQuestion} timeOut = {20000} onTimeOut={answerClickingTimeout} />
                <h2>{REACT_QUESTIONS[selectedQuestion].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((ans) => {
                       return <li key={ans} className="answer">
                            <button onClick={()=> answerClicking(ans)}>{ans}</button>
                        </li>
                })}
                </ul>
            </div>
        </div>
    );
}

export default Quiz;
