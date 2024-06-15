import styles from './SignUp.module.css'
import {useNavigate} from "react-router-dom";

export default function Register(){

  const navigate = useNavigate()
  return(
    <div className={styles.pg}>
      <div style={{position:"relative"}}>
        <p>First Name</p>
        <input placeholder="First Name"/>

        <p>Last Name</p>
        <input placeholder="Last Name"/>

        <p>E-mail</p>
        <input type="email" placeholder="Email"/>

        <p>Phone</p>
        <input type="number" placeholder="Phone Number"/>

        <p>Password</p>
        <input type="password" placeholder="Password"/>

        <p>Confirm password</p>
        <input type="password" placeholder="Confirm Password"/>

        <button onClick={()=> navigate('/')}>
          Register
        </button>
      </div>
      <a  href="/login">Already have an account?</a>
    </div>
  )
}