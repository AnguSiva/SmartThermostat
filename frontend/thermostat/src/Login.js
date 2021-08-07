import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            validationErrors: {},

        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.validateFields = this.validateFields.bind(this)


    }

    handleOnChange(e) {
        const target = e.target
        const name = target.name

        const value = (
            target.type === 'text' ? target.value : target.checked
        )

        this.setState({
            [name]: value
        })

    }
    handleOnSubmit(e) {
        e.preventDefault();

        const isFormvalid = this.validateFields()

        if (isFormvalid) {
            this.setState((state) => {
                return {
                    submitted: state.submitted + 1
                }
            })
        }

    }
    validateFields() {
        const { username, password } = this.state

        const errors = {}

        if (username == 'siva') {
            errors['firstname'] = 'Please Enter Correct Username'
        } else if (!username) {
            errors['firstname'] = 'Please Enter Correct Usernameee'
        }

        if (!password) {
            errors['password'] = 'Please Enter Correct Password'
        } else if (password && password.length < 8) {
            errors['password'] = 'Password Should have atleast 8 Characters'
        }

      

        this.setState({
            validationErrors: errors
        })

        return Object.keys(errors).length === 0

    }
    render() {
        const {
            firstname: firstNameError,
            password: passwordError            
        } = this.state.validationErrors
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-info fixed-top bg-dark">

                    <a className="navbar-brand text-white m-1" href="#" >
                        {/* <img src={applied} alt={applied}  className="d-inline-block align-text-top"/> */} APPLIED
                    </a>
                </nav>
                <div className="container vh-100 login_page bg-white">

                    <div className="row align-items-center vh-100">
                        <div className="col-lg-4 mx-auto">

                            <div className="bg-white p-5 rounded shadow-sm">
                                <h6 className="text-info text-center">SMART THERMOSTAT</h6>
                                <h3 className="text-center">LOGIN</h3>
                                <form method="get"  onSubmit={this.handleOnSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Username <small className="text-danger">*</small></label>
                                        <input type="text"
                                            name="username"
                                            placeholder="Username"
                                            className="form-control"
                                            id="exampleUsername"
                                            onChange={this.handleOnChange}
                                            value={this.state.username} />
                                        <div id="emailHelp" className="form-text text-danger">{firstNameError}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password <small className="text-danger">*</small></label>
                                        <input type="text"
                                            name="password"
                                            placeholder="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            onChange={this.handleOnChange}
                                            value={this.state.password}
                                        />
                                        <div id="emailHelp" className="form-text text-danger">{passwordError}</div>
                                    </div>                                    
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary text-uppercase " type="Submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}


export default Login;