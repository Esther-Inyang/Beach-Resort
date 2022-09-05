import React, {useState, useContext} from 'react'
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

  //for capacity
  let people = getUnique(rooms, 'capacity');

  return (
    <section className="filter-container">

      <Title title='search Rooms' />

      <form className="filter-form">
        {/* select Room (type)*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select 
            name="type"  //name here is determines what we want to change in the room data. It is called 'type' to match same name of the variable in room data that we want this input to check (bcos of the uniqueValue generated). 
            id="type"    
            value={type} //type here is from inputItems state. the value of type dynamically generated on handleChange will replace the initial value of the inputItems state variable = (type: 'all').
            className="form-control" 
            onChange={handleChange}>
            {
              allTypes.map((item,index) =>{
                return <option value={item} key={index}>{item}</option>
              })
            }
          </select>
        </div>
        {/* end select Room type*/} 
        
        {/* Select Guests (Capacity)*/}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select 
            name='capacity' 
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
            >
            {people.map((item,index)=>{
              return <option key={index} value={item}>{item}</option>
            })}
          </select>
        </div>
        {/* end Select Guests (Capacity)*/}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            room price ${price}
          </label>
          <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
        </div>
        {/* End of room price */}
        {/* size */}
        <div className='form-group'>
          <label htmlFor='size'>room size</label>
          <div className='size-inputs'>
            <input 
              type='number' 
              name='minSize' 
              id='size' 
              value={minSize} 
              onChange={handleChange} className="size-input"
            /> 

            <input 
              type='number' name='maxSize' 
              id='size' 
              value={maxSize} 
              onChange={handleChange} className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* Extras */}
            <div className='form-group'>
              <div className='single-extra'>
                <input 
                  type="checkbox" name="breakfast" 
                  id="breakfast"
                  checked={breakfast} onChange={handleChange}
                />
                <label htmlFor="breakfast">breakfast</label>
              </div>

              <div className='single-extra'>
                <input 
                  type="checkbox" name="pets" 
                  id="pets"
                  checked={pets} onChange={handleChange}
                />
                <label htmlFor="pets">pets</label>
              </div>
            </div>
        {/* End of Extras */}
      </form>
      
    </section> 
  )
}
