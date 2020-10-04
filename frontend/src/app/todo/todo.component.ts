import { Component, OnInit } from '@angular/core';
import { CreateTaskInput, Task, TaskPriority } from '@core/models/task.model';
import { TasksService } from '@core/services/tasks.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'ngd-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  tasks$: Observable<Task[]>;
  taskTitle: string;
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks$ = this.tasksService.getUpcomingTasks();
  }

  updateTask(task: Task) {
    this.tasksService.updateTask(task).pipe(
      tap(() => console.log('Success')),
      catchError(() => of())
    ).subscribe();
  }

  createTask() {
    const date = new Date();
    const input: CreateTaskInput = {
      title: this.taskTitle,
      description: '',
      priority: TaskPriority.LOW,
      due_date: date.getTime() + 86400000
    };
    this.tasksService.createTask(input).pipe(
      tap(() => console.log('Success')),
      catchError(() => of())
    ).subscribe();
  }

  makeTaskAsComplete({ id }: Task) {
    this.tasksService.makeTaskAsComplete(id).pipe(
      tap(() => console.log('Success')),
      catchError(() => of())
    ).subscribe();
  }

  makeTaskAsOverdue({ id }: Task) {
    this.tasksService.makeTaskAsOverdue(id).pipe(
      tap(() => console.log('Success')),
      catchError(() => of())
    ).subscribe();
  }

  trackById(item: Task) {
    return item.id;
  }
}
