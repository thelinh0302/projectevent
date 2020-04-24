import React, { Component } from 'react';
import EventDashboard from '../../components/event/eventDashboard/EventDashboard'
import { Route, Switch } from 'react-router-dom'
import Navbar from './../../components/nav/navbar/Navbar'
import { Container } from 'semantic-ui-react'
import EventDetailPage from '../../components/event/EventDetail/EventDetailPage';
import PeopleDashboard from '../../components/user/PeopleDashboard/PeopleDashboard';
import UserDetailPage from '../../components/user/userDetail/UserDetailPage';
import SettingDashboard from '../../components/user/settings/SettingDashboard';
import EventForm from '../../components/event/EventForm/EventFrom';
import Homepage from '../../components/home/Homepage';
import TestComponent from '../../components/testarea/TestComponent';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
        <Route path="/(.+)" render={() => (
          <div>
            <Navbar />
            <Container className="main" >
              <Switch>
                <Route path='/events' component={EventDashboard} />
                <Route path='/test' component={TestComponent} />
                <Route path='/event/:id' component={EventDetailPage} />
                <Route path='/manage/:id' component={EventForm} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailPage} />
                <Route path='/setting' component={SettingDashboard} />
                <Route path='/createEvent' component={EventForm} />
              </Switch>
            </Container>
          </div>
        )} />
      </div>
    );
  }
}

export default App;