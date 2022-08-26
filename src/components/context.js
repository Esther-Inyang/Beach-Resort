import React, { useState, useEffect } from 'react'
import data from '../data'
// import Home from '../pages/Home';

const RoomContext = React.createContext();

const RoomProvider = (props) =>{
    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([])
    const [featuredRooms, setfeaturedRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState("all")
    const [capacity, setCapacity] = useState(1)
    const [price, setPrice] = useState(0)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [minSize, setMinSize] = useState(0)
    const [maxSize, setMaxSize] = useState(0)
    const [breakfast, setBreakfast] = useState(false)
    const [pets, setPets] = useState(false)
    const [typeName, setTypeName] = useState(["all"])

    
    useEffect(() => {
        let roomsData = formatData(data);
        let theFeaturedRooms = roomsData.filter(room => room.featured === true);
        console.log(roomsData)

        setRooms(roomsData);
        setSortedRooms(roomsData)
        setfeaturedRooms(theFeaturedRooms)
        setLoading(false)

        let theMaxPrice = Math.max(...roomsData.map(item => item.price));
        console.log(theMaxPrice)

        let theMaxSize = Math.max(...roomsData.map(item => item.size));

        setMaxPrice(theMaxPrice)
        setMaxSize(theMaxSize)
    }, [])

    const formatData = (data) => {
        let tempItems = data.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields,images, id };
            return room;
        });
        return tempItems;
    }

    const getRoom = (slug) =>{
        let tempRooms = [...rooms];
        const theRoom = tempRooms.find((room) => room.slug === slug);
        return theRoom;
    };

    const handleChange = event => {
        const target = event.target
        const name = event.target.name
        const value = event.type === "checkbox" ? target.checked : target.value;

        setTypeName([name + ":" + value])
        filteredRooms()
    }

    const filteredRooms = () => {
        let {rooms, type, capacity, price, minSize, breakfast, pets} = typeName;

        let tempRooms = [...rooms];
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        setSortedRooms(tempRooms)
    }

    return (
        <RoomContext.Provider value={{rooms: [rooms, setRooms], sortedRooms: [sortedRooms, setSortedRooms], featured: [featuredRooms, setfeaturedRooms], loading: [loading, setLoading], getRoom, handleChange}}>

            {props.children}
        </RoomContext.Provider> 
    ) 
}

export { RoomProvider, RoomContext};