import classes from './event-summary.module.css'

type Props = {
    title: string
}

const EventSummary = (props: Props) => {
  return (
    <section className={classes.summary}>
        <h1>{props.title}</h1>
    </section>
  )
}

export default EventSummary