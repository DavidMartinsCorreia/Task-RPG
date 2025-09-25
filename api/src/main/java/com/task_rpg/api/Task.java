package com.task_rpg.api;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 100)
    private String titulo;

    @Column(length = 500)
    private String descricao;


    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TaskStatus status = TaskStatus.PENDING;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TaskPriority prioridade = TaskPriority.MEDIUM;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime datecr;

    @Column(name = "updated_at")
    private LocalDateTime dataup;

    @Column(name = "due_date", nullable = false)
    private LocalDateTime datalim;

    @Column(length = 100)
    private String categoria;

    // Constructors
    public Task() {
        this.dataup = LocalDateTime.now();
    }

    public Task(String title, String description) {
        this();
        this.titulo = title;
        this.descricao = description;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return titulo;
    }

    public void setTitle(String title) {
        this.titulo = title;
        this.dataup = LocalDateTime.now();
    }

    public String getDescription() {
        return descricao;
    }

    public void setDescription(String description) {
        this.descricao = description;
        this.dataup = LocalDateTime.now();
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
        this.dataup = LocalDateTime.now();
    }

    public TaskPriority getPriority() {
        return prioridade;
    }

    public void setPriority(TaskPriority priority) {
        this.prioridade = priority;
        this.dataup = LocalDateTime.now();
    }

    public LocalDateTime getCreatedAt() {
        return datecr;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.datecr = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return dataup;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.dataup = updatedAt;
    }

    public LocalDateTime getDueDate() {
        return datalim;
    }

    public void setDueDate(LocalDateTime dueDate) {
        this.datalim = dueDate;
        this.dataup = LocalDateTime.now();
    }

    public String getCategory() {
        return categoria;
    }

    public void setCategory(String category) {
        this.categoria = category;
        this.dataup = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.dataup = LocalDateTime.now();
    }
}