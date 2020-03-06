import React, { Component } from 'react'
import { MyContext } from '../context'
import Room from '../pages/Room'
import Title from './Title'

export default class FeaturedRooms extends Component {
    
    static contextType = MyContext;
    render() {
        const { featuredRooms,loading,rooms,getRoom } = this.context
        // console.log(getRoom)
        const room = featuredRooms.map( room => {      
           return  <Room  key={room.id} room= {room}/>
        })
       
        return (
            <section className=" featured-rooms ">
                
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                  { loading ? "<Loading />" : room }
                </div>
            </section>
        )
    }
}
