import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
// import { FaStar, FaHotel, FaUser,FaRss,FaSmile,FaMoneyBillAlt } from 'react-icons/fa';

export default function OurRoomPlan() {
    return (
        <section className="hotel-plan">
            <Title title="hotel services" subtitle="hotel luxury" />
            
            <div className="content">
                <div className="card">
                    <div className="card-head">
                        <h5>BASIC</h5>
                        <p>$ 40.00</p>
                        <h6>PER DAY</h6>
                    </div>
                    <div className="card-body">
                        <ul className="">
                            <li> Lorem ipsum dolor sit amet.  </li>
                            <li> Lorem ipsum dolor sit amet.  </li>
                            <li>  Lorem ipsum dolor sit amet. </li>
                            <li> Lorem ipsum dolor sit amet. </li>
                        </ul>
                        <div className="card-footer">
                            <Link to="/rooms">read more</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className="card-head">
                        <h5>PARKING</h5>
                        <p>$ 20.00</p>
                        <h6>PER DAY</h6>
                    </div>
                    <div className="card-body">
                        <ul className="">
                            <li> Lorem ipsum dolor sit amet.  </li>
                            <li> Lorem ipsum dolor sit amet.  </li>
                            <li>  Lorem ipsum dolor sit amet. </li>
                            <li> Lorem ipsum dolor sit amet. </li>
                        </ul>
                        <div className="card-footer">
                            <Link to="/rooms">read more</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className="card-head">
                        <h5>RENT A BIKE</h5>
                        <p>$ 99.90</p>
                        <h6>PER DAY</h6>
                    </div>
                    <div className="card-body">
                        <ul className="">
                            <li> Lorem ipsum dolor sit amet.  </li>
                            <li> Lorem ipsum dolor sit amet.  </li>
                            <li>  Lorem ipsum dolor sit amet. </li>
                            <li> Lorem ipsum dolor sit amet. </li>
                        </ul>
                        <div className="card-footer">
                            <Link to="/rooms">read more</Link>
                        </div>
                    </div>

                </div>
                <div className="card">
                <div className="card-head">
                        <h5>ALL INCLUSIVE</h5>
                        <p>$ 99.90</p>
                        <h6>PER DAY</h6>
                    </div>
                    <div className="card-body">
                        <ul className="">
                            <li> Lorem ipsum dolor sit amet.  </li>
                            <li> Lorem ipsum dolor sit amet.  </li>
                            <li>  Lorem ipsum dolor sit amet. </li>
                            <li> Lorem ipsum dolor sit amet. </li>
                        </ul>
                        <div className="card-footer">
                            <Link to="/rooms">read more</Link>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
