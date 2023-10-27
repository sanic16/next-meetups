import Link from 'next/link'
import React from 'react'

import classes from './button.module.css'

type Props = {
    link?: string,
    children: React.ReactNode,
    onClick?: () => void
}


const Button = (props: Props) => {

  if(props.link){
    return (
      <Link href={props.link} className={classes.btn}>{props.children}</Link>
    )
  }

  return(
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  )

  
}

export default Button