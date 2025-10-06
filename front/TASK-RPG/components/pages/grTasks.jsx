import React, { useState, useEffect } from 'react';
import { taskService } from '../../hooks/tasksService';
import "../../styles/grTasks.css"

const GrTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await taskService.getAllTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await taskService.updateTaskStatus(taskId, newStatus);
      fetchTasks();
    } catch (err) {
      console.error('Erro ao atualizar status', err);
    }
  };


  const handleDelete = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);

      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (err) {
      console.error('Erro ao eliminar task', err);
    }
  };

  if (loading) return <div className='test'>A carregar...</div>;
  if (error) return <div className='test'>{error}</div>;

  return (
    <div className='test'>
      <h2 className='Titulo-MT'>Minhas Tasks</h2>
      
      {tasks.length === 0 ? (
        <p>Não há tasks</p>
      ) : (
        <div className="scroll-box">
        <ul className='lista'>
          {tasks.map(task => (
           <div className='Show-Task'>
           
              <h1>{task.title}</h1>
              <h3>{task.category}</h3>
                         
            <div className='Button-CE'>
              <button className='Button-C' onClick={() => handleStatusChange(task.id, 'COMPLETED')}>
                Completar
              </button>
              <button className='Button-E' onClick={() => handleDelete(task.id)}>
                Eliminar
              </button>
            </div>
         
            </div>
          ))}
        </ul>
        </div>
      )}

      
    </div>
  );
};

export default GrTasks;