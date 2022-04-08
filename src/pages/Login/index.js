import React, { useState } from "react";
import { ContainerWrapper } from "./styles.component";
import { ROUTES } from "../../constants";
import { useHistory } from "react-router-dom";

const Login = ({ checkLogin }) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        checkLogin({"user": email, "password": password});
        history.push(ROUTES.DASHBOARD);
    }
    const handleChange = (e) => {
        if(e.target.name === 'email') {
            setEmail(e.target.value);
        }else if (e.target.name === 'password'){
            setPassword(e.target.value);
        }
    }
    return (
        <ContainerWrapper className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" value={email} onChange={handleChange} className="form-control" id="email" autoComplete="false" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" autoComplete="false" className="form-label">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </ContainerWrapper>
    )
}

export default Login;