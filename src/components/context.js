import React, { useState, useEffect } from 'react'
import data from '../data'
// import Home from '../pages/Home';

const RoomContext = React.createContext();

const RoomProvider = (props) =>{
    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([])
    const [featuredRooms, setfeaturedRooms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let roomsData = formatData(data);
        let theFeaturedRooms = roomsData.filter(room => room.featured === true);

        setRooms(roomsData);
        setSortedRooms(roomsData)
        setfeaturedRooms(theFeaturedRooms)
        setLoading(false)
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

    return (
        <RoomContext.Provider value={{room: [rooms, setRooms], sorted: [sortedRooms, setSortedRooms], featured: [featuredRooms, setfeaturedRooms], loading: [loading, setLoading]}}>

            {props.children}

        </RoomContext.Provider> 
    ) 
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext};