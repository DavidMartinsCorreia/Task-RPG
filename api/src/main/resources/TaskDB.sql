CREATE TABLE IF NOT EXISTS tasks (
                                     id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                     title VARCHAR(100) NOT NULL,
    description VARCHAR(500),
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    priority VARCHAR(20) NOT NULL DEFAULT 'MEDIUM',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL,
    due_date TIMESTAMP NULL,
    category VARCHAR(100)
    );

CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_priority ON tasks(priority);
CREATE INDEX IF NOT EXISTS idx_tasks_category ON tasks(category);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date);
CREATE INDEX IF NOT EXISTS idx_tasks_created_at ON tasks(created_at);

ALTER TABLE tasks ADD CONSTRAINT chk_status
    CHECK (status IN ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'));

ALTER TABLE tasks ADD CONSTRAINT chk_priority
    CHECK (priority IN ('LOW', 'MEDIUM', 'HIGH', 'URGENT'));