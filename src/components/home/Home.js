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
                   <Link className="nav-link" to='/accommodations'>Accommodations</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/add'>Add</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>About</Link>
            </li>
            </ul>
        </div> 
    </nav>
    )
}

export default Home