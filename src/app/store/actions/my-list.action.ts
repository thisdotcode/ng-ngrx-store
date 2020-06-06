import { Action } from '@ngrx/store';

export enum MyListActions {
  ADD_LIST_ITEM = '[STRING] ADD',
  DELETE_LIST_ITEM = '[STRING] DELETE',
}

export class AddListItem implements Action {
  readonly type = MyListActions.ADD_LIST_ITEM;
  constructor(public payload: string) {}
}

export class DeleteListItem implements Action {
  readonly type = MyListActions.DELETE_LIST_ITEM;
  constructor(public payload: number) {}
}

export type MyListActionTypes = AddListItem | DeleteListItem;
