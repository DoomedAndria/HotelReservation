import styles from './HotelCard.module.css'
import {useNavigate} from "react-router-dom";

export default function HotelCard(props) {
  const navigate = useNavigate()

  const {type, price, description, images, id, promotion, new_price} = props.data

  function navigateRoomDetails(){
    navigate(`/rooms/${id}`)
  }
  return (
    <div className={styles.cardCont}>
      {promotion &&
        <img src="/Images/promotion.png" className={styles.stick}/>
      }

      <div className={styles.cardIm}>
        <img src={images[0]}/>
        <div>
          {description}
        </div>
      </div>

      <div className={styles.cardD}>
        <div>
          <h2>{type} Room</h2>
          {/*<p>beds: 2</p>*/}
        </div>
        <div>
          {promotion?
            <h3><span className={styles.oldPrice}>{price}$ </span> {new_price}$</h3>
            :<h3>{price}$</h3>
          }
          <button onClick={navigateRoomDetails}>
            Details
          </button>
        </div>
      </div>

    </div>
  )
}