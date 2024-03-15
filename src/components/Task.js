import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggleReminder }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggleReminder(task.id)}>
         <h3>
            {task.text}
            <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer' }} />
         </h3>
         <p>{task.day}</p>
        </div>
    )
}

Task.defaultProps = {
    task: {}
}

Task.propTypes = {
    task: PropTypes.object,
    onToggleReminder: PropTypes.func
}

export default Task
