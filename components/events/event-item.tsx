import React from 'react'
import classes from './event-item.module.css'
import Button from '../ui/button'

import { BsCalendarDate } from 'react-icons/bs'
import { FaLocationPin } from 'react-icons/fa6'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

type Props = {
    id: string,
    title: string, 
    location: string,
    date: string,
    image: string,
    
}

const EventItem = (props: Props) => {

    const humanReadableDate = new Date(props.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric' 
    })

    const formatedAddress = props.location.replace(', ', '\n')
    const exploreLink = `/events/${props.id}`
  return (
    <li className={classes.item}>
        <img src={`/${props.image}`} alt={props.title} />
        <div className={classes.content}>
            <div>
                <h2>{props.title}</h2>
                <div className={classes.date}>
                    <BsCalendarDate />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <FaLocationPin />
                    <address>{formatedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span> 
                    <span className={classes.icon}><BsFillArrowRightCircleFill /></span> 
                </Button>
            </div>
        </div>
    </li>
  )
}

export default EventItem