import React, { useState } from 'react';
import { taskService } from '../hooks/tasksService';
import '../styles/CreateTaskPopup.css'

const CreateTasksPopup = ({ isOpen, onClose, onTaskCreated }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        prioridade: 'MEDIUM',
        status: 'PENDING',
        datalim: '',
        categoria: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const datalimComSegundos = formData.datalim + ':00';

            const taskDTO = {
                ...formData,
                datalim: datalimComSegundos,
                datacr: new Date().toISOString()

            };

            const newTask = await taskService.createTask(taskDTO);

          
            setFormData({
                titulo: '',
                descricao: '',
                prioridade: 'MEDIUM',
                status: 'PENDING',
                datalim: '',
                categoria: ''
            });

            if (onTaskCreated) {
                onTaskCreated(newTask);
            }

            onClose();
        } catch (err) {
            console.error('❌ Erro:', err.response?.data);
            setError(err.response?.data?.message || 'Erro ao criar tarefa');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="popup" onClick={onClose}>
            <div className="pop" onClick={(e) => e.stopPropagation()}>
                <div className='button-close'>
                    <button className="close" onClick={onClose}>×</button>
                </div>

                <h2>Criar Nova Tarefa</h2>

                {error && <div className="error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <label>Título *</label>
                        <input
                            type="text"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleChange}
                            required
                            placeholder="Nome da tarefa"
                        />
                    </div>

                    <div className="form">
                        <label>Descrição</label>
                        <textarea
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Descrição da tarefa"
                        />
                    </div>

                    <div className="form">
                        <label>Prioridade *</label>
                        <select
                            name="prioridade"
                            value={formData.prioridade}
                            onChange={handleChange}
                            required
                        >
                            <option value="LOW">Baixa</option>
                            <option value="MEDIUM">Média</option>
                            <option value="HIGH">Alta</option>
                        </select>
                    </div>

                    <div className="form">
                        <label>Status *</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="PENDING">Pendente</option>
                            <option value="IN_PROGRESS">Em Progresso</option>
                            <option value="COMPLETED">Concluído</option>
                            <option value="CANCELLED">Cancelado</option>
                        </select>
                    </div>

                    <div className="form">
                        <label>Data Limite *</label>
                        <input
                            type="datetime-local"
                            name="datalim"
                            value={formData.datalim}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form">
                        <label>Categoria</label>
                        <input
                            type="text"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            placeholder="Ex: Trabalho, Pessoal..."
                        />
                    </div>

                    <div className="form-actions">
                        <button type="button" onClick={onClose} disabled={loading}>
                            Cancelar
                        </button>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Criando...' : 'Criar Tarefa'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTasksPopup;