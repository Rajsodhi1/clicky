import React from "react";
import "./imageCards.css";


const imageCard = props => (
   <div className="imageCard">
      <img className="image" alt={props.character} src={props.image} onClick={() => props.handleCLick(props.id)}></img>
    </div>
  );

export default imageCard;