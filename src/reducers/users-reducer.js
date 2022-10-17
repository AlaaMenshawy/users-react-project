export function ListUsers(state = null , action){
    if(action.type == 'listUsers'){
        return action.payload;
    }
    return state;
}

