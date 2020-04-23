import * as typeEvent from './../constants/EventConstant'
export const createEvent = (event) => {
    return {
        type: typeEvent.CREATE_EVENTS,
        payload: {
            event
        }
    }
}
export const updateEvent = (event) => {
    return {
        type: typeEvent.UPDATE_EVENTS,
        payload: {
            event
        }
    }
}
export const deleteEvent = (eventId) => {
    return {
        type: typeEvent.DELETE_EVENTS,
        payload: {
            eventId
        }
    }
}