import React, { Component } from 'react';
import NavBar from './layouts/NavBar'
import Image from './layouts/Image'
import Panes from './layouts/Panes'


export default class extends Component {
    render() {
        return (
                <div>
                    <NavBar/>
                    <Image/>
                    <Panes/>
                </div>
            )
    }
}

