import { MyListActionTypes, MyListActions } from '../actions/my-list.action';
import { MyListModel } from '../model/my-list.model';

const initialState: MyListModel = {
  myList: [],
  showError: false,
};

export function myListReducer(
  state: MyListModel = initialState,
  action: MyListActionTypes
): MyListModel {
  switch (action.type) {
    case MyListActions.ADD_LIST_ITEM:
      const val = action.payload.trim().toLowerCase();
      if (state.myList.indexOf(val) !== -1) {
        return {
          myList: state.myList,
          showError: true,
        };
      } else {
        return {
          myList: [...state.myList, val],
          showError: false,
        };
      }

    case MyListActions.DELETE_LIST_ITEM:
      const newList = state.myList.filter((val, index) => {
        return index !== action.payload;
      });
      return {
        myList: newList,
        showError: false,
      };
    default:
      return state;
  }
}
