import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch, Redirect} from "react-router-dom";

// core components
import Main from "layouts/Main.jsx";

import "assets/css/material-dashboard-react.css?v=1.7.0";
import configureStore from "store/index";
import reducer from "reducer/index"
import {Provider} from "react-redux";

const hist = createBrowserHistory();
const store = configureStore(reducer);
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={hist}>
                <Switch>
                    <Route path="/main" component={Main}/>
                    {/*<Redirect from="/" to="/main/dashboard" />*/}
                </Switch>
            </Router>
        </Provider>,
        document.getElementById("root")
    )
};

render();

