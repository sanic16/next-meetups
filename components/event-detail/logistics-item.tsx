import classes from './logistics-item.module.css'

import React from 'react'

type Props = {
    icon: string,
    children: React.ReactNode
}

const LogisticsItem = (props: Props) => {

  return (
    <li className={classes.item}>
        <span className={classes.icon}>
            {<props.icon />}
        </span>
        <span className={classes.content}>
            {props.children}
        </span>
    </li>
  )
}

export default LogisticsItem