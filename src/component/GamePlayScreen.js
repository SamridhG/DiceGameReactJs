import { useState } from "react";
import DiceNumber from "./DiceNumber";
const GamePlayScreen=()=>{
   const [numberSelected,setnumberSelected]=useState(null)
   const [gamescore,setgamescore]=useState(0)
   const option_number=6
   option_buttons=[]
   for(let idx=1;idx<=option_number;idx++){
         option_buttons.push(<DiceNumber key={idx} currSelected={numberSelected} setcurrSelected={setnumberSelected} mynumber={idx}/>)
   }
   return (<div className="mx-24 flex justify-between">
    <div>
        <div className="m-6 text-9xl font-bold text-center">{gamescore}</div>
        <div className="text-4xl font-bold text-center">Total Score</div>
    </div>
    <div>
         {numberSelected==null ? <div className="m-4 flex justify-end items-end text-4xl text-red-600">You have not selected any number</div>:<div  className="m-4 h-10"></div>}  
         <div className="flex justify-end">
         {option_buttons}
         </div>
         <div className="m-4 flex justify-end items-end text-4xl text-black font-bold">Select Number</div>
    </div>
   
   </div>
    
   )
}
export default GamePlayScreen;