import React from "react";

const Result=({score,playagain})=>(
        
                <div className="score-board">
                        <div className="score">{score}</div>
                        <button className="playBtn" onClick={playagain}>PlayAgain!</button>
                </div>
        
)
export default Result;