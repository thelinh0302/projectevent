import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import MenuSignOut from '../Menus/MenuSignOut';
import MenuSignIn from '../Menus/MenuSignIn';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    }
    handleSignedIn = () => {
        this.setState({
            authenticated: true
        })
    }
    handleSignedOut = () => {
        this.setState({
            authenticated: false
        })
        this.props.history.push('/')
    }
    render() {
        const { authenticated } = this.state
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={Link} to='/' header>
                        <img src="assets/logo.png" alt="logo" />
                        Re-vents
                      </Menu.Item>
                    {authenticated &&
                        <Menu.Item as={NavLink} to='/events' name="Events" />}
                    {authenticated &&
                        <Menu.Item as={NavLink} to='/people' name="People" />}

                    <Menu.Item>
                        <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                    </Menu.Item>
                    {authenticated ? <MenuSignIn signOut={this.handleSignedOut} /> : <MenuSignOut signIn={this.handleSignedIn} />}
                </Container>
            </Menu>
        );
    }
}

export default withRouter(Navbar);