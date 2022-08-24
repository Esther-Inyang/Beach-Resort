import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { RoomContext } from '../components/context'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import StyledHero from '../components/StyledHero'

export default function SingleRoom() {
  const [slugData, setSlugData] = useState("");

  const { slug } = useParams();

  useEffect(()=>{
    setSlugData(slug)
  },[slug])

  const { getRoom } = useContext(RoomContext)
  const room = getRoom(slugData)

  if(!room){
    return <div className='error'>
      <h3>no such room could be found...</h3>
      <Link to='/rooms' className='btn-primary'>back to rooms</Link>
    </div>
  }

  const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
  // array destructuring and rest
  const [mainImg, ...defaultImg] = images;
  // console.log(room)
  
  return (
    <>
      <StyledHero img={mainImg || {defaultBcg}}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </StyledHero>

      <section className='single-room'>
        <div className='single-room-images'>
          {defaultImg.map((item, index) =>{
            return <img key={index} src={item} alt={name} />
          })}
        </div>
      </section>
    </>
  )
}



