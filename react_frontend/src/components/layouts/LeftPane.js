import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbDown from '@material-ui/icons/ThumbDown';
import AddCircle from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDeleteClick = () => {

    };

    const handleEditClick = () => {

    };

    const handleAddClick = () => {

    };

    return (
        <div>
        <div className={classes.root}>
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
                    <IconButton aria-label='add to favorites'>
                        <ThumbUp/>
                    </IconButton>
                    <IconButton aria-label='share'>
                        <ThumbDown />
                    </IconButton>
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

        <div className={classes.root}>
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
                <IconButton aria-label='add to favorites'>
                    <ThumbUp/>
                </IconButton>
                <IconButton aria-label='share'>
                    <ThumbDown />
                </IconButton>
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
        </div>
    );
}


