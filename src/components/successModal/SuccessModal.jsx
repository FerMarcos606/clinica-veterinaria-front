import React from "react";
import Button from "../button/Button";
import "./SuccessModal.css"

const SuccessModal = ({ title="", text= "", isOpen, onClose}) => {
    if (!isOpen) return null;
  
    return (
      <div className="successmodal-overlay">
        <div className="successmodal-container">
        <div className="sucessmodal-actions">
            <Button text="X" type="danger"
              onClick={() => {
                onClose();
              }}
            >
            </Button>
          </div>
            <img src="../../assets/imgs/check.png" alt="" />
          <h2 className="successmodal-title">{title}</h2>
  
          <p>{text}</p>
  
          
        </div>
      </div>
    );
  };
  
  export default SuccessModal;