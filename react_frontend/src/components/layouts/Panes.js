import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import MiddlePane from "./MiddlePane";

const styles = {
    Paper: {
        marginTop: 10, marginBottom: 10
    },
    PaperLeft: {
        marginLeft: 30, padding: 10, marginTop: 10, marginBottom: 10
    },
};


export default function Panes() {
    return (
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <LeftPane style={styles.PaperLeft}/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <RightPane style={styles.Paper}/>
                </Grid>
            </Grid>
        )

}
/*
<Grid Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
    <MiddlePane style={styles.PaperLeft}></MiddlePane>
</Grid>

 */

