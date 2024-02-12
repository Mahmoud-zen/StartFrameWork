import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sec-color fixed-top">
                <div className="container py-3">
                <Link className="navbar-brand fs-2 text-white fw-bolder" to={''}>START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto gap-4">
                        <li className="nav-item text-white">
                            <NavLink className="nav-link fw-bolder" aria-current="page" to={'about'} >ABOUT</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link  fw-bolder" to={'port'} >PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link fw-bolder" to={'contact'} >CONTACT</NavLink>
                        </li>
                    </ul>

                </div>
                </div>
            </nav>

        </>
    )
}
