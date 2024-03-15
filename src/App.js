import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 5th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shoping',
        day: 'Feb 5th at 3:30pm',
        reminder: false
    },
  ])

  const onDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id!== id))
    console.log('delete', id)
  }

  const onToggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id? {...task, reminder:!task.reminder } : task))
    console.log('reminder', id)
  }

  return (
    <div className="container">
      <Header title='Sazal' />
      {
        tasks.length ?
          <Tasks tasks={tasks} onDelete={onDeleteTask} onToggleReminder={onToggleReminder} />
        : 'No available tasks'
      }
    </div>
  );
}

export default App;
