import api from '../src/api/api'; 

export const taskService = {

  // Buscar todas as tasks
  getAllTasks: async () => {
    const response = await api.get('');
    return response.data;
  },

  // Buscar task por ID
  getTaskById: async (id) => {
    const response = await api.get(`/${id}`);
    return response.data;
  },

  // Criar nova task
  createTask: async (taskDTO) => {
    const response = await api.post('', taskDTO);
    return response.data;
  },

  // Atualizar task
  updateTask: async (id, taskDTO) => {
    const response = await api.put(`/${id}`, taskDTO);
    return response.data;
  },

  // Eliminar task
  deleteTask: async (id) => {
    await api.delete(`/${id}`);
  },

  // Tasks ordenadas por prioridade
  getTasksOrderedByPriority: async () => {
    const response = await api.get('/ordered');
    return response.data;
  },

  // Atualizar status
  updateTaskStatus: async (id, status) => {
    const response = await api.patch(`/${id}/status`, { status });
    return response.data;
  }
};