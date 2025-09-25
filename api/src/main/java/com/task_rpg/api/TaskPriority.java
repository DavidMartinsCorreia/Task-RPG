package com.task_rpg.api;

public enum TaskPriority {
    LOW("Baixa"),
    MEDIUM("Media"),
    HIGH("Alta");

    private final String displayName;

    private TaskPriority(String displayName){
        this.displayName = displayName;
    }

    public String getDisplayName(){
        return displayName;
    }

}
