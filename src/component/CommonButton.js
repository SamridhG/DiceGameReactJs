const CommonButton=(props)=>{
    const {innertext,bgColor,textColor,isBorder,callback}=props.css
    const borderclass=isBorder? "border border-black":" ";
    const classname=`w-[330px] h-[66px] rounded-lg font-semibold text-3xl ${bgColor} ${textColor} ${borderclass}`
    return (
         <button className={classname} onClick={callback}>
          {innertext}
         </button>
    )
}
export default CommonButton;