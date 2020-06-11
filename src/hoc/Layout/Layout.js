import React, { Component, Fragment } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// import { connect } from 'react-redux';

import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';


const useStyles = theme => ({
    mainGrid: {
        marginTop: theme.spacing(1),
    },
});


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }



    render() {
        const { classes } = this.props;
        const sections = [
            { title: 'Posts', url: '/posts' },
            { title: 'Experimentos', url: '/experiments' }
        ];

        const sidebar = {
            title: 'Sobre mí',
            description:
                'Ingeniero Informático y de Sistemas egresado de la Universidad Nacional de San Antonio Abad '
                + 'del Cusco, con mas de 2 años de experiencia como programador fullstack, '
                + 'experiencia con tecnologias .NET, JavaScript, Django Rest Framework y SQLServer '
                + 'principalmente, siempre en busca de aprendizaje.',
            social: [
                { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/KevinPercy/' },
                { name: 'Twitter', icon: TwitterIcon, url: '#' },
                { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/kevinccapatinta' }
            ],
        };
        return (
            <Fragment>
                <Header sections={sections} />
                <main>
                    <Grid container spacing={2} className={classes.mainGrid}>
                        <Grid item md={8} xs={12}>
                            {this.props.children}
                        </Grid>
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
                <Footer />
            </Fragment>
        )
    }
}

export default withStyles(useStyles)(Layout);
