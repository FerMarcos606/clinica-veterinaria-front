import React from "react";
import Button from "../button/Button";
import "./Modal.css"

const Modal = ({ question="", isOpen, onClose, onSave }) => {
    if (!isOpen) return null;
  
    return (
      <div className="decisionmodal-overlay">
        <div className="decisionmodal-container">
            <img src="../../assets/imgs/logo.png"></img>
          <h2 className="decisionmodal-title">{question}</h2>
  
          <div className="decisionmodal-actions">
          <Button text="SI" type="primary"
              onClick={() => {
                onSave();
                onClose();
              }}
            >
            </Button>
            <Button text="NO" type="secundary" onClick={onClose} className="btn btn-cancel"></Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;