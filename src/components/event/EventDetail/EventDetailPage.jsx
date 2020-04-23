import React from 'react';
import EventDetailHeader from './EventDetailHeader'
import EventDetailInfo from './EventDetailInfo'
import EventDetailChat from './EventDetailChat'
import EventDetailSidebar from './EventDetailSidebar'
import { Grid } from 'semantic-ui-react';
//function component
const EventDetailPage = () => {
    return (
        <Grid>
            <Grid.Column mobile={16} tablet={8} computer={10}>
                <EventDetailHeader />
                <EventDetailInfo />
                <EventDetailChat />
            </Grid.Column>
            <Grid.Column mobile={10} computer={6}>
                <EventDetailSidebar />
            </Grid.Column>
        </Grid>
    );
}

export default EventDetailPage;
