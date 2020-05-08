import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    color: {
        background: theme.palette.grey[800]
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();
    const [searchWord, setSearchWord] = useState('');


    const handleInputChange = (event) => {
        setSearchWord(event.target.value);
    };

    useEffect(() => {
        if (searchWord != '') {
            getData();
        } else {
            window.x = [];
        }
    }, [searchWord]);

    const logout = () => {
        sessionStorage.setItem("login", "false");
        window.location.reload();
    };

    const getData = () => {
        const apiURL = `https://onedolah.herokuapp.com/findblogposts`;
        const conf = {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                searchWord: searchWord
            })};


        fetch(apiURL, conf).then(response => response.json()).then(data => window.x = data);
        };


    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.color}>
                <Toolbar>
                    <Typography className={classes.title} variant='h6' noWrap>
                        <Link style={{display: 'table-cell', color:'inherit', textDecoration:'none'}} href='https://onedolah.herokuapp.com/'>OneDolah</Link>
                    </Typography>
                    <Button color="inherit" onClick={logout}>Logout</Button>
                    <Button color="inherit" href={'/login'}>Login</Button>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            onChange={handleInputChange}
                            placeholder='Search…'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
