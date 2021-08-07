import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [dashboard, setDashboardData] = useState([]);
  const [network, setNetworkData] = useState([]);
  const [pointData, setPointData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/dashboard/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 33f71f70877e649a0585eac2d9895994c491aeb7",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setDashboardData(resp))
      .catch((error) => console.log(error));

    fetch("http://127.0.0.1:8000/api/networksettings/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 33f71f70877e649a0585eac2d9895994c491aeb7",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setNetworkData(resp))
      .catch((error) => console.log(error));

    fetch("http://127.0.0.1:8000/api/setpoint/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 33f71f70877e649a0585eac2d9895994c491aeb7",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setPointData(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <main className="mt-5 pt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="tile">
                <div className="wrapper">
                  <div className="header text-dark">A1001</div>

                  <div className="box">
                    <div className="container-fluid">
                      {dashboard.map((dashboardData) => {
                        return (
                          <div className="row" key={dashboardData.dashboard_id}>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                              <div className="box-part text-center">
                                <i className="bi bi-thermometer-sun top_bi "></i>
                                <div className="title">
                                  <h6>Current Temperature</h6>
                                </div>
                                <div className="temp_cnt">
                                  {dashboard.map((dashboardData) => {
                                    return (
                                      <h4>
                                        {dashboardData.current_temperature}
                                        <span>&#8451;</span>
                                      </h4>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                              <div className="box-part text-center">
                                <i className="bi top_bi bi-flower3"></i>
                                <div className="title">
                                  <h6>Fan Speed</h6>
                                </div>
                                <div className="temp_cnt">
                                  {dashboard.map((dashboardData) => {
                                    return <h4>{dashboardData.fan_speed}</h4>;
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                              <div className="box-part text-center">
                                <i className="bi bi-thermometer-sun top_bi "></i>
                                <div className="title">
                                  <h6>Ambient Temperature</h6>
                                </div>
                                <div className="temp_cnt">
                                  {dashboard.map((dashboardData) => {
                                    return (
                                      <h4>
                                        {dashboardData.amb_temperature}
                                        <span>&#8451;</span>
                                      </h4>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                              <div className="box-part text-center">
                                <i className="bi bi-house-fill top_bi "></i>
                                <div className="title">
                                  <h6>Location</h6>
                                </div>
                                <div className="temp_cnt">
                                  {dashboard.map((dashboardData) => {
                                    return <h4>{dashboardData.location}</h4>;
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div className="box-part text-center">
                            <i className="bi bi-calendar2-check top_bi"></i>
                            <div className="title">
                              <h6>User Set Point</h6>
                            </div>
                            <div className="temp_cnt">
                              {pointData.map((setPoint) => {
                                return <h4>{setPoint.user_set_point}</h4>;
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div className="box-part text-center">
                            <i className="bi top_bi bi-calendar2-check"></i>
                            <div className="title">
                              <h6>Default Set Point</h6>
                            </div>
                            <div className="temp_cnt">
                              {pointData.map((setPoint) => {
                                return <h4>{setPoint.default_set_point}</h4>;
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div className="box-part text-center">
                            <i className="bi bi-display top_bi "></i>
                            <div className="title">
                              <h6>IP Address</h6>
                            </div>
                            <div className="temp_cnt">
                              {network.map((networkData) => {
                                return <h6>{networkData.ip_address}</h6>;
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div className="box-part text-center">
                            <i className="bi bi-display top_bi "></i>
                            <div className="title">
                              <h6>Mac Address</h6>
                            </div>
                            <div className="temp_cnt">
                              {network.map((networkData) => {
                                return <h6>{networkData.mac_address}</h6>;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dates">
                    <div className="start">
                      <strong>LAST UPDATE</strong>
                      {dashboard.map((dashboardData) => {
                        return <h4>{dashboardData.last_update}</h4>;
                      })}
                    </div>
                    <div className="ends">
                      <strong>STATUS</strong>{" "}
                      <b>
                        {" "}
                        {dashboard.map((dashboardData) => {
                          return <h4>{dashboardData.status}</h4>;
                        })}
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
