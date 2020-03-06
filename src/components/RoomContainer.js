import React from 'react'

import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import { withRoomConsumer } from '../context'


function RoomContainer({ context }){
   const {loading,sortedRoom, handleChange,rooms } = context
   if(loading){
            // return <Loading />
        }  
        return (
            <>
          
            <RoomFilter rooms= {rooms}/>
            <RoomList rooms= {sortedRoom}/>
            </>
        )
}

export default withRoomConsumer(RoomContainer)

// export default function RoomContainer() {
//    return ( <RoomConsumer>
//     { value =>{
//         const { rooms,sortedRooms, loading,handleChange} = value;
//         console.log(handleChange)
//         if(loading){
//             // return <Loading />
//         }  
//         return (
//             <>
//             hello from room container
//             <RoomFilter rooms= {rooms}/>
//             <RoomList rooms= {sortedRooms}/>
//             </>
//         )
//     }}
// </RoomConsumer>
//    )
    
// }
