import Cover from "../../Components/Cover/Cover";
import styles from './ContactUs.module.css';
import stylesHome from '../Home/Home.module.css'

export default function ContactUs() {
  return (
    <div className={styles.bg} style={{display:"flex", flexDirection: "column", justifyContent:"center",alignItems:"center"}}>
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
        <button className={stylesHome.Button}>
          Send
        </button>
      </div>
    </div>
  )
}