import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from './../EventList/EventList'
import EventForm from './../EventForm/EventFrom'
import cuid from 'cuid';
import { connect } from 'react-redux'
import { createEvent, updateEvent, deleteEvent } from './../../../app/actions/EventAction'


class EventDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // events: eventsDashboard,
            isOpen: false,
            selectedEvent: null
        }
    }
    handleOpenForm = () => {
        this.setState({
            selectedEvent: null,
            isOpen: true
        })
    }
    handleCloseFrom = () => {
        this.setState({
            isOpen: false
        })
    }
    handleUpdateEvent = (updateEvent) => {
        this.props.updateEvent(updateEvent)
        this.setState({
            isOpen: false,
            selectedEvent: null
        })
    }
    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid()
        newEvent.hostPhotoURL = '/assets/user.png'
        this.props.createEvent(newEvent)
        this.setState({
            isOpen: false
        })
    }
    handleOpenEvent = (eventToOpen) => () => {
        this.setState({
            selectedEvent: eventToOpen,
            isOpen: true
        })
    }
    handleDeleteEvent = (eventId) => () => {
        this.props.deleteEvent(eventId)
    }
    render() {
        const { selectedEvent } = this.state
        return (
            <Grid>
                <Grid.Column width={10} >
                    <EventList
                        deleteEvent={this.handleDeleteEvent}
                        onEventOpen={this.handleOpenEvent}
                        events={this.props.events} />
                </Grid.Column>
                <Grid.Column width={6} >
                    <Button onClick={this.handleOpenForm} positive content='Creat event' />
                    {this.state.isOpen &&
                        <EventForm
                            eventUpdate={this.handleUpdateEvent}
                            selectedEvent={selectedEvent}
                            createEvent={this.handleCreateEvent}
                            handleCloseFrom={this.handleCloseFrom}
                        />
                    }
                </Grid.Column>
            </Grid>
        );
    }
}
const mapStateToProps = state => ({
    events: state.eventReducer
})
const action = {
    createEvent,
    updateEvent,
    deleteEvent
}
export default connect(mapStateToProps, action)(EventDashboard);