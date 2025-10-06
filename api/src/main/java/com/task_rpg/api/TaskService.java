package com.task_rpg.api;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService implements ITaskService {

    @Autowired
    private TaskRepositorio taskRepository;

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Optional<Task> getTaskById(int id) {
        return taskRepository.findById(id);
    }

    @Override
    public Task createTask(TaskDTO taskDTO) {
        Task task = new Task();
        task.setTitle(taskDTO.getTitulo());
        task.setDescription(taskDTO.getDescricao());
        task.setStatus(taskDTO.getStatus() != null ? taskDTO.getStatus() : TaskStatus.PENDING);
        task.setPriority(taskDTO.getPrioridade() != null ? taskDTO.getPrioridade() : TaskPriority.MEDIUM);
        task.setDueDate(taskDTO.getDatalim());
        task.setCategory(taskDTO.getCategoria());
        task.setCreatedAt(taskDTO.getDatacr());
        return taskRepository.save(task);
    }

    @Override
    public Task updateTask(int id, TaskDTO taskDTO) {
        return taskRepository.findById(id)
                .map(task -> {
                    task.setTitle(taskDTO.getTitulo());
                    task.setDescription(taskDTO.getDescricao());
                    if (taskDTO.getStatus() != null) {
                        task.setStatus(taskDTO.getStatus());
                    }
                    if (taskDTO.getPrioridade() != null) {
                        task.setPriority(taskDTO.getPrioridade());
                    }
                    task.setDueDate(taskDTO.getDatalim());
                    task.setCategory(taskDTO.getCategoria());
                    return taskRepository.save(task);
                })
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada com ID: " + id));
    }

    @Override
    public void deleteTask(int id) {
        if (!taskRepository.existsById(id)) {
            throw new RuntimeException("Tarefa não encontrada com ID: " + id);
        }
        taskRepository.deleteById(id);
    }


    @Override
    public List<Task> getTasksByDueDate(LocalDateTime date) {
        return taskRepository.findByDueDate(date);
    }

    @Override
    public List<Task> getTasksOrderedByPriority() {
        return taskRepository.findAllOrderedByPriorityAndDueDate();
    }


    @Override
    public Task updateTaskStatus(int id, TaskStatus status) {
        return taskRepository.findById(id)
                .map(task -> {
                    task.setStatus(status);
                    return taskRepository.save(task);
                })
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada com ID: " + id));
    }
}