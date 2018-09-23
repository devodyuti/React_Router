

export const storeUser = (previousState = {},action)=>{
    let newState={...previousState};
    switch(action.type){
        case 'userLogin':
            newState = action.value;
            break;
        case 'log out':
            newState = action.value;
            break;
        default:
            break;
    }
    return newState===undefined?null:newState;
}