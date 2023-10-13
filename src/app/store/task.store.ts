import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { v4 as uuidv4 } from 'uuid';

export interface ITask{
  id: string;
  title: string;
  isCompleted: boolean;
}

const initialState: ITask[] = [
  {
    id: uuidv4(),
    title: 'Clean up my room',
    isCompleted: false
  }
]

export const addTask = createAction('[TASK] addTask', props<{ title: string }>())
export const markTaskAsCompleted = createAction('[TASK] markTaskAsCompleted', props<{ id: string }>())
export const removeTask = createAction('[TASK] removeTask', props<{ id: string }>())
export const removeAllTasks = createAction('[TASK] removeAllTasks')
export const resetAllTasks = createAction('[TASK] resetAllTasks')

export const tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { title }) => ([...state, { title , isCompleted: false, id: uuidv4()}])),
  on(markTaskAsCompleted, (state, { id }) => (state.map((task) => {
    if(task.id === id){
      return {
        ...task,
        isCompleted: !task.isCompleted
      }
    }

    return task
  }))),
  on(removeTask, (state, { id }) => (state.filter((task) => task.id !== id))),
  on(removeAllTasks, (state) => state.filter((task) => !task.isCompleted)),
  on(resetAllTasks, (state) => state.map((task) => ({...task, isCompleted: false})))
)

const selectTasksFeature = createFeatureSelector<ITask[]>('tasks')

export const selectTaks = createSelector(
  selectTasksFeature,
  (state: ITask[]) => state
)