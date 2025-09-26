import React from "react";
import './Square.css'

const Square = ({type="admin", children}) => {

  
    return (
        <div className={`page-container ${type}`}>
            {children}
      </div>
    )
  }
  
  export default Square