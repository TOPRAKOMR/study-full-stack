import "./Main.scss";
import {data} from "../../helpers/data";


const Main =()=>{

    return(
        <div className="card-container">
             {data.map((item)=>{
                return(
                    <div className="card">
                        <h1>{item.title}</h1>
                        <img src={item.image} alt=""/>
                    </div>

                )
            })}
s


        </div>
       

           


        
    )
}

export default Main