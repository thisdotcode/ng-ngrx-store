import { ActionReducerMap } from '@ngrx/store';
import { myListReducer } from './reducers/my-list.reducer';
import { MyListModel } from './model/my-list.model';

export interface AppState {
  myList: MyListModel;
}

export const reducers: ActionReducerMap<AppState> = {
  myList: myListReducer,
};
