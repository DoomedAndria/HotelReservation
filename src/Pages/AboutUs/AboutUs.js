import Cover from "../../Components/Cover/Cover";
import styles from './AboutUs.module.css'

export default function AboutUs(){
  return(
    <div>
      <Cover img="/Images/aboutUs.jpg" caption="Discover the Heart of Heaven Harbor"/>
      <div className={styles.contentCont}>
        <h1 style={{color:"#2d3c5d"}}>Heaven Harbor: Paradise Starts Here</h1>
        <h3 style={{width:"800px",marginBottom:"50px",color:"#2d3c5d"}}>Welcome to Heaven Harbor, where paradise is not just a destination but an experience. Nestled in the heart of [location], our luxurious hotel offers an oasis of tranquility and elegance. Whether you’re here for a romantic getaway, a family vacation, or a business trip, Heaven Harbor provides the perfect backdrop for unforgettable moments.</h3>

        <div className={styles.sect}>
          <div className={styles.child}>
            <h2>Our Story</h2>
            <p>Heaven Harbor was founded with a vision to create a sanctuary where guests can escape the ordinary and embrace the extraordinary. Inspired by the serene beauty of [location], our hotel blends modern luxury with timeless charm. Every detail, from our meticulously designed rooms to our world-class amenities, is crafted to ensure your stay is nothing short of perfection.</p>
          </div>
          <div className={styles.child}>
            <img src="/Images/aboutUs/ourStory.jpg"/>
          </div>
        </div>

        <div className={styles.sect}>
          <div className={styles.child}>
            <img src="/Images/aboutUs/Commitment.jpg"/>
          </div>
          <div className={styles.child}>
            <h2>Our Commitment</h2>
            <p>At Heaven Harbor, we are dedicated to offering our guests the highest level of service and comfort. Our team of passionate hospitality professionals is here to cater to your every need, ensuring that your stay with us is seamless and enjoyable. We pride ourselves on creating personalized experiences that make each visit unique and memorable.</p>
          </div>
        </div>

        <div className={styles.sect}>
          <div className={styles.child}>
            <h2>Luxurious Accommodations</h2>
            <p>Our rooms and suites are a haven of peace and relaxation. Each space is thoughtfully designed to provide the ultimate in comfort and style, featuring plush bedding, modern amenities, and breathtaking views of [local landmarks or natural scenery]. From the moment you step into your room, you’ll feel the stress of everyday life melt away.</p>
          </div>
          <div className={styles.child}>
            <img src="/Images/aboutUs/ac.jpg"/>
          </div>
        </div>

        <div className={styles.sect}>
          <div className={styles.child}>
            <img src="/Images/aboutUs/am.jpg"/>
          </div>
          <div className={styles.child}>
            <h2>World-Class Amenities</h2>
            <p>At Heaven Harbor, we believe that true luxury is found in the details. Our hotel boasts a range of amenities designed to enhance your stay, including:</p>
          </div>
        </div>

        <ul style={{width:"800px",margin:"50px 0",fontSize:"20px",letterSpacing:"1px",color:"#025179"}}>
          <li style={{margin:'10px 0'}}>Gourmet Dining: Savor the flavors of [local cuisine] at our on-site restaurant, where our chefs create culinary masterpieces using the freshest ingredients.</li>
          <li style={{margin:'10px 0'}}>Spa & Wellness: Indulge in a rejuvenating treatment at our spa, or maintain your fitness routine at our state-of-the-art gym.</li>
          <li style={{margin:'10px 0'}}>Event Spaces: Whether you’re planning a wedding, a corporate event, or a private celebration, our versatile event spaces provide the perfect setting for any occasion.</li>
        </ul>
      </div>
    </div>
  )
}