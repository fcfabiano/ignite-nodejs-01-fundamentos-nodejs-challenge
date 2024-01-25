import crypto from "node:crypto";

export class Task {
  id = null;
  title = "";
  description = "";
  completed_at = null;
  created_at = null;
  updated_at = null;

  constructor(task) {
    this.title = task.title;
    this.description = task.description;
    this.completed_at = null;
    this.created_at = new Date();
    this.updated_at = new Date();

    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
