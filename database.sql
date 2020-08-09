CREATE TABLE tasks (
	"id" SERIAL PRIMARY KEY,
    "task" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL
);

INSERT INTO "tasks" 
	("task","status")
VALUES
	('Go grocery shopping', FALSE);
INSERT INTO "tasks"
	("task","status")
VALUES 
	('Get a haircut', FALSE);