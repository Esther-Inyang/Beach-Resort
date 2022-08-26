import React, {useState, useEffect, useContext} from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'
import { RoomContext } from './context'

export default function RoomsContainer() {

  const contxtValue = useContext(RoomContext)
  let {loading, sortedRooms, rooms} = contxtValue;
  
  const [loadingValue, setLoadingValue] = loading;
  const [sortedValue, setSortedValue] = sortedRooms
  const [roomsData, setRooms] = rooms
//   console.log(sortedValue)

  if(loadingValue){
    return <Loading />
  }

  return (
    <>
        <RoomsFilter rooms={roomsData} />
        <RoomsList rooms = {sortedValue}/>
    </>
  )
}
