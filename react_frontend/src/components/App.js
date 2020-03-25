import React, { Component } from 'react';
import NavBar from './layouts/NavBar'
import Image from './layouts/Image'
import Panes from './layouts/Panes'
import {lightBlue} from "@material-ui/core/colors";
import Footer from "./layouts/Footer";

const styles = {
    backgroundColor: lightBlue
}

export default class extends Component {
    render() {
        return (
                <div style={styles}>
                    <NavBar/>
                    <Image/>
                    <Panes/>
                    <Footer/>
                </div>
            )
    }
}

