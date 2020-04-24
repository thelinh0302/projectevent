import React, { Fragment } from 'react';
import { Segment, Item, Label } from 'semantic-ui-react'
const EventDetailSidebar = ({ attendees }) => {
    const isHost = true
    return (
        <Fragment>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'}
            </Segment>
            <Segment attached>
                <Item.Group divided>
                    {attendees && attendees.map(attende => (
                        <Item key={attende.id} style={{ position: 'relative' }}>
                            {isHost &&
                                <Label
                                    style={{ position: 'absolute' }}
                                    color='orange'
                                    ribbon='right'
                                >
                                    Host
                    </Label>}
                            <Item.Image size='tiny' src={attende.photoURL} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header as='h3'> {attende.name} </Item.Header>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Segment>
        </Fragment>
    );
}

export default EventDetailSidebar;
