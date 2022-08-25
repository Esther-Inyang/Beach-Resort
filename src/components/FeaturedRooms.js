import React, { useContext, useEffect } from 'react'
import Title from './Title';
import { RoomContext } from './context';
import Loading from './Loading';
import Room from './Room'

function FeaturedRooms() {
  //NOTE: "Let" is important so that the value can be changed
  let { featured, loading } = useContext(RoomContext)

  // assigning the object an array to access/map the values
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