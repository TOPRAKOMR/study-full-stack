import "./Card.css"
import { languages } from "../../helpers/data";
import Item from "../item/Item";
import "./Card.css";

const Card =()=>{

    return(
        <div className="card-area-container">
            <div className="bar"></div>
            <h5 className="language-title"> Languages</h5>
            <div className="card-container">
            {languages.map((item, index) =>{
                return <Item card={item} key={index}/>;
            })}
            </div>
            
            
           

        </div>


    )
}

export default Card;