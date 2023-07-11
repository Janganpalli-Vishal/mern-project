import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">HOME</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to='/'>Home</Link>
                            <Link className="nav-link" to='/addStudent'>Add Student</Link>
                            <Link className="nav-link" to='/editStudent'>Edit Student</Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
