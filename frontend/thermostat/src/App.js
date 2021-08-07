import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Switch } from 'react-router-dom';

//import Login from './Login';
//import './Login.css'

import TopNavigationBar from './TopNavigationBar';
import OffCanvas from './OffCanvas';

import Home from './components/Home';
import SensorSettingss from './components/SensorSettingss';
import NetworkSettingss from './components/NetworkSettingss';
import SetPoint from './components/SetPoint';
import ChangePassword from './components/ChangePassword';


import './AdminUserStyle.css'


function App() {
  return (
    <React.Fragment>
      <TopNavigationBar />,
      <OffCanvas />
      <div className="content">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sensorsettings" component={SensorSettingss} />
        <Route path="/networksettings" component={NetworkSettingss} />
        <Route path="/setpoint" component={SetPoint} />
        <Route path="/changepassword" component={ChangePassword} />
        </Switch>
      </div>
    </React.Fragment>

  );
}

export default App;
