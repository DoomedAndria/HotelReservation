import styles from './Cover.module.css'
export default function Cover({img,caption}){
  return(
    <div className={styles.coverCont}>
      <img className={styles.Img} src={img}/>
      <div className={styles.overlay}>
        <h1>{caption}</h1>
      </div>
    </div>
  )
}