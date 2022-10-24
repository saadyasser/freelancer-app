import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext/AuthContext";
import Form from "../../Components/Auth/Form/Form";
import Input from "../../Components/Auth/Input/Input";
import useFetch from "../../hooks/useFetch";


const SignUp = ({link}) => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const countryRef = useRef();
        const [loading, error, sendRequest] = useFetch();
      
        const [passwordShown, setPasswordShown] = useState(false);
        
        const navigate = useNavigate();
        
        const login = useContext(AuthContext);
        
        const togglePassword = () => {
            setPasswordShown(!passwordShown);
          };
          
        const handleResponseDate = (data) => {
            localStorage.setItem('token', data["data"].accessToken)
            login.setTokenId(data["data"].accessToken);
            navigate("/");
        }
        
        const submitHandler = (e) => {
            const body = {
                "firstName" : firstNameRef.current.value,
                "lastName" : lastNameRef.current.value,
                "email" : emailRef.current.value,
                "password" : passwordRef.current.value,
                "country" : "Palestine",
                "mobile" : "+970595222222"
            }
            e.preventDefault();
            sendRequest({
                url:"https://talents-valley.herokuapp.com/api/user/signup",
                body: JSON.stringify(body),
            }, handleResponseDate);
        }
    return (
    <Form submitted={submitHandler}> 
        <h2>Create Your Acount</h2>
        <div className="col-2 mb-32">
            <Input id="f-name" label="First Name" type="text" placeholder="Enter first name" reference={firstNameRef}/>
            <Input id="l-name" label="Last Name" type="text" placeholder="Enter Last name" reference={lastNameRef}/>
        </div>
        <Input id="email" label="Email" type="email" placeholder="Enter an email" reference={emailRef} classes="mb-32" />
        <Input id="password" label="Password" type={passwordShown ? "text" : "password"} placeholder="Enter password" reference={passwordRef} classes="mb-32 icon" >
            <img src="./icons/Eye.svg" onClick={() => {togglePassword()}}/>
        </Input>
        <button className="btn btn-primary">{ loading ? "Creating ..." : "Sign Up"}</button>
        {error ? <p style={{color:"red"}}>{error}</p> : null}
        <div style={{textAlign: "center"}}><span>Already have an account? </span><Link to="/signin" >Sign in</Link></div>
        
    </Form>
    );
}

export default SignUp;