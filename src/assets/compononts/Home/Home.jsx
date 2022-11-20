import About from "../About/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import "./Home.css";
import video from "../videos/vds.mp4";
import { useHistory } from "react-router-dom";



const Home =()=>{
    let history=useHistory ();
    return(
        <div className="home">
            <div className="all">

             <video Src={video} autoPlay muted loop  type='video/mp4'></video>
           <div className="content">
           <h1> Best Car <br/>Wash and Detailing<br/>Services </h1>
            <p>Want to keep your car like-new clean? All you need is LVG.</p>
            <button onClick={()=>{
                history.push("/Contact");
                        }} 
            className="btn-1">CONTACT US</button>
          
            </div> </div>
            
            <About/>
            <Services/>
            <Contact/>
            </div>
        
    )
}
export default Home;