import "./Contact.css";
import { MdLocalPhone, MdPlace, MdEmail } from "react-icons/md";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pzn6hqp",
        "template_odq",
        form.current,
        "KKZPt7lA5-07-uEQp"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="contact">
      <div className="icons">
        <h3>Contact Us </h3>
        <ul className="brinks">
          <li className="third">
            <MdPlace color="white" fontSize="26px" />
            <p>OUR place</p>
          </li>
          <li className="third">
            <MdLocalPhone color="white" fontSize="26px" />
            <p>+213 792212110</p>
          </li>
          <li className="third">
            <MdEmail color="white" fontSize="26px" />
            <p>Businesskeney@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <h4>Send Message </h4>

          <div className="input-form">
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="input-form">
            <label htmlFor="email">
              Your Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="input-form">
            <label htmlFor="message">
              Your Message
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button className="btn-2"         >Send</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
