import React  from "react";
import "./About.css"
import{FaFacebook,FaInstagram,FaTwitter,FaWhatsapp,FaYoutube}from"react-icons/fa"
import video1 from "../videos/vds44.mp4"
import video2 from "../videos/vdeo2.mp4"
import video33 from "../videos/vdeo33.mp4" 



const About =()=>{
   

    return (
        <div className="about">
            <div className="section">
<h1>YOUR CAR WILL <br/> BE SPARKLING CLEAN</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat veniam asperiores animi? Recusandae sint esse cumque maiores maxime voluptates, libero fuga, accusantium dolorem obcaecati velit itaque, amet cum doloremque.</p>
</div>
<div className="container">
   <div className="first" style={{left:'51rem',bottom:'1rem'}}>
    <video Src={video1} autoPlay muted loop  type="video/mp4"/>
  
    </div> 
    <div className="first" style={{left:"50rem", top:"20px"}}>
        <video Src={video2} autoPlay muted loop type='video/mp4'/>
        
    </div>
    <div className="first" style={{left:"28rem",bottom: "-3rem"}}>
        <video id="pop"Src={video33} autoPlay muted loop type='video/mp4'/>
       
    </div>
    
</div>
<ul>
    <li className="icn"><FaFacebook color="white"/></li>
    <li className="icn"><FaInstagram color="white"/></li>
    <li className="icn"><FaTwitter color="white" /></li>
    <li className="icn"><FaWhatsapp color="white" /></li>
    <li className="icn"><FaYoutube color="white" /></li>
</ul>
    </div>
    )
}
export default About;