import React,{Component,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import quizService from "./quizService";
import "./assets/style.css";
import Questionbox from "./Questionbox";
import Result from "./Result";

class QuizBee extends Component
{
  state={
    questionBank:[],
    score:0,
    response:0
  };
computeAns=(text,correct)=>{
if(text===correct)
{
  this.setState({
    score:this.state.score+1
  })
}
this.setState({
  response:this.state.response<5?this.state.response+1:5
})
};
playagain=()=>{
  this.getQuestion();
  this.setState({
    score:0,
    response:0
  })
}
  getQuestion=()=>{
    quizService().then(question=>{
      this.setState({
        questionBank:question
      })
    })
  };
  
  componentDidMount()
  {
    this.getQuestion();
  };
  render()
  {
    return(
      <div className="container">
        <div className="title">QuizBee</div>
    {this.state.questionBank.length>0 && this.state.response<5 && this.state.questionBank.map(({question,answers,correct,questionId})=><Questionbox question={question} option={answers} key={questionId} selected={text=>this.computeAns(text,correct)}/>)}
    {this.state.response===5?(<Result score={this.state.score} playagain={this.playagain}/>):null}
      </div>
    )
  }
}

ReactDOM.render(<QuizBee/>,document.getElementById("root"));
