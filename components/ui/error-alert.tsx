import classes from './error-alert.module.css'


type Props = {
    children: React.ReactNode
}

const ErrorAlert = (props: Props) => {
  return (
    <div className={classes.alert}>
        {props.children}
    </div>
  )
}

export default ErrorAlert