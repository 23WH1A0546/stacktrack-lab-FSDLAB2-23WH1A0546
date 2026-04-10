import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// You can use BASE_URL if you created it
const BASE_URL = "http://localhost:5000/api";

function QuestionComponent() {
  // ✅ State
  const [tasks, setTasks] = useState([]);

  // ✅ Navigation
  const navigate = useNavigate();

  // ✅ Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${BASE_URL}/tasks`);
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // ✅ Delete handler
  const handleDelete = async (id) => {
    try {
      await fetch(`${BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
      });

      // ✅ Update UI immediately
      setTasks((prev) => prev.filter((task) => task.id !== id));

      // ✅ Redirect
      navigate('/tasks');
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}

              <button onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuestionComponent;