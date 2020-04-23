import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from './../EventList/EventList'
import EventForm from './../EventForm/EventFrom'
import cuid from 'cuid';
const eventsDashboard = [
    {
        id: '1',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: "Tower of London, St Katharine's & Wapping, London",
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
        ]
    }
]

class EventDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: eventsDashboard,
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
        this.setState({
            events: this.state.events.map(event => {
                if (event.id === updateEvent.id) {
                    return Object.assign({}, updateEvent)
                } else {
                    return event
                }
            }),
            isOpen: false,
            selectedEvent: null
        })
    }
    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid()
        newEvent.hostPhotoURL = '/assets/user.png'
        const updateEvent = [...this.state.events, newEvent]
        this.setState({
            events: updateEvent,
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
        const updateEvent = this.state.events.filter(x => x.id !== eventId)
        this.setState({
            events: updateEvent
        })
    }
    render() {
        const { selectedEvent } = this.state
        return (
            <Grid>
                <Grid.Column width={10} >
                    <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events} />
                </Grid.Column>
                <Grid.Column width={6} >
                    <Button onClick={this.handleOpenForm} positive content='Creat event' />
                    {this.state.isOpen &&
                        <EventForm eventUpdate={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCloseFrom={this.handleCloseFrom} />
                    }
                </Grid.Column>
            </Grid>
        );
    }
}

export default EventDashboard;