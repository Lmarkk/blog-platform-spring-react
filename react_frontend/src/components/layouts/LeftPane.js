import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbDown from '@material-ui/icons/ThumbDown';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import HTTPFetch from "../../HTTPFetch";
import HTTPPost from "../../HTTPPost";
import {Form} from './Form';
import AddCircle from '@material-ui/icons/AddCircle';
import BlogpostCreator from "./BlogpostCreator";

const useStyles = makeStyles(theme => ({

    root: {
        maxWidth: 1500,
        paddingTop: 10,
        marginTop: 40,
        marginLeft: 35,
        marginRight: 35
    },
    cardHeader: {
        textAlign: 'center',
        marginLeft: 96
    },
    media: {
        height: '100%',
        display: 'block',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    addIcon: {
        marginBottom: 40,
        margin: 'auto',
        display: 'block'
    },
    cardIcons: {
        float: 'right',
        display: 'block',
        marginRight: 0,
        clear: 'left'
    },
    headerTextField: {
        display: 'block',
        alignContent: 'center',
        marginTop: 10,
        marginLeft: 10
    }
}));

export default function BlogCards() {


    const stateClass = new Form();
    let element;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const today = new Date();
    const todayDate = today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
    let tempId;
    let tempTitle;
    let tempDate;
    let tempDescription;
    let tempContent;

    let lassinTesti = [{id: "test", title: "test", date: "test", description: "test", content: "test"}];


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const httpPost = new HTTPPost();
    const httpFetch = new HTTPFetch();

    const changeGreen = () => {
        let x = document.getElementById("thumbUp1");
        x.style.color = 'green';
    };

    const changeRed = () => {
        let x = document.getElementById("thumbDown1");
        x.style.color = 'red';
    };
/*
    const removeElement = () => {
        for(let i = 0; i < blogDataArray.length; i++) {
            if (blogDataArray[i].id === document.getElementById(i)) {

            }
        }
    };

 */

    return (
        <div>
        <Form/>
        <div className={classes.root}>
        <Card id={1}>
            <IconButton className={classes.cardIcons}>
                <EditIcon/>
            </IconButton>
            <IconButton className={classes.cardIcons}>
                <DeleteIcon/>
            </IconButton>
            <CardHeader className={classes.cardHeader}
                title='My first blog post!'
                subheader='October 29, 2018'
            />
            <img
                className={classes.media}
                src={'https://i.imgur.com/wuIIg6A.jpg'}
            />
            <CardContent>
                <Typography variant='body1' color='textSecondary'>
                    I took this picture yesterday and I'm so happy how it turned out!
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <IconButton id={'thumbUp1'} onClick={changeGreen}>
                    <ThumbUp/>
                </IconButton>

                <Typography>
                    13
                </Typography>

                <IconButton id={'thumbDown1'} onClick={changeRed}>
                    <ThumbDown />
                </IconButton>

                <Typography>
                    13
                </Typography>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>Lorem ipsum:</Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, dolor sed tincidunt fringilla, nisl magna lobortis orci, id accumsan
                        elit nibh sed purus. In sed suscipit nunc. Integer tortor eros, rhoncus et turpis in, vehicula maximus sapien.
                        Vivamus interdum nunc quis felis dictum, eu iaculis mi fringilla. Phasellus vitae consectetur mauris. Mauris eu auctor massa,
                        quis aliquam ligula. Duis varius dui massa, ut euismod velit viverra nec. Etiam quis diam eu lectus pretium interdum. Integer eget nunc nisl.
                        Sed id posuere tortor. Praesent quis laoreet eros, in varius mi. Curabitur pulvinar vehicula arcu, ut eleifend velit porttitor et. Vivamus auctor
                        ultricies convallis. Praesent non ornare ipsum. Nam condimentum mi vel velit pharetra, venenatis rhoncus risus rutrum.
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, dolor sed tincidunt fringilla, nisl magna lobortis orci, id accumsan
                        elit nibh sed purus. In sed suscipit nunc. Integer tortor eros, rhoncus et turpis in, vehicula maximus sapien.
                        Vivamus interdum nunc quis felis dictum, eu iaculis mi fringilla. Phasellus vitae consectetur mauris. Mauris eu auctor massa,
                        quis aliquam ligula. Duis varius dui massa, ut euismod velit viverra nec. Etiam quis diam eu lectus pretium interdum. Integer eget nunc nisl.
                        Sed id posuere tortor. Praesent quis laoreet eros, in varius mi. Curabitur pulvinar vehicula arcu, ut eleifend velit porttitor et. Vivamus auctor
                        ultricies convallis. Praesent non ornare ipsum. Nam condimentum mi vel velit pharetra, venenatis rhoncus risus rutrum.
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, dolor sed tincidunt fringilla, nisl magna lobortis orci, id accumsan
                        elit nibh sed purus. In sed suscipit nunc. Integer tortor eros, rhoncus et turpis in, vehicula maximus sapien.
                        Vivamus interdum nunc quis felis dictum, eu iaculis mi fringilla. Phasellus vitae consectetur mauris. Mauris eu auctor massa,
                        quis aliquam ligula. Duis varius dui massa, ut euismod velit viverra nec. Etiam quis diam eu lectus pretium interdum. Integer eget nunc nisl.
                        Sed id posuere tortor. Praesent quis laoreet eros, in varius mi. Curabitur pulvinar vehicula arcu, ut eleifend velit porttitor et. Vivamus auctor
                        ultricies convallis. Praesent non ornare ipsum. Nam condimentum mi vel velit pharetra, venenatis rhoncus risus rutrum.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
        </div>
            {
                BlogpostCreator()
            }
        </div>
    );
}


