import { Link } from 'react-router-dom';
import diceImg from '../../asset/textures/dicesicon.png'
import CommonButton from './CommonButton';
import { useNavigate } from 'react-router-dom';
const LandingPage=()=>{
    const navigate=useNavigate()
    const onClickPlayNow=()=>{
        navigate('/gameplay')
    }
    return(
        <div className="w-screen h-screen flex justify-center items-center">
              <div>
                <img className='object-cover object-center w-[975px] h-[783px]' src={diceImg}></img>
              </div>
              <div className='flex flex-col justify-center items-end'>
                    <h1 className='w-[792px] h-[216px] font-bold text-9xl flex items-center justify-end'>DICE GAME</h1>
                    <CommonButton css={{
                       innertext:"Play Now",
                       bgColor:"bg-black",
                       textColor:"text-white",
                       callback:onClickPlayNow,
                       isBorder:false
                    }}/>
              </div>
        </div>
    )
}
export default LandingPage;