import { combineReducers } from "redux";
import { PersonReducer, UsersReducer } from "./ToDosReducer";

export const RootReducer = combineReducers({
  PersonList: PersonReducer,
  UsersList: UsersReducer,
});
export default RootReducer;
