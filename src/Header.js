import React, { useRef} from 'react'
import myImg from './images/myImg.jpg'
import { NavLink} from 'react-router-dom'

function Header() {

    const liArray = [useRef(),useRef(),useRef(),useRef()];
    const [about, skills, projects,contact] = liArray


    return (
        <div className="header">
          <img src={myImg} alt="this is me."/>
          <ul className="navigation">
            <NavLink exact to="/myportfolio" activeClassName="current" >
            <li  ref={about}>about me</li>
            </NavLink>
            <NavLink exact to="/myportfolio/skills" activeClassName="current">
            <li  ref={skills}>Skills</li>
            </NavLink>
            <NavLink exact to="/myportfolio/projects" activeClassName="current">
            <li ref={projects}>Projects</li>
            </NavLink>
            <NavLink exact to="/myportfolio/contact" activeClassName="current">
            <li   ref={contact}>Contact me</li>
            </NavLink>
          </ul>
        </div>
    )
}

export default Header;
