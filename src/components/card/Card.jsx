import React from "react";
import "./Card.css"

const Card = ({imagen ="", title="", text=""}) => {
    return (
        <div className="card">
            <img src={imagen} alt="{title}" />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
  };
  
  export default Card;