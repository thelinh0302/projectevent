import React from 'react';
import { Grid, Menu, Header } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
const SettingNav = () => {
    return (
        <Grid.Column width={4}>
            <Menu vertical>
                <Header icon="user" attached inverted color="grey" content="Profile" />
                <Menu.Item as={NavLink} to='/setting/basics' >Basics</Menu.Item>
                <Menu.Item as={NavLink} to='/setting/about' >About Me</Menu.Item>
                <Menu.Item as={NavLink} to='/setting/Photos' >My Photos</Menu.Item>
            </Menu>
            <Grid.Row />
            <Menu vertical>
                <Header
                    icon="settings"
                    attached
                    inverted
                    color="grey"
                    content="Account"
                />
                <Menu.Item as={NavLink} to='/setting/account' > My Account</Menu.Item>
            </Menu>
        </Grid.Column>
    );
}

export default SettingNav;
