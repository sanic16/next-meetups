import LogisticsItem from './logistics-item'

import { BsCalendarDate } from 'react-icons/bs'
import { FaLocationPin } from 'react-icons/fa6'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import classes from './event-logistics.module.css'

import React from 'react'
import Image from 'next/image'

type Props = {
    date: string,
    address: string,
    image: string,
    imageAlt: string
}

const EventLogistics = (props: Props) => {

    const humanReadableDate = new Date(props.date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const addressText = props.address.replace(', ', '\n')

  return (
    <section className={classes.logistics}>
        <div className={classes.image}>
            <Image src={`/${props.image}`} alt={props.imageAlt} width='160' height='160'/>
        </div>
        <ul className={classes.list}>
            <LogisticsItem icon={BsCalendarDate}>
                <time>{humanReadableDate}</time>
            </LogisticsItem>
            <LogisticsItem icon={FaLocationPin}>
                <address>{addressText}</address>
            </LogisticsItem>
        </ul>
    </section>
  )
}

export default EventLogistics