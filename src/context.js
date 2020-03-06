import React, { Component } from 'react'
import items from './data'

import Client from './contentful'


const MyContext = React.createContext()

class RoomProvider extends Component {
    constructor() {
        super()
        this.state = {
            rooms: [],
            sortedRoom: [],
            featuredRooms: [],
            loading: true,
            price: 0,
            type: "all",
            capacity: 1,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            pets: false,
            breakfast: false
        }
        this.getRoom = this.getRoom.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    getData = async() =>{

        try{
            let response = await Client.getEntries({content_type:"hotelManagement",order:"sys.createdAt"})
            let rooms = this.formatData(response.items)
            
            let featuredRooms = rooms.filter(room => room.featured === true)
            let maxPrice = Math.max(...rooms.map(item => item.price))
            let maxSize = Math.max(...rooms.map(item => item.size))
            this.setState({ rooms, featuredRooms, sortedRoom: rooms, loading: false, maxPrice, price: maxPrice, maxSize })
        }catch (error){
          console.log(error)
        }
    }
    componentDidMount() {
        this.getData()
        
    }

    getRoom(slug) {
        const temRooms = [...this.state.rooms]
        const room = temRooms.find(room => room.slug === slug)
        return room;
    }
    formatData(response) {
        const tempItems = response.map(item => {
            const id = item.sys.id;
            const images = item.fields.images.map(image => image.fields.file.url)

            const room = { ...item.fields, images, id }
            return room;
        })
        return tempItems;
    }

    handleChange(event) {
        let {type,name,value,checked} = event.target
         type === "checkbox" ? this.setState({ [name]:checked }, this.filteredRoom) : this.setState({ [name]: value }, this.filteredRoom)

    }

    filteredRoom() {
        let { rooms, type, price, capacity, maxSize, minSize, pets, breakfast } = this.state;
        capacity = parseInt(capacity)
        price = parseInt(price)
        minSize = parseInt(minSize)
        maxSize = parseInt(maxSize)

        let tempRooms = [...rooms]
        // filter type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        //filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)

        //filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
        
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
            
        }
        this.setState({ sortedRoom: tempRooms })
    }



    render() {
        return (

            <MyContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </MyContext.Provider>

        )
    }
}

const RoomConsumer = MyContext.Consumer


export function withRoomConsumer(Component) {
    return function consumerWrapper(props) {
        return (
            <RoomConsumer >
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        )
    }
}
export { RoomProvider, RoomConsumer, MyContext }