import { MyListActionTypes, MyListActions } from '../actions/my-list.action';

// Value of initial state to be present in store
const initialState = [];
/**
 *
 * @param state Current state present in store.
 * @param action Action object recevied from components.
 * @returns Next state, that will be updated to the store.
 */
export function myListReducer(
  state: string[] = initialState,
  action: MyListActionTypes
): string[] {
  switch (action.type) {
    case MyListActions.ADD_LIST_ITEM:
      return [...state, action.payload];
    case MyListActions.DELETE_LIST_ITEM:
      const newState = state.filter((val, index) => {
        return index !== action.payload;
      });
      return newState;
    default:
      return state;
  }
}
