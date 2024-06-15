import Cover from "../../Components/Cover/Cover";
import styles from './ContactUs.module.css';
import stylesHome from '../Home/Home.module.css'
import {useState} from "react";
import ScrollTop from "../../Components/ScrollTop";

export default function ContactUs() {
  const [popup,setPopup] = useState(false)
  return (
    <div className={styles.bg} style={{display:"flex", flexDirection: "column", justifyContent:"center",alignItems:"center"}}>
      <ScrollTop/>
      <Cover img="/Images/contactUs.jpg" caption="Connect with Our Hospitality Team"/>
      <div className={styles.cuCont}>
        <p>First Name</p>
        <input placeholder="First Name"/>
        <p>Last Name</p>
        <input placeholder="Last Name"/>
        <p>Phone</p>
        <input placeholder="Phone" type="number"/>
        <p>E-Mail</p>
        <input placeholder="E-Mail" type="email"/>
        <p>Message</p>
        <textarea placeholder="Type your message here..">

        </textarea>
        <button className={stylesHome.Button} onClick={()=>setPopup(true)}>
          Send
        </button>
      </div>

      {popup && <div className={styles.popup}>
        <div>
          <h1>Your Message Has Been Submitted!</h1>
          <button onClick={()=>window.location.href = "/contact-us"}>OK</button>
        </div>
      </div>}
    </div>
  )
}