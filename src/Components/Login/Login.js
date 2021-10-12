import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {
    const { signInWithEmail, googleSignIn, facebookSignIn, userEmail, userPassword, error } = useAuth();
    return (
        <div className="w-25 m-auto p-3 mt-3 border rounded">
            <h2 className="text-secondary mb-3">Please, Log in</h2>
            <form>
                <div className="text-danger">{error}</div>
                <input onChange={userEmail} className="form-control mb-3" type="email" name="" id="" placeholder="E-mail" />
                <input onChange={userPassword} className="form-control mb-3" type="password" name="" id="" placeholder="Password" />
                <input onClick={signInWithEmail} className="btn btn-secondary mb-3" type="submit" value="Login" />
            </form>
            <p>Or</p>
            <p className="text-secondary">Sign in with</p>
            <button onClick={googleSignIn} className="btn btn-success me-2">Google</button>
            <button onClick={facebookSignIn} className="btn btn-primary">Facebook</button>
            <p className="mt-3">New user? <Link to="/register">Register here</Link></p>
        </div>
    );
};

export default Login;