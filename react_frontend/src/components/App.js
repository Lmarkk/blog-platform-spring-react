import React, { Component } from 'react';
import NavBar from './layouts/NavBar'
import Image from './layouts/Image'
import Panes from './layouts/Panes'
import {lightBlue} from "@material-ui/core/colors";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './layouts/Login';
import CreateAccount from './layouts/CreateAccount';

const styles = {
    backgroundColor: lightBlue
};

const frontPage = () => (
    <div style={styles}>
        <Image/>
        <Panes/>
        <Footer/>
    </div>
);

const login = () => (
  <Login/>
);

const createAccount = () => (
    <CreateAccount/>
);

export default class extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                    <Switch>
                        <Route path={"/"} exact component={frontPage}/>
                        <Route path={"/login"} exact component={login}/>
                        <Route path={"/createaccount"} exact component={createAccount}/>
                    </Switch>
            </Router>
            )
    }
}

