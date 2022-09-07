import React, { useState, useEffect} from 'react'
import data from '../data'

const RoomContext = React.createContext();

const RoomProvider = (props) =>{
    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([])
    const [featuredRoomsValue, setfeaturedRoomsValue] = useState([])
    const [loading, setLoading] = useState(true)
    const [inputItems, setInputItems] = useState({
        type:"all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    })

    useEffect(() => {
        //rooms
        let roomsData = formatData(data);
        //featuredRooms only
        let theFeaturedRooms = roomsData.filter(room => room.featured === true);
        //update states
        setRooms(roomsData);
        setSortedRooms(roomsData)
        setfeaturedRoomsValue(theFeaturedRooms)
        setLoading(false)   
    }, [])

    //format Data
    const formatData = (data) => {
        let tempItems = data.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields,images, id };
            return room;
        });
        return tempItems;
    }
    //sort room by price
    useEffect(()=>{
        //rooms
        let roomsData = formatData(data);
        //Get max Price
        let theMaxPrice = Math.max(...roomsData.map(item => item.price));
        //Get Max Size
        let theMaxSize = Math.max(...roomsData.map(item => item.size));
        //Update the state with Max Price and Max Size
        setInputItems({...inputItems, price: theMaxPrice, maxPrice: theMaxPrice, maxSize: theMaxSize})

    }, [data])

    ////////////////////////////////////////////////////////////////////////////
    const getRoom = (slug) =>{
        let tempRooms = [...rooms];
        const theRoom = tempRooms.find((room) => room.slug === slug);
        return theRoom;
    };

    //Second UseEffect to handle filtered rooms
    useEffect(()=>{
        let {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = inputItems;  

        //All rooms
        let tempRooms = [...rooms];

        //Filter Rooms by Type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        //Converting the initial value types from "string" to number
         capacity = parseInt(capacity)
         price = parseInt(price)

        //filter Rooms by capacity
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        //Filter by Price Range
        tempRooms = tempRooms.filter(room => room.price <= price)

        //Filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        //filter by breakfast
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        //filter by pets
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        
        setSortedRooms(tempRooms)
    }, [inputItems, rooms])

    const handleChange = event => {
        const target = event.target
        const name = target.name
        // type = name
        const value = target.type === "checkbox" ? target.checked : target.value;
                     
        //name === whatever name says, change 'that' in inputItems state.
        setInputItems({...inputItems, [name]: value}) 
        //the 'value' is determined dynamically by the "input value" selected.
    }

    return (
        <RoomContext.Provider value={{rooms, sortedRooms, featuredRoomsValue, loading, getRoom, inputItems, handleChange}}>
            {props.children}
        </RoomContext.Provider> 
    ) 
}

export { RoomProvider, RoomContext};