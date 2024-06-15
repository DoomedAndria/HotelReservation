import Slider from "react-slick";
import useRooms from "../composables/useRooms";
import HotelCard from "../Components/HotelCard/HotelCard";

export default function WeekOfferCarousel(){
  const {getPromotions} = useRooms()
  const  promotions = getPromotions()
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };
  function Arrow() {
    return (
      <div/>
    );
  }
  return(
    <div style={{width:"100%",display: "flex", justifyContent:"center"}}>
      <div style={{width:"1200px",height:"400px"}}>
        <Slider style={{padding: "30px",eight:"400px"}} {...settings }>
          {promotions.map(e =>
            <HotelCard data={e}/>
          )}
        </Slider>
      </div>
    </div>
  )
}