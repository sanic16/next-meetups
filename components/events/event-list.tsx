import React from 'react'
import EventItem from './event-item'
import classes from './event-list.module.css'

type Props = {
    items: {
        id: string,
        title: string,
        description: string,
        location: string,
        date: string,
        image: string,
        isFeatured: boolean
    }[]
}

const EventList = (props: Props) => {
  return (
    <ul className={classes.list}>
        {props.items.map(event => (
            <EventItem
                id={event.id}
                key={event.id}
                date={event.date}
                image={event.image}
                location={event.location}
                title={event.title}
            />

            
        ))}
    </ul>
  )
}

export default EventList