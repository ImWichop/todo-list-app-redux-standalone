import { ActionReducerMap } from "@ngrx/store";
import { ITask, tasksReducer } from "./task.store";

export interface AppState{
  tasks: ITask[]
}

export const appReducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer
}