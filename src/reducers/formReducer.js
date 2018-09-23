export const formReducer = (previousState=[],action)=>{
    let newState = [...previousState];
    switch(action.type){
        case'form data':
            newState=action.value;
            break;
        default:
            break;
    }

    return newState;
}