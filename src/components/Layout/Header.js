import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    makeStyles, AppBar, Toolbar,
    Typography, Button, IconButton,
    Tab, Tabs
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        "@media (min-width: 500px)": {// eslint-disable-next-line
            display: 'none',
        }
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        alignItems: 'flex-start',
        overflowX: 'auto',
        justifyContent: 'center',
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Mi Blog
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.toolbar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {props.sections.map((section) => (
                        <Tab
                            key={section.title}
                            label={section.title}
                            component={NavLink}
                            to={section.url} />
                    ))}
                </Tabs>
            </Toolbar>
        </div>
    );
}

export default Header;