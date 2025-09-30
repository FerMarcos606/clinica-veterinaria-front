import React from "react";

const Card = ({imagen ="", title="", text=""}) => {
    return (
        <>
       <img src="{imagen}" alt="" />
       <h2>{title}</h2>
       <p>{text}</p>
       </>
    );
  };
  
  export default Card;