import React from 'react';

import Image from '../images/background.jpg';
import {Card} from "@material-ui/core"; // Import using relative path


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '100',
    }
};

export default class Home extends React.Component{
    render(){
        return(
            <Card style={styles.paperContainer}>
            </Card>
        )
    }
}