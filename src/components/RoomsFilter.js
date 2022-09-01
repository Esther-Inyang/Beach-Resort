import React, {useState, useContext, useEffect} from 'react'
import { RoomContext } from './context'
import Title from './Title'

 // //function to get unique types
 const getUnique = (items,value) =>{
  return [...new Set(items.map(item => item[value]))]
} 

export default function RoomsFilter({rooms}) {
  //NOTE: "Let" is important so that the value can be changed
  let context = useContext(RoomContext)
  // console.log(context) //Prints all useState values from context

  const { inputItems, handleChange } = context
  // console.log(inputItems) //Prints all inputItems state values

  const {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = inputItems

  // //get unique types only i.e do not repeat existing types
  let allTypes = getUnique(rooms,'type'); //type here matches the 'type' in the array list
  
  //add all types together
  allTypes = ['all', ...allTypes]

  return (
    <section className="filter-container">

      <Title title='search Rooms' />

      <form className="filter-form">
        {/* select type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select 
            name="type"  //type here matches 'type' variable name in the state 
            id="type"    
            value={type} //type here replaces the initial value of variable type: 'all' in the state
            className="form-control" 
            onChange={handleChange}>
            {
              allTypes.map((item,index) =>{
                return <option value={item} key={index}>{item}</option>
              })
            }
          </select>
        </div>
        {/* end select type*/} 
      </form>

    </section> 
  )
}
