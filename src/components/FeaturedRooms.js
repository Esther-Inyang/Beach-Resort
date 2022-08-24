import React, { useContext } from 'react'
import Title from './Title';
import { RoomContext } from './context';
import Loading from './Loading';
import Room from './Room'

function FeaturedRooms() {
  
  let { rooms, sorted, featured, loading } = useContext(RoomContext)

  const [roomValue, setRoomValue] = rooms;
  const [sortedValue, setSortedValue] = sorted;
  const [featuredValue, setFeaturedValue] = featured
  const [loadingValue, setLoadingValue] = loading;

  const featuredRoom = featuredValue.map(fRoom => {
    return <Room key={fRoom.id} room={fRoom}/>
  })

  return (
    <section className='featured-rooms'>
        <Title title="Featured Rooms"/>

        <div className='featured-rooms-center'>
          {loadingValue ? <Loading /> : featuredRoom}
        </div>
    </section>
  )
}

export default FeaturedRooms;