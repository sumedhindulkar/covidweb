import React from 'react'
import { NavLink } from "react-router-dom";
function NavBar() {
    return (
        <div className="navbar"  style={{width:"100%"}}>
            <div className="w-30">
                <h2 className="nav-brand">COVID-19</h2>
            </div>
            <div className="w-70">
                <ul className="nav">
                    <li className="nav-items"><NavLink to="/">Active cases</NavLink></li>
                    <li className="nav-items"><NavLink to="/hospital">Hospital</NavLink></li>
                    <li className="nav-items"><NavLink to="/labs">Testing Labs</NavLink></li>
                    <li className="nav-items"><NavLink to="/ngo">NGO's</NavLink></li>
                    <li className="nav-items"><NavLink to="/helpline">Helpline No</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
