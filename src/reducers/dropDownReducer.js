const initState = {
    itemList: [
        {type: 'Adult', yearRange: '+12 years', count: 1, displayText: '1 Adult'},
        {type: 'Child', yearRange: '2-11 years', count: 1, displayText: '1 Child'}, 
        {type: 'Baby', yearRange: '>2 years', count: 1, displayText: '1 Baby'}
    ],
    listOpen: false,
}

function updateDisplayText({count, type}) {
    let updatedDisplayText = '';

    switch(type) {
    case 'Adult' :
        updatedDisplayText = count > 1 ? `${count} Adults` : '1 Adult';
        break;
    case 'Child' :
        updatedDisplayText = count > 1 ? `${count} Children` : '1 Child';
        break;
    case 'Baby' : 
        updatedDisplayText = count > 1 ? `${count} Babies` : '1 Baby';
        break;
    }
    return updatedDisplayText;
}


const dropDownReducer = (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_LIST':
            return {...state, listOpen: !state.listOpen};
        case 'UPDATE_ITEM_COUNT':
            const count = action.payload.count;
            const updatedItemList = state.itemList.map(item => {
                if(item.type === action.payload.type) {
                    const displayText = updateDisplayText(action.payload);
                    return {...item, displayText, count}
                }
                return item;
            });
            return {
                ...state,
                itemList: updatedItemList
            }
        default:
            return state;
    }    
}
export default dropDownReducer;