import React, {useState, useEffect, useContext} from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'
import { RoomContext } from './context'

export default function RoomsContainer() {

  const { sortedRooms, rooms } = useContext(RoomContext)

  // if(loadingValue){
  //   return <Loading />
  // }

  return (
    <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms = {sortedRooms}/>
    </>
  )
}
