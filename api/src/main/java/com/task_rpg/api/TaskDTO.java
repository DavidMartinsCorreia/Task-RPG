package com.task_rpg.api;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

public class TaskDTO {

    private int id;

    @NotBlank(message = "Titulo é obrigatório")
    @Size(max = 100, message = "Categoria deve ter no maximo 100 caracteres")
    private String titulo;

    @Size(max = 500, message = "Descrição deve ter no maximo 500 caracteres")
    private String descricao;

    private TaskStatus status;
    private TaskPriority prioridade;
    private LocalDateTime datacr;
    private LocalDateTime dataup;
    private LocalDateTime datalim;


    @Size(max = 100, message = "descrição deve ter no maximo 100 caracteres")
    private String categoria;

    public TaskDTO(String titulo, LocalDateTime datacr, LocalDateTime dataup, TaskStatus status) {
        this.titulo = titulo;
        this.prioridade = TaskPriority.MEDIUM; // valor padrão
        this.dataup = dataup;
        this.datacr = datacr;
        this.status = status;
    }
    public TaskDTO() {}


    public TaskDTO(String titulo, String descricao, TaskPriority prioridade, TaskStatus status, LocalDateTime datacr, LocalDateTime dataup, String categoria) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.status = status;
        this.categoria = categoria;
        this.datacr = datacr;
        this.dataup = dataup;

    }


    public String getTitulo() {
        return titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public TaskPriority getPrioridade() {
        return prioridade;
    }

    public LocalDateTime getDatalim() {
        return datalim;
    }

    public String getCategoria() {
        return categoria;
    }

    public LocalDateTime getDatacr() {
        return datacr;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public void setPrioridade(TaskPriority prioridade) {
        this.prioridade = prioridade;
    }

    public void setDatacr(LocalDateTime datacr) {
        this.datacr = datacr;
    }

    public void setDataup(LocalDateTime dataup) {
        this.dataup = dataup;
    }

    public void setDatalim(LocalDateTime datalim) {
        this.datalim = datalim;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}