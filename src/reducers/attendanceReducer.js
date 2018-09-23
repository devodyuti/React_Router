let initialState=[
    {
        id:'1',
        attendance:'0%'
    },
    {
        id:'2',
        attendance:'0%'
    },
    {
        id:'3',
        attendance:'0%'
    },
    {
        id:'4',
        attendance:'0%'
    },
    {
        id:'5',
        attendance:'0%'
    }
];

export const attendanceReducer = (previousState=initialState,action)=>{
    let newState=[...previousState];
    switch(action.type) {
        case 'attendance':
            newState=action.value
            break;
        default:
            break;
    }
    return newState;
}