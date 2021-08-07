import React, { Component } from 'react';

class SensorSettings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: 0,
            room_temperature_sensor_id: '',
            sensor_id: '',
            api_key: '',
            api_url: '',
            validationErrors: {}
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.validateFields = this.validateFields.bind(this)
    }
    radioHandler = (status) => {
        this.setState({ status });
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
 
        fetch('http://127.0.0.1:8000/sensorsettings',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            status: '',
            room_temperature_sensor_id: '',
            sensor_id: '',
            api_key: '',
            api_url: '',
        });

        

        // const isFormvalid = this.validateFields()

        // if (isFormvalid) {
        //     this.setState((state) => {
        //         return {
        //             submitted: state.submitted + 1
        //         }
        //     })
        // }

    }
    validateFields() {
        const {room_temperature_sensor_id, sensor_id, api_key, api_url, status } = this.state

        const errors = {}

        if (!status) {
            errors['status'] = 'Please Select Ambient Temperature Type'
        }


        if (!room_temperature_sensor_id) {
            errors['roomTemperatureSensorId'] = 'Please Enter Correct Sensor ID'
        }

        if (!sensor_id) {
            errors['sensorId'] = 'Please Enter Correct Sensor ID'
        }
        if (!api_key) {
            errors['apiKey'] = 'Please Enter Correct API Key'
        }

        if (!api_url) {
            errors['apiUrl'] = 'Please Enter Correct API Url'
        }



        // if (!acceptedTerms) {
        //     errors['acceptedTerms'] = 'Please Accept Terms'
        // }

        this.setState({

            validationErrors: errors
        })

        return Object.keys(errors).length === 0

    }
    render() {

        const { status } = this.state;

        const {
            status: statusError,
            room_temperature_sensor_id: roomTemperatureSensorIdError,
            sensor_id: sensorIdError,
            api_key: apiKeyError,
            api_url: apiUrlError
        } = this.state.validationErrors
        return (
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="tile">
                                <div className="wrapper">
                                    <div className="header text-dark">Sensor Settings (Correct Source)</div>

                                    <div className="row align-items-center ">
                                        <div className="col-lg-10 mx-auto">

                                            <div className="bg-white p-5 rounded shadow-sm">

                                                <form method="get" onSubmit={this.handleOnSubmit} >

                                                    <div className="mb-3 row">
                                                        <label htmlFor="roomTemperature" className="col-sm-4 col-form-label">Room Temperature Sensor ID (EnOcean ID) <small className="text-danger">*</small></label>
                                                        <div className="col-sm-8">
                                                            <div className="input-group">
                                                                <input type="text" aria-label="sensor_id" className="form-control" onChange={this.handleOnChange}
                                                                    value={this.state.room_temperature_sensor_id} />
                                                            </div>
                                                            <div id="tmp_senId" className="form-text text-danger">{roomTemperatureSensorIdError}</div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3 row">
                                                        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Ambient Temperature <small className="text-danger">*</small></label>
                                                        <div className="col-sm-8">
                                                            <div className="col-sm-10">
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={status === 1} onClick={(e) => this.radioHandler(1)} />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                        SENSOR
                                                                    </label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={status === 2} onClick={(e) => this.radioHandler(2)} />
                                                                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                                        API
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div id="emailHelp" className="form-text text-danger">{statusError}</div>
                                                        </div>
                                                    </div>


                                                    {status === 1 &&

                                                        <div className="mb-3 row">
                                                            <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Sensor ID (EnOcean ID) <small className="text-danger">*</small></label>
                                                            <div className="col-sm-8">
                                                                <div className="input-group">
                                                                    <input type="text" aria-label="First name" className="form-control" onChange={this.handleOnChange}
                                                                        value={this.state.sensor_id} />
                                                                </div>
                                                                <div id="emailHelp" className="form-text text-danger">{sensorIdError}</div>
                                                            </div>
                                                        </div>

                                                    }
                                                    {status === 2 &&
                                                        <div>
                                                            <div className="mb-3 row">
                                                                <label htmlFor="staticEmail" className="col-sm-4 col-form-label">API Key (Darksky) <small className="text-danger">*</small></label>
                                                                <div className="col-sm-8">
                                                                    <div className="input-group">
                                                                        <input type="text" aria-label="Last name" className="form-control" onChange={this.handleOnChange}
                                                                            value={this.state.api_key} />
                                                                    </div>
                                                                    <div id="emailHelp" className="form-text text-danger">{apiKeyError}</div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3 row">
                                                                <label htmlFor="staticEmail" className="col-sm-4 col-form-label">API URL <small className="text-danger">*</small></label>
                                                                <div className="col-sm-8">
                                                                    <div className="input-group">
                                                                        <input type="text" aria-label="Last name" className="form-control" />
                                                                    </div>
                                                                    <div id="emailHelp" className="form-text text-danger" onChange={this.handleOnChange}
                                                                        value={this.state.api_url} >{apiUrlError}</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    }

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

export default SensorSettings;