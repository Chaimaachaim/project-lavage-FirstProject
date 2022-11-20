import React  from "react";
import Typewriter from "typewriter-effect"

import"./Services.css"
import img1 from "../image/img5.jpg"
import img2 from "../image/img4.jpg"
import img3 from "../image/img6.jpg"
import img4 from "../image/img7.jpg"
import img5 from "../image/pic.jpg"
import img6 from "../image/pic2.jpg"


const Services =()=>{


    return(
        <div className="services">
         <div className="anm">
            <Typewriter
            options={{
               strings:["OUR","SERVICES"],
                autoStart:true,
                loop:true,
              
            }}
            />
             
         
         </div>
         <div className="contai">
           <div className="card">
            <div className="front">
            <img src={img1}></img> </div>
            <div className="back">
              <h2>Car Wash</h2>
              <p> Car wash posuere, dolor et feugiat ornare, neque nunc facilisis purus, ut ultricies ligula ipsum id ex. Mauris vehicula odio eget.</p>  
              </div>
           </div>
           <div className="card">
            <div className="front">
            <img src={img2}></img></div>
            <div className="back">
              <h2>Interior Cleaning </h2>
              <p> Interior Cleaning dolor sit amet consectetur adipisicing elit. Dolor maiores qui autem nesciunt vitae beatae.</p>  
              </div>
           </div>
           <div className="card">
            <div className="front">
            <img src={img3} ></img></div>
            <div className="back">
              <h2>Car Polishing  </h2>
              <p> Car Polishing, dolor et feugiat ornare, neque nunc facilisis purus, ut ultricies ligula ipsum id ex. Mauris vehicula odio .</p>  
              </div>
           </div>
           <div className="card">
            <div className="front">
            <img src={img4} ></img></div>
            <div className="back">
              <h2>ceramic coeting  </h2>
              <p> ceramic coeting  dolor et feugiat ornare, neque nunc facilisis purus, ut ultricies ligula ipsum id ex. Mauris vehicula odio.</p>  
              </div>
           </div>
           <div className="card">
            <div className="front" id="img5">
            <img src={img5} ></img></div>
            <div className="back">
              <h2>tininting  </h2>
              <p> tininting dolor et feugiat ornare, neque nunc facilisis purus, ut ultricies ligula ipsum id ex. Mauris vehicula odio</p>  
              </div>
           </div>
           <div className="card">
            <div className="front">
            <img src={img6} ></img></div>
            <div className="back">
              <h2>Car Wrapping </h2>
              <p> Car Wrapping, dolor et feugiat ornare, neque nunc facilisis purus, ut ultricies ligula ipsum id ex. Mauris vehicula odio</p>  
              </div>
           </div>
   
           </div>
           <div className="line-r"></div>
          
           <div className="line-f"></div>
           <div className="line-v"></div>
           </div>


       
    )
}
export default Services
