import React from 'react'
import { Link } from 'react-router-dom';

function OffCanvas() {
    return (
        <div>
            <div className="offcanvas offcanvas-start sidebar-nav bg-dark" tabIndex="-1" id="sidebar">
                <div className="offcanvas-body p-0">
                    <nav className="navbar-dark">

                        <ul className="navbar-nav">
                            <li><div className="text-muted small fw-bold text-uppercase px-3">SMART THERMOSTAT</div></li>
                            <li>
                                <Link to="/" className="nav-link px-3 active">
                                    <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="my-4">
                                <hr className="dropdown-divider bg-light" />
                            </li>
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                                    SETTINGS
                                </div>
                            </li>

                            <li>
                                <Link to="/sensorsettings" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-gear"></i></span>
                                    <span>Sensor Settings</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/networksettings" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-gear"></i></span>
                                    <span>Network Settings</span>
                                </Link>
                            </li>
                            <li className="my-4">
                                <hr className="dropdown-divider bg-light" />
                            </li>
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                                    Addons
                                </div>
                            </li>
                            <li>
                                <Link to="/setpoint" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-calendar-check"></i></span>
                                    <span>Set Point</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/changepassword" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-key"></i></span>
                                    <span>Change password</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-power"></i></span>
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default OffCanvas
