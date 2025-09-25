package com.task_rpg.api;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ITaskService {
    List<Task> getAllTasks();
    Optional<Task> getTaskById(int id);
    Task createTask(TaskDTO taskDTO);
    Task updateTask(int id, TaskDTO taskDTO);
    void deleteTask(int id);
    List<Task> getTasksByDueDate(LocalDateTime date);
    List<Task> getTasksOrderedByPriority();
    Task updateTaskStatus(int id, TaskStatus status);
}