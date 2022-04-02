import React from "react"
import { Link } from "react-router-dom"
import { Accommodations} from '../accomodations/Accommodations'


const Home = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Summer Holidays!</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav col">
                <li className="nav-item">
                    <a className="nav-link"><Link to='/accommodations'>Accommodations</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to='/add'>Add</Link></a>
                </li>
                <li className="nav-item ml-auto">
                    <a className="nav-link"><Link to='/about'>About</Link></a>
            </li>
            </ul>
        </div> 
    </nav>
    )
}

export default Home