import React, { Component } from 'react';

class ChangePassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            enteroldpasswd: '',
            enternewpasswd: '',
            entercnfmpasswd: '',
            validationErrors:{},
            submitted: 0
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
        e.preventDefault()

        const isFormvalid = this.validateFields()

        if(isFormvalid){
            this.setState((state) => {
                 return{
                     submitted: state.submitted + 1
                 }  
            })
        }
    }

    validateFields(){
        const {enteroldpasswd,enternewpasswd,entercnfmpasswd} = this.state

        const errors = {}

        if(!enteroldpasswd){
            errors['enteroldpasswd'] = 'Please Enter Correct Password'
        }


        if (!enternewpasswd) {
            errors['enternewpasswd'] = 'Please Enter Correct Password'
        } else if (enternewpasswd && enternewpasswd.length < 8) {
            errors['enternewpasswd'] = 'Password Should have atleast 8 Characters'
        }


        if(!entercnfmpasswd){
            errors['entercnfmpasswd'] = 'Please Re Enter New Password'
        }

        this.setState({
            validationErrors:errors
        })

        return Object.keys(errors).length === 0
    }
    render() {

        const {
            enteroldpasswd: enterOldPasswdError,
            enternewpasswd: enterNewPasswdError,
            entercnfmpasswd: enterCnfmPasswdError
        } = this.state.validationErrors;

        return (
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="tile">
                                <div className="wrapper">
                                    <div className="header text-dark">Change password (Correct Source)</div>

                                    <div className="row align-items-center ">
                                        <div className="col-lg-10 mx-auto">

                                            <div className="bg-white p-5 rounded shadow-sm">

                                                <form method="get" onSubmit={this.handleOnSubmit} >


                                                    <div className="mb-3 row">
                                                        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Enter Old Password <small className="text-danger">*</small></label>
                                                        <div className="col-sm-8">
                                                            <div className="input-group">
                                                                <input type="text" aria-label="First name" className="form-control" value={this.state.enteroldpasswd} onChange={this.handleOnChange} />
                                                            </div>
                                                            <div id="emailHelp" className="form-text text-danger">{enterOldPasswdError}</div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3 row">
                                                        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Enter New Password <small className="text-danger">*</small></label>
                                                        <div className="col-sm-8">
                                                            <div className="input-group">
                                                                <input type="text" aria-label="Last name" className="form-control" value={this.state.enternewpasswd} onChange={this.handleOnChange} />
                                                            </div>
                                                            <div id="emailHelp" className="form-text text-danger">{enterNewPasswdError}</div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3 row">
                                                        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Confirm New Password <small className="text-danger">*</small></label>
                                                        <div className="col-sm-8">
                                                            <div className="input-group">
                                                                <input type="text" aria-label="Last name" className="form-control" value={this.state.entercnfmpasswdError} onChange={this.handleOnChange} />
                                                            </div>
                                                            <div id="emailHelp" className="form-text text-danger">{enterCnfmPasswdError}</div>
                                                        </div>
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
                        </div>
                    </div>
                </div>
            </main >
        )
    }
}
export default ChangePassword;