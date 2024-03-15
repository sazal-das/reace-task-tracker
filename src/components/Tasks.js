import PropTypes from 'prop-types'
import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggleReminder }) => {
    return (
        <>
         {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggleReminder={onToggleReminder} />
         ))}   
        </>
    )
}

Tasks.defaultProps = {
    tasks: []
}

Tasks.propTypes = {
    tasks: PropTypes.array
}

export default Tasks
