import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context'
import Title from './Title'

const  getUnique = (items,value) => {
  const unique =  [... new Set(items.map( item => item[value]))]   
  return unique;
}
export default function RoomFilter({rooms}) {

    const context = useContext(MyContext)
    const {   
        handleChange,
        capacity,
        maxSize,
        maxPrice,
        price,
        minPrice,
        minSize,
        type,
        pets,
        breakfast
    } = context

    // get unique types
    let types = getUnique(rooms, 'type')
    
    types = ['all',...types]
    const roomType = types.map((type, index)=>{
        return <option key={index} value={type}>{type}</option>
    })
    
    let people = getUnique(rooms,"capacity")
   const People =  people.map((people,index)=>{
        return <option key={index} value={people}>{people}</option>
    })
    return (
        <div className="filter-container">
            <Title title="search rooms" />
            <div></div>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" className="form-control" value={type} onChange={handleChange}>
                        { roomType }
                    </select>
                </div>
                <div className="form-group">
                <label htmlFor="capacity">quests</label>
                    <select name="capacity" id="capacity" className="form-control" value={capacity} onChange={handleChange}>
                        { People }
                    </select>
                  
                </div>

                <div className="form-group">
                <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" id="price" className="form-control" min={minPrice} max={maxPrice} value={ price } onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                    <input type="number" name="minSize" id="size" className="size-input" min={minSize}  value={ minSize } onChange={handleChange} />
                    <input type="number" name="maxSize" id="size" className="size-input"  max={maxPrice} value={ maxSize } onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" className="form-control" checked={ breakfast } onChange={handleChange} />
                    <label htmlFor="breakfast">breakfast</label>
                   </div>
                   <div className="single-extra">
                   <input type="checkbox" name="pets" id="pets" className="form-control"  value={ pets } onChange={handleChange} />
                    <label htmlFor="pets">pets </label>
                   </div>
                </div>
                
            </form>
        </div>
    )

}
