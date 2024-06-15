import styles from './SignUp.module.css'
import {useNavigate} from "react-router-dom";

export default function Login(){
  const navigate = useNavigate()
  return(
    <div className={styles.pg}>
      <div style={{height:"200px",marginTop:"50px"}}>
        <p>E-mail</p>
        <input type="email" placeholder="Email"/>

        <p>Password</p>
        <input type="password" placeholder="Password"/>

        <button onClick={()=> navigate('/')}>
          Log In
        </button>
      </div>
      <a  href="/register">Don't have an Account?</a>
    </div>
  )
}