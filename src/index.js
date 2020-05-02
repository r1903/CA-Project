import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import RegisterForm from "./components/RegisterForm";

const Index = () => {
  return (
  <div>
  <RegisterForm />
    </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));