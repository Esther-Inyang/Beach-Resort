import React, { useContext, useEffect } from 'react'
import Title from './Title';
import { RoomContext } from './context';
import Loading from './Loading';
import Room from './Room'

function FeaturedRooms() {
  //NOTE: "Let" is important so that the value can be changed
  let {loading, featuredRoomsValue} = useContext(RoomContext)

  const featuredRoom = featuredRoomsValue.map(fRoom => {
    return <Room key={fRoom.id} room={fRoom}/>
  })

  return (
    <section className='featured-rooms'>
        <Title title="Featured Rooms"/>

        <div className='featured-rooms-center'>
          {loading ? <Loading /> : featuredRoom}
        </div>
    </section>
  )
}

export default FeaturedRooms;