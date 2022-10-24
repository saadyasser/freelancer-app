import { useState, useRef } from "react";
import { json } from "react-router-dom";
import Input from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import "./Form.css";

const Form = ({submitted, children}) => {

      
    return (
    <form onSubmit={submitted}>
        {children}
    </form>
    );
}

export default Form;