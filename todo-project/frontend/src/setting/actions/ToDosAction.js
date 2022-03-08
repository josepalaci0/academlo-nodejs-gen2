import Actiontypes from "../contants/actiontypes";

export const setPerson = (person) => {
  return {
    type: Actiontypes.SET_PERSON,
    payload: person,
  };
};

export const setUsers = (users) => {
  return {
    type: Actiontypes.SET_USERS,
    payload: users,
  };
};
