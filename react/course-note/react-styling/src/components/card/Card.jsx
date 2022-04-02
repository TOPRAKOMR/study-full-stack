import "./Card.scss"

const Card = ({veri}) => {
    // console.log(veri)
  return (
    <div className="container">
        {veri.map((eleman)=>{
            //destructs
            const {id,countries,capital,img,population}=eleman
            return(
        
                 <div className="card" key={id}>
                     <h1>{countries}</h1>
                     <img src={img} alt="" />
                     <h2>{capital}</h2>
                     <h4>{population}</h4>
                     <button className="card--small">Small</button>
                     <button className="card--large">Large</button>

                 </div>
            )
        }) }
    </div>
  )
}

export default Card