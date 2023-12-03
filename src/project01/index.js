import React from 'react';
import logo from "./lohoo.png";
import linkedin from "./icons8-linkedin-50.png";
import facebook from "./icons8-facebook-50.png";
import  Instagram  from './icons8-instagram-50.png';
import Mail from './icons8-mail-50 (1).png';
import "./Airplane.css"
const Header = () => {
  return (
    <div className='body_container'>
    <div className='header'>
      <div className='logo'>
      <img src={logo} alt="logo"/>
      </div>
      <ul className='menu'>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Contact us</li>
      </ul>
    </div>
    <div className='middle'>
        <h1><b>Sight Seeing <span>&</span>Air Tour Experience</b></h1>
        <div className='paragraph'>
      <p><b>An airline is a company that provides air transport services for traveling passengers and/or freight. Airlines use aircraft to supply these services and may form partnerships or alliances with other airlines for codeshare agreements, in which they both offer and operate the same flight. Generally, airline companies are recognized with an air operating certificate or license issued by a governmental aviation body. Airlines may be scheduled or charter operators.
      </b></p>
    </div>
    </div>
    <div className='footer'>
      <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
     <img src={facebook} style={{width:"37px",height:"37px"}} alt='facebook'/>
     <span>fbairline</span>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
      <img src={Instagram} alt="instagram" style={{width:"35px",height:"35px"}}/>
     <span>instaAirline</span>
      </div>
     
      <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
      <img src={linkedin} alt="linkedin" style={{width:"35px",height:"35px"}}/>
     <span>zooAirline</span>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
      <img src={Mail} alt="mail" style={{width:"35px",height:"35px"}}/>
     <span>zooairline@gmail.com</span>
      </div>     
    </div>
    </div>
  )
}

export default Header;