import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { Store } from '@ngrx/store';
import { addTask, removeAllTasks, resetAllTasks, selectTaks } from 'src/app/store/task.store';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  store = inject(Store)
  tasks = this.store.selectSignal(selectTaks)
  formCtrl = new FormControl(null, [Validators.required, Validators.minLength(5)])

  addTask():void{
    this.store.dispatch(addTask({ title: this.formCtrl.value ?? '' }))
    this.formCtrl.setValue(null)
  }

  clearTasks():void {
    this.store.dispatch(removeAllTasks())
  }

  resetTasks(): void{
    this.store.dispatch(resetAllTasks())
  }
}
