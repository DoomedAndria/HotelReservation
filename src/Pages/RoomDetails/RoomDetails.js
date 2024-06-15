import {useParams} from "react-router-dom";
import styles from './RoomDetails.module.css'
import useRooms from "../../composables/useRooms";
import {useState} from "react";
import WeekOfferCarousel from "../../Sections/WeekOfferCarousel";

export default function RoomDetails() {
  const {id} = useParams()
  const {getRoomById} = useRooms()

  const {images, type, price, promotion, new_price, description, amenities,long_description} = getRoomById(id)
  const [currentPic, setCurrentPic] = useState(images[0])
  const [fullPrice, setFullPrice] = useState(0)
  const [arrival,setArrival] = useState(null)
  const [departure,setDeparture] = useState(null)


  const handleArrivalChange = (e) => {
    setArrival(e.target.value);
    calculatePrice(e.target.value, departure);
  };

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
    calculatePrice(arrival, e.target.value);
  };
  const calculatePrice = (arrival, departure) => {
    if (arrival && departure) {
      const arrivalDate = new Date(arrival);
      const departureDate = new Date(departure);
      const timeDifference = departureDate - arrivalDate;

      if (timeDifference >= 0) {
        const dayCount = timeDifference / (1000 * 60 * 60 * 24);
        setFullPrice(dayCount*(promotion?new_price:price));
      } else {
        setFullPrice(0);
      }
    }
  };
  return (
    <div className={styles.page}>
      <div style={{display: "flex", justifyContent: "space-between", margin: "40px 0"}}>

        <div className={styles.pics}>
          <div className={styles.mainpic}>
            <img src={currentPic}/>
          </div>
          <div className={styles.thumbs}>
            <div><img src={images[0]} onClick={(e) => setCurrentPic(e.target.src)}/></div>
            <div><img src={images[1]} onClick={(e) => setCurrentPic(e.target.src)}/></div>
            <div><img src={images[2]} onClick={(e) => setCurrentPic(e.target.src)}/></div>
          </div>
        </div>

        <div className={styles.info}>
          <h1>{type} Room</h1>
          {promotion ?
            <h3><span>{price}$ </span> {new_price}$</h3>
            : <h3>{price}$</h3>
          }
          <p>{description}</p>

          <h4>Amenities:</h4>
          <ul>
            {amenities.map(e => <li>{e}</li>)}
          </ul>
          <h4>Description:</h4>
          <p style={{width: "300px",fontSize:"15px"}}>
            {long_description}
          </p>
        </div>
      </div>

      <div className={styles.book}>
        <div>
          <p>Arrival:</p>
          <input type="date" onChange={handleArrivalChange}/>
        </div>
        <div>
          <p>Departure:</p>
          <input type="date" onChange={handleDepartureChange}/>
        </div>
        {fullPrice != 0 && <h3>Full price: <span>{fullPrice}$</span></h3>}
        <button>
          Book Now
        </button>
      </div>
      <WeekOfferCarousel/>
    </div>
  )
}