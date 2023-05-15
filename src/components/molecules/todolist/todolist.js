import { useState } from 'react';
import styles from './todolist.module.css';
import ListItem from '../ListItem/listitem';

export default function TodoList() {
    const [inputData, setInputData] = useState('');
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);
  
    function handleChange(e) {
      if (e.key === 'Enter') {
        setTasks(prevTasks => [...prevTasks, { name: inputData, isComplete: false }]);
        setInputData('');
        setCount(prevCount => prevCount + 1);
      }
    }
  
    function handleDelete(index) {
      setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
      setCount(prevCount => prevCount - 1);
    }
  
    function handleToggleComplete(index) {
      setTasks(prevTasks =>
        prevTasks.map((task, i) => {
          if (i === index) {
            return { ...task, isComplete: !task.isComplete };
          } else {
            return task;
          }
        })
      );
      setCount(prevCount => prevCount - 1);
    }
  
    const pendingCount = tasks.filter(task => !task.isComplete).length;
  
    return (
      <div className={styles.container}>
        <h1>Pending tasks ({pendingCount})</h1>
        <div className={styles.todoItems}>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              task={task.name}
              isComplete={task.isComplete}
              onToggleComplete={() => handleToggleComplete(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
        <input onKeyUp={handleChange} type="text" placeholder="Add a new task" value={inputData} onChange={e => setInputData(e.target.value)} />
      </div>
    );
  }
  