import React from "react";
import Button from "../button/Button";
import "./Modal.css"

const Modal = ({ isOpen, onClose, onSave }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-container">
          <h2 className="modal-title">Añadir tratamiento</h2>
  
          <label className="modal-label">
            Nombre de tratamiento:
            <input
              type="text"
              placeholder="Escribe aquí..."
              className="modal-input"
            />
          </label>
  
          <label className="modal-label">
            Descripción:
            <textarea
              placeholder="Escribe aquí..."
              className="modal-textarea"
              rows="4"
            />
          </label>
  
          <div className="modal-actions">
            <Button text="Cancelar" type="danger" onClick={onClose} className="btn btn-cancel"></Button>
            <Button text="Guardar" type="primary"
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
  
  export default Modal;