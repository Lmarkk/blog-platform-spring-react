import React, {useState} from 'react'
import HTTPFetch from "../../HTTPFetch";
import HTTPPost from "../../HTTPPost";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

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

export default function BlogpostCreator(id, title, date, description, content) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const blogpostId = id;
    const blogpostTitle = title;
    const blogpostDate = date;
    const blogpostDescription = description;
    const blogpostContent = content;

    return (
       <div>
           <Card>
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
                   src={require('../images/nature.jpg')} alt={'cannot display'}
               />
               <CardContent>
                   <Typography variant='body1' color='textSecondary'>
                       I took this picture yesterday and I'm so happy how it turned out!
                   </Typography>
               </CardContent>
               <CardActions disableSpacing>

                   <IconButton>
                       <ThumbUp/>
                   </IconButton>

                   <Typography>
                       13
                   </Typography>

                   <IconButton>
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
                       <Typography>

                       </Typography>
                   </CardContent>
               </Collapse>
           </Card>
       </div>
    );
}