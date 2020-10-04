import { Observable, of } from 'rxjs';
import { Task } from '@core/models/task.model';

export class MockTasksService {
  getUpcomingTasks(): Observable<Task[]> {
    return of([]);
  }
}
