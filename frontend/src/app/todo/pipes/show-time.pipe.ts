import { Pipe, PipeTransform } from '@angular/core';
import { TaskPriority } from '@app/@core/models/task.model';

@Pipe({
  name: 'showTime'
})
export class ShowTimePipe implements PipeTransform {

  transform(priority: number): string {
    const mappingClass = new Map<TaskPriority, string>([
      [TaskPriority.HIGH, 'bg-red-500'],
      [TaskPriority.MEDIUM, 'bg-yellow-500'],
      [TaskPriority.LOW, 'bg-green-500']
    ]);
    return mappingClass.get(priority);
  }

}
