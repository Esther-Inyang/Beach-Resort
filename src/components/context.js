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
        let roomsData = formatData(data);
        let theFeaturedRooms = roomsData.filter(room => room.featured === true);

        setRooms(roomsData);
        setSortedRooms(roomsData)
        setfeaturedRoomsValue(theFeaturedRooms)
        setLoading(false)   
        //Get max Price
        let theMaxPrice = Math.max(...roomsData.map(item => item.price));

        //Get Max Size
        let theMaxSize = Math.max(...roomsData.map(item => item.size));

        //Update the state with Max Price and Max Size
        setInputItems({...inputItems, maxPrice: theMaxPrice, maxSize: theMaxSize}) 

        
    }, [])
     
    // console.log(inputItems)

    ////////////////////////////////////////////////////////////////////////////

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

    ////////////////////////////////////////////////////////////////////////////
    const getRoom = (slug) =>{
        let tempRooms = [...rooms];
        const theRoom = tempRooms.find((room) => room.slug === slug);
        return theRoom;
    };
    ////////////////////////////////////////////////////////////////////////////


   useEffect(()=>{
        let {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = inputItems;  

        let tempRooms = [...rooms];
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        setSortedRooms(tempRooms)
   }, [inputItems, rooms])

    const handleChange = event => {
        const target = event.target

        const name = target.name
        const value = event.type === "checkbox" ? target.checked : target.value;

        setInputItems({...inputItems, [name]: value}) 
    }

    

//[name] here replaces the 'type' and value here replaces the value = type: 'all' in the state 
        //the new 'value' id determined by what is in the input value.

    //filtered Rooms
    // const filteredRooms = () => {
    //     console.log("filtered rooms")

        
    // }

    ///////////////////////////////////////////////////////////////////////////

    return (
        <RoomContext.Provider value={{rooms, sortedRooms, featuredRoomsValue, loading, getRoom, inputItems, handleChange}}>

            {props.children}
        </RoomContext.Provider> 
    ) 
}

export { RoomProvider, RoomContext};