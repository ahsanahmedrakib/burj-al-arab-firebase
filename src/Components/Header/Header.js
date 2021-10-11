import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import useAuth from '../../Hooks/UseAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                    { user.email && <li>
                        <img className="rounded-circle" style={{ width: "40px", height: "40px" }} src={user.photoURL} alt="" />
                    </li>}
                    <li>
                    {user.email && <span className="text-primary"><strong>{user.displayName } </strong> </span>  }
                        { user.email ? <button className="btn btn-outline-light" onClick={logOut}>Logut</button> : <Link to="/login">Login</Link> }
                    </li>
                    
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;