import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext/AuthContext";
import Form from "../../Components/Auth/Form/Form";
import Input from "../../Components/Auth/Input/Input";
import useFetch from "../../hooks/useFetch";

const SignIn = ({link}) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    

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
            "email" : emailRef.current.value,
            "password" : passwordRef.current.value,
        }
        e.preventDefault();
        sendRequest({
            url:"https://talents-valley.herokuapp.com/api/user/login",
            body: JSON.stringify(body),
        }, handleResponseDate);
    }
   
    
    return (
    <Form submitted={submitHandler}> 
        <h2>Sign In</h2>
        <Input id="email" label="Email" type="email" placeholder="Enter an email" reference={emailRef} classes="mb-32" />
        <Input id="password" label="Password" type={passwordShown ? "text" : "password"} placeholder="Enter password" reference={passwordRef} classes="mb-32 password" >
            <img src="./icons/Eye.svg" onClick={() => {togglePassword()}}/>
        </Input>
        <div className="forget-link"><a>Forgot Password?</a></div>
        
        <button type="submit" className="btn btn-primary">{ loading ? "Signing ..." : "Sign In"}</button>
        {error ? <p style={{color:"red"}}>{error}</p> : null}

        <div style={{textAlign: "center"}}><span>Don't have an account? </span><Link to="/signup" >Sign Up</Link></div>
    </Form>
    );
}

export default SignIn;