import useRooms from "../../composables/useRooms";
import HotelCard from "../../Components/HotelCard/HotelCard";
import styles from "./Home.module.css"
import Cover from "../../Components/Cover/Cover";
import WeekOfferCarousel from "../../Sections/WeekOfferCarousel";
import {useNavigate} from "react-router-dom";

export default function Home() {
  const {rooms} = useRooms()
  const navigate = useNavigate()
  return (
    <div className={styles.home}>
      <Cover caption="Paradise Starts Here!" img="/Images/cover.jpg"/>
      <div className={styles.Intr}>
        <div>
          <h2>HEAVEN HARBOUR</h2>
          <h3>Paradise Starts Here</h3>
          <p>Nestled in the vibrant heart of Secaucus, New Jersey, Heaven Harbour welcomes you to a world of refined
            indulgence. Immerse yourself in the pinnacle of comfort, just moments away from the iconic American Dream
            Mall, where shopping fantasies come to life. Feel the exhilaration of being near the legendary MetLife
            Stadium, home to unforgettable events. Our lavish accommodations and personalized service promise a stay
            beyond compare. Embrace the perfect blend of convenience and luxury, where every moment is a cherished
            memory in the making. Your journey to opulence begins at Heaven Harbour. Book your escape today!</p>
          <button className={styles.Button} onClick={()=> navigate('/gallery')}>
            EXPLORE OUR HOTEL
          </button>
        </div>

        <div>
          <img src="/Images/intr.jpg"/>
        </div>
      </div>

      <h2>WEEK OFFERS!</h2>
      <WeekOfferCarousel/>
      <div className={styles.cardWrapper}>
        {rooms.slice(0, 6).map(e =>
          <HotelCard data={e}/>
        )}
      </div>

      <button className={styles.Button} onClick={()=>navigate('/rooms')}>
        MORE
      </button>

      <div className={styles.Outr}>
        <img src="/Images/getInTouch.png"/>
        <div>
          <h2>Have a Question?</h2>
          <button className={styles.Button} onClick={()=>navigate('/contact-us')}>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}