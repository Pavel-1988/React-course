import PropTypes from 'prop-types'
import css from './TaskTitle.module.css'

export const TaskTitle = ({text}) => {
    return <h1 className={css.title}>{text}</h1>
}

TaskTitle.propTypes = {
    text: PropTypes.string.isRequired
}