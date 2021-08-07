import React from 'react'

function TopNavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
                    aria-controls="offcanvasExample">
                    <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
                </button>
                <a className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold" href="#">APPLIED</a>
                <ul className="navbar-nav">
                    <li className="nav-item text-white ">Welcome, Admin</li>
                </ul>
            </div>
        </nav>
    )
}

export default TopNavigationBar



