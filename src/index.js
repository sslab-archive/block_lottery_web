import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Main.jsx";

import "assets/css/material-dashboard-react.css?v=1.7.0";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/main" component={Admin} />
            {/*<Redirect from="/" to="/main/dashboard" />*/}
        </Switch>
    </Router>,
    document.getElementById("root")
);

