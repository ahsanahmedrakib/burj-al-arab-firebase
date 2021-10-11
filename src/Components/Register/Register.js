import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-25 m-auto p-3 mt-3 border rounded">
        <h2 className="text-info mb-3">Please, Register</h2>
            <form>
                <input className="form-control mb-3" type="text" name="" id="" placeholder="Name" />
                <input className="form-control mb-3" type="email" name="" id="" placeholder="E-mail" />
                <input className="form-control mb-3" type="password" name="" id="" placeholder="Password" />
                <input className="btn btn-info text-light" type="submit" value="Register" />
            </form>
            <p className="mt-3">Already registered? <Link to="/login">Log in</Link> here </p>
        </div>
    );
};

export default Register;