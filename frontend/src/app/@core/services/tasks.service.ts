import { Injectable } from '@angular/core';
import { CredentialsService } from '@core/services/credentials.service';
import { CreateTaskInput, Task, TaskState } from '@core/models/task.model';
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private uid: string;
  private tasksCollection: AngularFirestoreCollection<Task>;

  constructor(private credentialsService: CredentialsService,
              private afs: AngularFirestore) {
    this.uid = this.credentialsService.credentials.uid;
    this.tasksCollection = this.col();
  }

  col(queryFn?: QueryFn) {
    const compose = (...fns) => (arg) => fns.reduceRight((acc, fn) => (fn ? fn(acc) : acc), arg);
    return this.afs.collection<Task>(`/tasks`, compose(
      ref => ref.where('user_id', '==', this.uid),
      queryFn
    ));
  }

  getAllTask(): Observable<Task[]> {
    return this.tasksCollection.snapshotChanges()
      .pipe(map(data => data.map(item => ({id: item.payload.doc.id, ...item.payload.doc.data()} as Task))));
  }

  getTaskById(taskId: string) {
    return this.tasksCollection.valueChanges();
  }

  getUpcomingTasks(): Observable<Task[]> {
    const currentTime = new Date().getTime();
    return this.col(ref => ref
        .where('state', '==', TaskState.NEW)
        .where('due_date', '>=', currentTime)
      ).snapshotChanges()
      .pipe(map(data => data.map(item => ({id: item.payload.doc.id, ...item.payload.doc.data()} as Task))));
  }

  createTask(task: CreateTaskInput): Observable<any> {
    const input = {...task, user_id: this.uid, state: TaskState.NEW} as Task;
    return from(this.tasksCollection.add(input));
  }

  updateTask(task: Partial<Task>): Observable<void> {
    return from(this.tasksCollection.doc<Task>(task.id).update(task));
  }

  makeTaskAsComplete(taskId: string) {
    return from(this.tasksCollection.doc<Task>(taskId).update({state: TaskState.COMPLETE}));
  }

  makeTaskAsOverdue(taskId: string) {
    return from(this.tasksCollection.doc<Task>(taskId).update({state: TaskState.OVERDUE}));
  }
}
