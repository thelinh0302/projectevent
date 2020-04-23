import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'
class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: {
                title: '',
                date: '',
                city: '',
                venue: '',
                hosted: ''
            }
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.createEvent(this.state.events)
    }
    onInputChange = (e) => {
        const newEvent = this.state.events
        newEvent[e.target.name] = e.target.value
        this.setState({
            events: newEvent
        })
    }
    render() {
        const { handleCloseFrom } = this.props
        const { events } = this.state
        return (
            <Segment>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input name="title" onChange={this.onInputChange} value={events.title} placeholder="Event title" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input name="date" onChange={this.onInputChange} value={events.date} type="date" placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input name="city" onChange={this.onInputChange} value={events.city} placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input name="venue" onChange={this.onInputChange} value={events.venue} placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input name="hosted" onChange={this.onInputChange} value={events.hosted} placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                      </Button>
                    <Button onClick={handleCloseFrom} type="button">Cancel</Button>
                </Form>
            </Segment>
        );
    }
}

export default EventForm; 