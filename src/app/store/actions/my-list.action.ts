import { Action } from '@ngrx/store';

// Section 1: Enum that has type value for each action.
export enum MyListActions {
  ADD_LIST_ITEM = '[STRING] ADD',
  DELETE_LIST_ITEM = '[STRING] DELETE',
}

// Section 2: Classes that helps to create Action object.
export class AddListItem implements Action {
  readonly type = MyListActions.ADD_LIST_ITEM;
  constructor(public payload: string) {}
}

export class DeleteListItem implements Action {
  readonly type = MyListActions.DELETE_LIST_ITEM;
  constructor(public payload: number) {}
}
/**
 * Section 3: Different types of Action classes mapped to a type variable.
 * Will be used by reducer function
 */
export type MyListActionTypes = AddListItem | DeleteListItem;
