import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Home from "../scenes/Home";
import Jenkins from "../scenes/Jenkins";
import MEBLogs from "../scenes/Jenkins/MEBLogs";
import UserAccess from "../scenes/UserAccess";
import MEBBackuprun from "../scenes/Jenkins/MEBBackuprun";

const App = () => (
  <Router>
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/mebbackup" component={Jenkins} />
      <PublicRoute exact path="/mebbackup/logs" component={MEBLogs} />
      <PublicRoute exact path="/mysql-user-access" component={UserAccess} />
      <PublicRoute path="/backup-run" component={MEBBackuprun} />
    </Switch>
  </Router>
);

export default App;
