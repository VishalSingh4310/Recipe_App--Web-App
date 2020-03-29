import React from "react";
const Recipe = props => {
   return (
      <div className="card_head">
         {/* <Link to={`/${props.title}`}> */}
         <div className="img_head">
            <img className="image" src={props.image} alt={props.title}></img>
         </div>
         {/* </Link> */}
         <div className="content">
            <h3 className="card_title">{props.title}</h3>
            <p className="card_cal">
               <strong>Calories:</strong> {props.cal}<br></br>
               <strong>Ingredients:</strong><br></br>
               <ul>
               {props.ingrid.map((item,pos)=>(
                  <li key={pos}>{item.text}</li>
               ))}
               </ul>
             
            </p>
         </div>
         {/* <Link to={`/${props.title}`}> */}
         {/* <button className="see">See More</button> */}
         {/* </Link> */}
      </div>
   );
};
export default Recipe;
