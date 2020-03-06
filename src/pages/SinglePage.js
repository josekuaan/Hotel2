import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { MyContext } from '../context'
import StyledHero from '../components/StyledHero'


export default class SinglePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = MyContext;
    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if (!room) {
            return (
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to="/" className="btn-primary">back to room</Link>
                </div>
            )

        }

        const {
            name,
            description,
            price,
            extras,
            size,
            capacity,
            breakfast,
            images, pets
        } = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg}>
                    <Banner title={` ${name} room`}>
                        <Link to="/rooms" className="btn-primary"> rooms </Link>
                    </Banner>
                </StyledHero>

                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((image, index) => {
                            return <img key={index} src={image} alto={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}}</h6>
                            <h6>size :  {size} SQFT</h6>
                            <h6> Max Capacity : {capacity === 1 ? `${capacity}person`  : `${capacity} people`}</h6>
                            <h6>{pets ? 'Pets Allowed': 'No Pets Allowed'}</h6>
                            <h6>{breakfast && "Free BreakFast Included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                   <h3>extras</h3>
                   <ul className="extras">
                       {extras.map((extra,index)=>{
                          return  <li key={index}>{extra}</li>
                       })}
                   </ul>
                </section>
                <Footer />
            </>
        )
    }
}
