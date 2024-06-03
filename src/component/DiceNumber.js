const DiceNumber=({currSelected,setcurrSelected ,mynumber})=>{
   onClickButton=()=>{
    if(mynumber==currSelected){
        setcurrSelected(null)
    }else{
        setcurrSelected(mynumber)
    }
   }
   const align='mx-4 h-28 w-28 text-4xl font-bold'
   const unSelectedClassName=`text-black bg-white border border-black hover:text-white hover:bg-black ${align}`
   const SelectedClassName=`text-white bg-black border border-black font-bold ${align}`
  return (
        <button className={mynumber==currSelected?SelectedClassName:unSelectedClassName} onClick={onClickButton}>{mynumber}</button>
  )
}
export default DiceNumber;