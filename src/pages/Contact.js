import { useState } from "react";
import React  from "react";
import img1 from "../assets/img1.jpg";
import Footer from "../components/Footer";
import "../styles/Contact.css";



function Contact() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [text, setText]=useState("");
  const handler=()=>{
    alert("name : "+name+" email: "+email+" text: "+text);
  }
 
  return (
    <div>
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${img1 })` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" >
          <label>Full Name</label>
          <input name="name" value={name} onChange={e=>setName(e.target.value)}  placeholder="Enter full name..." type="text" />
          <label>Email</label>
          <input name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email..." type="email" />
          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={text} 
            onChange={e=>setText(e.target.value)}></textarea>
          <label>Upload Image</label>
          <div>
          <label>
          <input  name="file"  type="file" id="pdfs"></input>
          </label>
          <button id="upload">upload</button>
          </div>
          <button type="submit" className="main" onClick={handler}> Send Message</button>
        </form>
      </div>
       
    </div>
    <Footer/>
    </div>
  );
}

export default Contact;
