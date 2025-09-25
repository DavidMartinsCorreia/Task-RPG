package com.task_rpg.api;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TaskRepositorio extends JpaRepository<Task, Integer> {
    List<Task> findAllByStatus(String status);



    @Query("SELECT t " +
            "FROM Task t " +
            "WHERE DATE(t.datalim) = DATE(:date)"
    )
    List<Task> findByDueDate(@Param("date") LocalDateTime date);



    @Query("SELECT t FROM Task t ORDER BY t.datalim ASC")
    List<Task> findAllOrderByDueDateAsc();

    //ver melhor!!!
    @Query("SELECT t FROM Task t ORDER BY " +
            "CASE t.prioridade " +
            "WHEN 'URGENT' THEN 1 " +
            "WHEN 'HIGH' THEN 2 " +
            "WHEN 'MEDIUM' THEN 3 " +
            "WHEN 'LOW' THEN 4 " +
            "END, t.datalim ASC NULLS LAST")
    List<Task> findAllOrderedByPriorityAndDueDate();
}
