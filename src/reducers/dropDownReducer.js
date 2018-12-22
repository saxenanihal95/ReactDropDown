const initState = {
    listItems: [
        {type: 'Adult', yearRange: '+12 years', count: 1, displayText: '1 Adult'},
        {type: 'Child', yearRange: '2-11 years', count: 1, displayText: '1 Child'}, 
        {type: 'Baby', yearRange: '>2 years', count: 1, displayText: '1 Baby'}
    ],
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