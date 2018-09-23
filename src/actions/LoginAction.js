
//Mocked Data, in real app we get this data from service calls
const people = [
    {
        Key:"admin123"
    },
    {
        Key:"principle345"
    },
    {
        Key:'faculty'
    },
    {
        Key:'accountant1234'
    },
    {
        Key:'hod1234'
    }
]

export const logUser = user => {
    return dispatch => {
        let userType = people.find(userTypes => user === userTypes.Key);
        if(userType===undefined){
            dispatch({type:'userLogin',value:userType});
        }
        else {
            dispatch({type:'userLogin',value:userType});
        }
    }
}

export const logOutUser = ()=> {
    return {
        type:'log out',
        value:{Key:''}
    }
}