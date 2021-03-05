import React,{useState} from "react";
const QuestionBox=({question,option,selected})=>{
const [answers,setAnswers]=useState(option)
    return(
        <div className="questionBox">
            <h4 className="question">{question}</h4>
            {answers.map((text,index)=>(
                <button key={index} className="answerBtn" onClick={()=>{
                    setAnswers([text]);
                    selected(text);
                }}>{text}</button>
            ))}
        </div>
    )
}
export default QuestionBox;