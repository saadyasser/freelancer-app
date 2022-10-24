import "./input.css";

const Input = ({label, id, type, placeholder, reference, classes, children}) => {
    return (
        <div className={ "form-input" + classes == undefined ? "" : classes } >
            <label htmlFor={id} >{label}</label>
            <input type={type} id={id} placeholder={placeholder} ref={reference}/>
        {children}
    </div>
    )
}

export default Input;