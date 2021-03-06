import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import { FaBars,FaTimes } from 'react-icons/fa'

export default class NavBar extends Component {
    state = {
        isOpen:false
    }

    handleClick(){
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (

            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <button className="nav-btn" onClick={this.handleClick.bind(this)}>
                            {this.state.isOpen ? <FaTimes className="nav-icon"/> : <FaBars className="nav-icon"/>}
                        </button>
                        
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li><Link to="/" > Home </Link></li>
                            <li><Link to="/rooms" > Rooms </Link></li>
                        </ul>
                </div>
            </nav>

        )
    }
}
