import React, { Component } from 'react';
import EventDashboard from '../../components/event/eventDashboard/EventDashboard'
import Navbar from './../../components/nav/navbar/Navbar'
import { Container } from 'semantic-ui-react'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="main" >
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;