import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
    Paper: { padding: 10, marginTop: 10, marginBottom: 10}

}

export default props =>
    <Grid container spacing={2}>
        <Grid item sm>
            <LeftPane styles={styles}/>
        </Grid>
        <Grid item md>
            <RightPane styles={styles}/>
        </Grid>
    </Grid>