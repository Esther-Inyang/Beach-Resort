import React, { useContext } from 'react'
import Title from './Title';
import { RoomContext } from './context';
import Loading from './Loading';
import Room from './Room'

function FeaturedRooms() {
  
  const { room, sorted, featured, loading } = useContext(RoomContext)

  const [roomValue, setRoomValue] = room;
  const [sortedValue, setSortedValue] = sorted;
  const [featuredValue, setFeaturedValue] = featured
  const [loadingValue, setLoadingValue] = loading;

//   setRoomValue("whata")
  console.log(roomValue)
// console.log(roomValue)
  console.log(featuredValue)



  return (
    <div>
        <Title title="Featured Rooms"/>

        <div>
            {featuredValue.map((fea) => {
                return <p>{fea.name}</p>
            })}
        </div>

        <Loading />
        <Room />
    </div>
  )
}

export default FeaturedRooms;