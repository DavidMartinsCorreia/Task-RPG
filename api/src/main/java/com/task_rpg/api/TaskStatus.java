package com.task_rpg.api;

public enum TaskStatus {
    PENDING("Pendente"),
    IN_PROGRESS("Pendente"),
    COMPLETED("Pendente"),
    CANCELLED("Pendente");

    private String displayName;

    private TaskStatus(String displayName) {
        this.displayName = displayName;
    }


    public String getDisplayName() {
        return displayName;
    }




}

