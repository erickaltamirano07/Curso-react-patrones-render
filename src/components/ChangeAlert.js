import React from "react";
import { useStorageListener } from "./useStorageListener";
import "../styles/ChangeAlert.css";

function ChangeAlert({sincronize}){
    const {show, toggleShow}= useStorageListener(sincronize);
    if(show){
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                <p>Parece que hubo cambios en otra pestaña</p>
                <p>Quieres sincronizar tus Todos?</p>
                   <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}>
                        Si
                    </button>
                </div> 
            </div>       
      );        
    }else{
        return null;
    }
    
}


export {ChangeAlert};