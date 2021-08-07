import React, {useState} from 'react';
import Axios from 'axios';

function NetworkSettingss() {
    const url = "http://127.0.0.1:8000/api/networksettings/"
    const [data, setData] = useState({
        network:"",
        network_type:"",
        ip_address:"",
        mac_address:"",
        net_mask:"",
        gate_way:"",
        dns_server:""
    })
 
    function submit(e){
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token 33f71f70877e649a0585eac2d9895994c491aeb7'
          }

        Axios.post(url,{           
            network:data.network,
            network_type:data.network_type,
            ip_address:data.ip_address,
            mac_address:data.mac_address,
            net_mask:data.net_mask,
            gate_way:data.gate_way,
            dns_server:data.dns_server
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
                  <div className="header text-dark">
                    Network Settings (Correct Source)
                  </div>
                  <div className="row align-items-center ">
                    <div className="col-lg-10 mx-auto">
                      <div className="bg-white p-5 rounded shadow-sm">
                      <form onSubmit={(e)=> submit(e)}>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">NETWORK <small className="text-danger">*</small></label>
                             
                            <div className="col-sm-10">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="STATIC"
                                  value="STATIC"
                                  onChange={(e)=>handle(e)}
                                  id="network"                                                                                                      
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1"> STATIC </label>
                        
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="DHCP"
                                  value="DHCP"
                                  id="network"
                                  onChange={(e)=>handle(e)}                                  
                                />
                                <label  className="form-check-label" htmlFor="flexRadioDefault2"> DHCP</label>
                         
                              </div>
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              htmlFor="staticEmail"
                              className="col-sm-2 col-form-label"
                            >
                              TYPE <small className="text-danger">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="local"
                                  value="local"
                                  id="network_type"
                                  onChange={(e)=>handle(e)}                                  
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault3"
                                >
                                  LOCAL
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="cloud"
                                  value="cloud"
                                  id="network_type"
                                  onChange={(e)=>handle(e)}                                  
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault4"
                                >
                                  CLOUD
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              htmlFor="staticEmail"
                              className="col-sm-2 col-form-label"
                            >
                              IP ADDRESS{" "}
                              <small className="text-danger">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div className="input-group">
                                <input
                                  type="text"
                                  id="ip_address"
                                  aria-label="ip_address"
                                  className="form-control"
                                  value={data.ip_address}
                                  onChange={(e)=>handle(e)}
                                  placeholder="eg: 10.10.10.3"
                                />
                              </div>
                              <div
                                id="emailHelp"
                                className="form-text text-danger"
                              >
                                {}
                              </div>
                            </div>
                          </div>

                          <div className="mb-3 row">
                            <label
                              htmlFor="staticEmail"
                              className="col-sm-2 col-form-label"
                            >
                              Mac ADDRESS{" "}
                              <small className="text-danger">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div className="input-group">
                                <input
                                  type="text"
                                  aria-label="ip_address"
                                  className="form-control"
                                  onChange={(e)=>handle(e)}
                                  value={data.mac_address}
                                  id="mac_address"
                                  placeholder="eg: C8:5B:76:2D:7D:36"
                                />
                              </div>
                              <div
                                id="emailHelp"
                                className="form-text text-danger"
                              >
                                {}
                              </div>
                            </div>
                          </div>

                          <div className="mb-3 row">
                            <label
                              htmlFor="staticEmail"
                              className="col-sm-2 col-form-label"
                            >
                              NET MASK <small className="text-danger">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div className="input-group">
                                <input
                                  type="text"
                                  aria-label="netmask"
                                  className="form-control"
                                  onChange={(e)=>handle(e)}
                                  value={data.net_mask}
                                  id="net_mask"                                  
                                  placeholder="eg: 255.255. 225.0"
                                />
                              </div>
                              <div
                                id="emailHelp"
                                className="form-text text-danger"
                              >
                                {}
                              </div>
                            </div>
                          </div>

                          <div className="mb-3 row">
                            <label
                              htmlFor="staticEmail"
                              className="col-sm-2 col-form-label"
                            >
                              GATE WAY <small className="text-danger">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div className="input-group">
                                <input
                                  type="text"
                                  aria-label="gateway"
                                  className="form-control"
                                  id="gate_way"
                                  value={data.gate_way}
                                  onChange={(e)=>handle(e)}
                                  placeholder="eg: 192.168. 99.1"
                                />
                              </div>
                              <div
                                id="emailHelp"
                                className="form-text text-danger"
                              >
                                {}
                              </div>
                            </div>
                          </div>

                          <div className="mb-3 row">
                            <label
                              htmlFor="staticEmail"
                              className="col-sm-2 col-form-label"
                            >
                              DNS SERVER{" "}
                              <small className="text-danger">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div className="input-group">
                                <input
                                  type="text"
                                  id="dns_server"
                                  aria-label="dnsserver"
                                  className="form-control"
                                  value={data.dns_server}
                                  onChange={(e)=>handle(e)}
                                  placeholder="eg: 2001:4860:4860::8888"
                                />
                              </div>
                              <div
                                id="emailHelp"
                                className="form-text text-danger"
                              >
                                {}
                              </div>
                            </div>
                          </div>

                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-primary text-uppercase "
                              type="Submit" 
                            >
                              Submit
                            </button>
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
      </main>
    )
}

export default NetworkSettingss
