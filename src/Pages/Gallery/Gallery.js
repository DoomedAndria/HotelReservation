import Cover from "../../Components/Cover/Cover";
import styles from './Gallery.module.css'
import {useState} from "react";
import imgs from './GalleryData'
import ScrollTop from "../../Components/ScrollTop";
export default function Gallery(){

  const images = imgs

  const[model,setModel] = useState(false)
  const [imSrc,setImSrc] = useState('')

  function getImg(im){
    setImSrc(im)
    setModel(true)
  }

  return(
    <div>
      <ScrollTop/>
      <div className={model?`${styles.open} ${styles.model}`:`${styles.model}`}>
        <img className={styles.Icon} src="/Images/close.png" onClick={()=>setModel(false)}/>
        <img className={styles.Img} src={imSrc} />
      </div>
      <Cover caption="Indulge in Comfort and Style" img="/Images/gallery.jpg"/>
      <div className={styles.gallery}>
        {images.map(e => {
          return (
            <div className={styles.pic} onClick={()=>getImg(e)}>
              <img src={e}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}