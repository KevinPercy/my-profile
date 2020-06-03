import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';


import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Blog from '../../containers/Blog/Blog';

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
        const sections = [
            { title: 'Posts', url: '/' },
            { title: 'Archivo', url: '/archive' },
            { title: 'Experimentos', url: 'experiments' }
        ];
        return (
            <Fragment>
                <Header sections={sections} />

                <Blog />
                <Footer />
            </Fragment>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.auth.token !== null
//     };
// };

// export default connect(mapStateToProps)(Layout);
export default Layout;