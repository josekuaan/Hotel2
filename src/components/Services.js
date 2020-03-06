import React, { Component } from 'react'
import { FaHiking, FaCocktail, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {

    state = {
        services: [
            {
                title: "endless hiking",
                icon: <FaHiking />,
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"

            },
            {
                title: "free cock tail",
                icon: <FaCocktail />,
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"

            },
            {
                title: "free shulttle",
                icon: <FaShuttleVan />,
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"

            },
            {
                title: "string beer",
                icon: <FaBeer />,
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"

            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="service" />
                <div className="services-center">
                {this.state.services.map((service,index) => {
                   return <article key={index} className="service">
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </article>
                })}
                </div>
            </section>
        )
    }
}
