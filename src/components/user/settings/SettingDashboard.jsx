import React from 'react';
import { Grid } from 'semantic-ui-react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SettingNav from './SettingNav';
import BasicPage from './BasicPage';
import PhotoPage from './PhotoPage';
import AccountPage from './AccountPage';
import AboutPage from './AboutPage';
const SettingDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={12} >
                <Switch>
                    <Redirect exact from='/setting' to='/setting/basic' />
                    <Route path='/setting/basics' component={BasicPage} />
                    <Route path='/setting/Photos' component={PhotoPage} />
                    <Route path='/setting/account' component={AccountPage} />
                    <Route path='/setting/about' component={AboutPage} />
                </Switch>
            </Grid.Column>
            <Grid.Column width={4} >
                <SettingNav />
            </Grid.Column>
        </Grid>
    );
}

export default SettingDashboard;
