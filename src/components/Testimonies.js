import React from 'react'
import Title from './Title'
import face1 from '../images/face1.jpg'
import face2 from '../images/face2.jpg'
import face3 from '../images/face3.jpg'

export default function Testimonies() {
    return (
        <section className="testimony-section">
            <Title title="What Our Fantastic Clients Say" />
            <div className="testimony">
                <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ab sunt repudiandae voluptatem quae provident pariatur, amet 
                    aspernatur et cupiditate eos reprehenderit exercitationem, quidem 
                    voluptate mollitia officiis corporis beatae atque magni!
                    <div className="client-img">
                        <img src={face1} alt="client"/>
                        <div className="client-name">
                        <strong>John Smith</strong>
                        <p>Client</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ab sunt repudiandae voluptatem quae provident pariatur, amet 
                    aspernatur et cupiditate eos reprehenderit exercitationem, quidem 
                    voluptate mollitia officiis corporis beatae atque magni!
                    <div className="client-img">
                        <img src={face2} alt="client"/>
                        <div className="client-name">
                        <strong>John Smith</strong>
                        <p>Client</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ab sunt repudiandae voluptatem quae provident pariatur, amet 
                    aspernatur et cupiditate eos reprehenderit exercitationem, quidem 
                    voluptate mollitia officiis corporis beatae atque magni!
                    <div className="client-img">
                        <img src={face3} alt="client"/>
                        <div className="client-name">
                        <strong>John Smith</strong>
                        <p>Client</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
