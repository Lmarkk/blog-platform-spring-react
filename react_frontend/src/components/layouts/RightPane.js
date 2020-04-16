import React from 'react'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        backgroundColor: 'white',
        height: '100%'
    },
    first: {
        marginRight: 50,
        marginTop: 50,
        marginLeft: 50,
        padding: 0
    },
    afterFirst: {
        marginRight: 50,
        marginTop: 50,
        marginLeft: 50,
        padding: 0
    }
};

export default function rightSide() {
    return (
        <div style={styles.root}>
            <Paper style={styles.first}>
                <fieldset>
                    <legend>Recent likes</legend>
                    <Typography>
                    Jack liked your post! <br />
                    Sarah liked your post! <br />
                    Jukka liked your post! <br />
                    Sebastian liked your post!
                    </Typography>
                </fieldset>
            </Paper>
            <div>
            <Paper style={styles.afterFirst}>
                <fieldset>
                    <legend>Recent comments</legend>
                    <Typography>
                    John: WOW, that is a really good photo! <br />
                    Anna: Where was this taken? Looks so cool! <br />
                    Veeti: OmG! Et sÄ PaReMpAAN pystNy??? <br />
                    </Typography>
                </fieldset>
            </Paper>
                <Paper style={styles.afterFirst}>
                    <fieldset>
                        <legend>Most liked posts!</legend>
                        <Typography>
                            1. "I took this photo from the airport!" <br />
                            2. "My first blog post!" <br />
                            3. "My favourite food!" <br />
                        </Typography>
                    </fieldset>
                    </Paper>
                    <Paper style={styles.afterFirst}>
                        <fieldset>
                            <legend>Most commented post!</legend>
                            <Typography>
                                1. "Why Donald Trump is such a good president" <br />
                                2. "COVID-19 IS NOT REAL! WAKE UP PEOPLE" <br />
                                3. "Okay, COVID-19 might be real" <br />
                            </Typography>
                        </fieldset>
                    </Paper>
            </div>
        </div>
    )
};

