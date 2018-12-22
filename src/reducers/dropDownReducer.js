const initState = {
    adultCount: 1,
    childCount: 1,
    babyCount: 1,
    listOpen: false,
}


const dropDownReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_DROPDOWN_STATE':
            return {...state, ...action.payload};
        default:
            return state;
    }    
}
export default dropDownReducer;