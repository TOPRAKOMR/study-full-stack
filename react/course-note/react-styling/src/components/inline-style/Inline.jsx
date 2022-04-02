const mySytle={
parag:{
  color:"blue",
  fontSize:"2rem",
  fontWeight:"bolder",
  backgroundColor:"black"
},
div:{
  backbroundColor:"gray",
  fontSize:"3.2rem"
}

}



const Inline = () => {
  return (

    <>
    <div style={{backgroundColor:"red",color:"#fff"}}>
      <h1> Hello from inline CSS</h1>

      <div style={mySytle.div}>
        <p style={mySytle.parag}>Lorem ipsum dolor sit amet.
        </p>
      </div>
      

    </div>
    
    </>
  )
}

export default Inline