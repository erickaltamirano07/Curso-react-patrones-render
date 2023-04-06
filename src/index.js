import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
//import App from "./components/App.js";

function App(props){
    return (        
        <h1>!{props.saludo}, {props.name}</h1>    
    )
}

function withSaludo(WrappedComponent){
    return function WrappedComponentWithSaludo(saludo){
        return function ComponenteDeVerdad(props) {
            return (
                <React.Fragment>
                <WrappedComponent {...props} saludo={saludo}/>
                <p>Estamos Acompañando al WrappedComponent </p>            
            </React.Fragment>
            );
        }
    }
}

const AppWithSaludo = withSaludo(App)('Buenas');

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App saludo="Buenas" name="Nath"/>);
root.render(<AppWithSaludo name="Nath"/>);
