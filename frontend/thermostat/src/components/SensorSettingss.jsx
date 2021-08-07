import React, {useState} from 'react'
import Axios from 'axios'

function SensorSettingss() {

    const url = "http://127.0.0.1:8000/api/sensorsettings/"
   
   
    const [status, setStatus] = useState(0)
    const [data, setData] = useState({
        room_temp_sen_id:'',
        ambient_type:'',
        sensor_id:undefined,
        api_key:undefined,
        api_url:undefined
    })

    const radioHandler = (status) => {
      setStatus(status);
    };

    function submit(e){
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token 33f71f70877e649a0585eac2d9895994c491aeb7'
          }

        Axios.post(url,{           
            room_temp_sen_id:data.room_temp_sen_id,
            ambient_type:data.ambient_type,
            sensor_id:data.sensor_id,
            api_key:data.api_key,
            api_url:data.api_url
        },{
            headers:headers
        })
        .then(res => {
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
     

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

                                            <form onSubmit={(e) => submit(e)}>

                                                <div className="mb-3 row">
                                                    <label htmlFor="roomTemperature" className="col-sm-4 col-form-label">Room Temperature Sensor ID (EnOcean ID) <small className="text-danger">*</small></label>
                                                    <div className="col-sm-8">
                                                        <div className="input-group">
                                                            <input type="text" aria-label="sensor_id" className="form-control" 
                                                               onChange={(e) => handle(e)} id="room_temp_sen_id" value={data.room_temp_sen_id}/>
                                                        </div>
                                                        <div id="tmp_senId" className="form-text text-danger">{}</div>
                                                    </div>
                                                </div>

                                                <div className="mb-3 row">
                                                    <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Ambient Temperature <small className="text-danger">*</small></label>
                                                    <div className="col-sm-8">
                                                        <div className="col-sm-10">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" name="flexRadioDefault" type="radio" onChange={(e) => handle(e)} id="ambient_type" value="SENSOR" defaultChecked={status === 1} onClick={(e) => radioHandler(1)} />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                    SENSOR
                                                                </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" name="flexRadioDefault" type="radio" onChange={(e) => handle(e)} id="ambient_type" value="API" defaultChecked={status === 2} onClick={(e) => radioHandler(2)} />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                    API
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div id="emailHelp" className="form-text text-danger">{}</div>
                                                    </div>
                                                </div>


                                                {status === 1 &&

                                                    <div className="mb-3 row">
                                                        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Sensor ID (EnOcean ID) <small className="text-danger">*</small></label>
                                                        <div className="col-sm-8">
                                                            <div className="input-group">
                                                                <input type="text" aria-label="First name" className="form-control" 
                                                                   onChange={(e) => handle(e)} id="sensor_id" value={data.sensor_id}  />
                                                            </div>
                                                            <div id="emailHelp" className="form-text text-danger">{}</div>
                                                        </div>
                                                    </div>

                                                }
                                                {status === 2 &&
                                                    <div>
                                                        <div className="mb-3 row">
                                                            <label htmlFor="staticEmail" className="col-sm-4 col-form-label">API Key (Darksky) <small className="text-danger">*</small></label>
                                                            <div className="col-sm-8">
                                                                <div className="input-group">
                                                                    <input type="text" aria-label="Last name" className="form-control" 
                                                                       onChange={(e) => handle(e)} id="api_key" value={data.api_key}  />
                                                                </div>
                                                                <div id="emailHelp" className="form-text text-danger">{}</div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-3 row">
                                                            <label htmlFor="staticEmail" className="col-sm-4 col-form-label">API URL <small className="text-danger">*</small></label>
                                                            <div className="col-sm-8">
                                                                <div className="input-group">
                                                                    <input type="text" aria-label="Last name" className="form-control" 
                                                                    onChange={(e) => handle(e)} id="api_url" value={data.api_url} />
                                                                </div>
                                                                <div id="emailHelp" className="form-text text-danger" 
                                                                     >{}</div>
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

export default SensorSettingss
