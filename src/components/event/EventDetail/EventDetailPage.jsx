import React from 'react';
import EventDetailHeader from './EventDetailHeader'
import EventDetailInfo from './EventDetailInfo'
import EventDetailChat from './EventDetailChat'
import EventDetailSidebar from './EventDetailSidebar'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
//function component
const EventDetailPage = ({ event }) => {
    return (
        <Grid>
            <Grid.Column mobile={16} tablet={8} computer={10}>
                <EventDetailHeader event={event} />
                <EventDetailInfo event={event} />
                <EventDetailChat />
            </Grid.Column>
            <Grid.Column mobile={10} computer={6}>
                <EventDetailSidebar attendees={event.attendees} />
            </Grid.Column>
        </Grid>
    );
}
const mapStateToProp = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let event = {};
    if (eventId && state.eventReducer.length > 0) {
        event = state.eventReducer.filter(event => event.id === eventId)[0]
    }
    return {
        event
    }
}
export default connect(mapStateToProp, null)(EventDetailPage);
