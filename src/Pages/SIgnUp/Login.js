import styles from './SignUp.module.css'
import {useNavigate} from "react-router-dom";
import ScrollTop from "../../Components/ScrollTop";

export default function Login(){
  const navigate = useNavigate()
  return(
    <div className={styles.pg}>
      <ScrollTop/>
      <div style={{height:"270px",marginTop:"50px"}}>
        <p>E-mail</p>
        <input type="email" placeholder="Email"/>

        <p>Password</p>
        <input type="password" placeholder="Password"/>

        <button onClick={()=> navigate('/')}>
          Log In
        </button>
        <p style={{textAlign:'center',marginTop:'20px'}}>or log in with Facebook</p>

        <button className={styles.fb} onClick={()=>window.location.href='https://www.facebook.com/'}>Facebook</button>
      </div>
      <a  href="/register">Don't have an Account?</a>
    </div>
  )
}