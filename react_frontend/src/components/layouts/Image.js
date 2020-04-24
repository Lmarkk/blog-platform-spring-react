import React from 'react';

const styles = {
    paperContainer: {
        height: '80vh',
        backgroundRepeat: 'no-repeat',
        marginTop: 10,
        objectFit: 'cover',
        overflow: 'hidden',
        width: '100%'
    }
};

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <img style={styles.paperContainer} src={require("../images/panorama.jpg")} alt={"cannot display"}>
                </img>
            </div>
        )
    }
}