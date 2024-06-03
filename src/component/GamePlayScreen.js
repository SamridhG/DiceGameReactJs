import { useState } from "react";
import DiceNumber from "./DiceNumber";
import dice_1 from '../../asset/textures/dice_1.png'
import dice_2 from '../../asset/textures/dice_2.png'
import dice_3 from '../../asset/textures/dice_3.png'
import dice_4 from '../../asset/textures/dice_4.png'
import dice_5 from '../../asset/textures/dice_5.png'
import dice_6 from '../../asset/textures/dice_6.png'
import CommonButton from "./CommonButton";
const GamePlayScreen=()=>{
   const dicearray=[dice_1,dice_2,dice_3,dice_4,dice_5,dice_6]
   const [numberSelected,setnumberSelected]=useState(null)
   const [gamescore,setgamescore]=useState(0)
   const [dice,setdice]=useState(1)
   const option_number=6
   const deduct_score=2;
   option_buttons=[]
   for(let idx=1;idx<=option_number;idx++){
         option_buttons.push(<DiceNumber key={idx} currSelected={numberSelected} setcurrSelected={setnumberSelected} mynumber={idx}/>)
   }
   onClickImg=()=>{
    const no=Math.ceil(Math.random()*6)
      setdice(no)
      let add=0;
      console.log("result",no,numberSelected)
      if(no==numberSelected){
        add=gamescore+no;
      }else{
        add=gamescore-deduct_score<0?0:gamescore-deduct_score;
      }
      setgamescore(add)
    }
    onClickReset=()=>{
        setgamescore(0);
        setdice(1)
        setnumberSelected(null)
        
    }
   return (
    <div>
        <div className="mx-24 flex justify-between">
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
        <div className="flex flex-col items-center justify-center gap-9 " style={{ height: "calc(100vh - 256px)" }}>
            <div>
                <img className='object-cover object-center'onClick={numberSelected!=null? onClickImg:null} src={dicearray[dice-1]}></img>
            </div>
            <div className="text-4xl">Click on Dice to roll</div>
            <CommonButton css={{
                       innertext:"Reset",
                       bgColor:"bg-white",
                       textColor:"text-black",
                       callback:onClickReset,
                       isBorder:true
                    }}/>
        </div>
    </div>
    
   )
}
export default GamePlayScreen;