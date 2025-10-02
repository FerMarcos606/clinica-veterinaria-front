import React from "react";
import Button from "../button/Button";
import "./SuccessIModal.css"

const SuccessIModal = ({ title="", text= "", isOpen, onClose, onSave }) => {
    if (!isOpen) return null;
  
    return (
      <div className="successmodal-overlay">
        <div className="successmodal-container">
            <img src="../../assets/imgs/check.png" alt="" />
          <h2 className="successmodal-title">{title}</h2>
  
          <p>{text}</p>
  
          <div className="sucessmodal-actions">
            <Button text="Iniciar sesión" type="primary"
              onClick={() => {
                onSave();
                onClose();
              }}
            >
            </Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SuccessIModal;