import styles from './Header.module.css'
import router from "../../router";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedOnAuth,setClickedOnAuth] = useState(false)

  function navigateHome() {
    window.location.href = '/'
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`${styles.header} ${isScrolled ? styles.bgBlue : ''}`}>
      <img className={styles.Img} src="/Images/logo.png" onClick={navigateHome}/>
      <div className={styles.links}>
        {router.routes.map(e => {
            if (e.name != 'Login' && e.name != 'Register') {
              return <a href={e.path}>{e.name}</a>
            }
          }
        )}
      </div>

      <div>
        <button className={styles.auth} onClick={() => setClickedOnAuth(!clickedOnAuth)}>
          Authenticate
          <div className={`${isScrolled ? styles.bgBlue : ''} ${clickedOnAuth?'':styles.op}`}>
            <div onClick={()=>window.location.href='/login'}>Login</div>
            <div onClick={()=>window.location.href='/register'}>Register</div>
          </div>
        </button>
      </div>
    </header>
  )
}