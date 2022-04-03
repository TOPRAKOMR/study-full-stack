


const Button = ({handleClick,color,text}) => {

   
  return (
    <div>
        <button  
        style={{backgroundColor:color}} 
        onClick={handleClick}>
        {text}
        </button>


    </div>
  )
}

export default Button