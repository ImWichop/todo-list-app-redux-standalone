import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { Store } from '@ngrx/store';
import { addTask, removeAllTasks, resetAllTasks, selectTaks } from 'src/app/store/task.store';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  store = inject(Store)
  tasks = this.store.selectSignal(selectTaks)


  addTask():void{
    this.store.dispatch(addTask({ title: 'HEYHEY' }))
  }

  clearTasks():void {
    this.store.dispatch(removeAllTasks())
  }

  resetTasks(): void{
    this.store.dispatch(resetAllTasks())
  }
}
