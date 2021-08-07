import React, { Component } from 'react';

class OffCanvasUser extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="offcanvas offcanvas-start sidebar-nav bg-dark" tabIndex="-1" id="sidebar">
                <div className="offcanvas-body p-0">
                    <nav className="navbar-dark">
                        <ul className="navbar-nav">
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3">
                                    SMART THERMOSTAT
                                </div>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3 active">
                                    <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                                    <span>Dashboard</span>
                                </a>
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
                                <a href="/sensorsettings" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-gear"></i></span>
                                    <span>Sensor Settings</span>
                                </a>
                            </li>

                            <li>
                                <a href="/networksettings" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-gear"></i></span>
                                    <span>Network Settings</span>
                                </a>
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
                                <a href="#" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-calendar-check"></i></span>
                                    <span>Set Point</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-key"></i></span>
                                    <span>Change password</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-power"></i></span>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default OffCanvasUser;