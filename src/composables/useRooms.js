import roomData from "./roomData";
export default function useRooms() {
  const rooms = roomData;

  function getRoomById(id){
    return rooms.find(room => room.id == id)
  }

  function  getPromotions(){
    return rooms.filter(room => room.promotion)
  }

  return {rooms,getRoomById,getPromotions}
}