


const Button = ({toggleShow,color,text}) => {

   
  return (
    <div>
        <button  
        style={{backgroundColor:color}} 
        onClick={toggleShow}>
        {text}
        </button>


    </div>
  )
}

export default Button