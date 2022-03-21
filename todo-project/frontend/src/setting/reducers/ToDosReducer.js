import Actiontypes  from '../contants/actiontypes'

const DefaultState = {
    ToDos:[]
};
export const PersonReducer = (state = DefaultState,{type,payload}) => {
    switch (type) {
        case Actiontypes.SET_PERSON:
            return {...state, person: payload};
        default:
            return state;
    }
};

export const UsersReducer = (state = DefaultState,{type,payload}) => {
    switch (type) {
        case Actiontypes.SET_PERSON:
            return {...state, users: payload};
        default:
            return state;
    }
};




 