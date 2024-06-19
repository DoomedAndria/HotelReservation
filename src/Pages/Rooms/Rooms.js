import Cover from "../../Components/Cover/Cover";
import styles from './Rooms.module.css'
import HotelCard from "../../Components/HotelCard/HotelCard";
import rooms from "../../composables/roomData";


import {useEffect, useState} from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import ScrollTop from "../../Components/ScrollTop";

export default function Rooms() {
  const [roomsR, setRoomsR] = useState(rooms)

  const [price, setPrice] = useState([1, 1000]);
  const [keyword, setKeyword] = useState("")
  const [area, setArea] = useState([0, 100])

  function filter() {
    setRoomsR(rooms.filter(a => {
        if (a.promotion) {
          return a.new_price >= price[0] && a.new_price <= price[1]
        }
        return a.price >= price[0] && a.price <= price[1]
      }).filter(a => a.type.toLowerCase().includes(keyword.toLowerCase()))
        .filter(a => a.size >= area[0] && a.size <= area[1])
    )
  }

  return (
    <div>
      <Cover caption="Your Sanctuary of Comfort and Elegance" img="/Images/Rooms.jpg"/>

      <div className={styles.pageWrapper}>

        <div className={styles.filter}>
          <h3>Sort By Price</h3>
          <select onChange={(e) => {
            let arr;
            if (e.target.value == 'asc')
              arr = [...roomsR].sort((a, b) => a.price - b.price)
            else
              arr = [...roomsR].sort((a, b) => b.price - a.price)
            setRoomsR(arr)
          }} style={{
            outline: "none",
            border: "none",
            padding: "10px",
            margin: "20px 0",
            background: "rgba(0, 0, 0, 0.14)",
            borderRadius: "4px"
          }}>
            <option value="">--Please choose an option--</option>
            <option value="asc">Price Ascending</option>
            <option value="desc">Price Descending</option>
          </select>

          <div style={{width: "100%", borderBottom: "1px grey solid"}}></div>

          <h4 style={{marginBottom: "10px"}}>Filter By Keyword:</h4>
          <div style={{display: "flex", gap: "20px", boxSizing: "border-box"}}>
            <input style={{width: "130px"}} onChange={(e) => setKeyword(e.target.value)}/>
            <button onClick={filter}>Filter</button>
          </div>

          <h4>Filter By Price:</h4>
          <div className={styles.sliderIns}>
            <div>
              <p>min:</p>
              <input type="number" min="0" value={price[0]} onChange={(e) => setPrice([e.target.value, price[1]])}/>
            </div>
            <div>
              <p>max:</p>
              <input type="number" min="0" value={price[1]} onInput={(e) => setPrice([price[0], e.target.value])}/>
            </div>
          </div>
          <RangeSlider onInput={(val) => setPrice(val)} min={0} max={1000} step={1} value={price}/>

          <h4>Filter By Area:</h4>
          <div className={styles.sliderIns}>
            <div>
              <p>min:</p>
              <input type="number" min="0" value={area[0]} onChange={(e) => setArea([e.target.value, area[1]])}/>
            </div>
            <div>
              <p>max:</p>
              <input type="number" min="0" value={area[1]} onInput={(e) => setArea([area[0], e.target.value])}/>
            </div>
          </div>
          <RangeSlider onInput={(val) => setArea(val)} min={0} max={80} step={1} value={area}/>
        </div>

        <div className={styles.cardWrapper}>
          {roomsR.length == 0 && <h1>no results</h1>}
          {roomsR.map(e =>
            <HotelCard data={e}/>
          )}
        </div>
      </div>
    </div>
  )
}