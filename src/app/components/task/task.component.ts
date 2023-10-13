import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask, markTaskAsCompleted, removeTask } from 'src/app/store/task.store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  store = inject(Store);
  @Input() task!: ITask;


  markAsCompleted(id: string): void{
    this.store.dispatch(markTaskAsCompleted({ id }))
  }

  removeTask(id: string): void{
    this.store.dispatch(removeTask({ id }))

  }
}
