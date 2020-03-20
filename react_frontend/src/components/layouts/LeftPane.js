import React from 'react'
import { Paper } from '@material-ui/core'
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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import firstPostImage from '../images/background.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1500,
        paddingTop: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title="My first blog post!"
                subheader="October 29, 2018"
            />
            <CardMedia
                className={classes.media}
                image="firstPostImage"
                title="Lorem Ipsum"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
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
    );
}


