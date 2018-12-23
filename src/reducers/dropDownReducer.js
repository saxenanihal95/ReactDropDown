const initState = {
    itemList: {
        'Adult':  {yearRange: '+12 years', count: 1, removeDisabled: true, addDisabled: false}, 
        'Child': {yearRange: '2-11 years', count: 0, removeDisabled: true, addDisabled: false}, 
        'Baby': {yearRange: '>2 years', count: 0, removeDisabled: true, addDisabled: false},
    },
    listOpen: false,
    displayText: '1 Adult'
}

    function getUserCounts(itemList) {
        const adultCount = itemList['Adult'].count;
        const childCount = itemList['Child'].count;
        const babyCount = itemList['Baby'].count;
        const totalCount = adultCount + childCount + babyCount;

        return { adultCount, childCount, babyCount, totalCount };
    }

    function enableAll(itemList) {
        itemList['Adult'].removeDisabled = false;
        itemList['Child'].removeDisabled = false;
        itemList['Baby'].removeDisabled = false;
        itemList['Adult'].addDisabled = false;
        itemList['Child'].addDisabled = false;
        itemList['Baby'].addDisabled = false;
        return itemList;
    }

    function removeDisabledCheck(adultCount, childCount, babyCount, itemList) {
        if(adultCount === 1) {
            itemList['Adult'].removeDisabled = true;
        }

        if(childCount === 0 ) {
            itemList['Child'].removeDisabled = true;
        }

        if(babyCount === 0) {
            itemList['Baby'].removeDisabled = true;
        }
        return itemList;
    }

    function addDisabledCheck(childCount, babyCount, totalCount, itemList) {
        if(totalCount>8) {
            itemList['Adult'].addDisabled = true;
            itemList['Child'].addDisabled = true;
            itemList['Baby'].addDisabled = true;
        }

        if(babyCount>=1 && childCount>=4) {
            itemList['Child'].addDisabled = true;
        }

        if(babyCount===1 && childCount<=1) {
            itemList['Baby'].addDisabled = true;
        }

        if(babyCount===0 && childCount>=2 ) {
            itemList['Baby'].addDisabled = true;
        }
        return itemList;
    }

    function updatedItemList(type, operationType, itemList) {
        if(operationType ==='increaseCount') {
            itemList[type].count = itemList[type].count + 1;
        }else if(operationType === 'decreaseCount') {
            itemList[type].count = itemList[type].count - 1;
        } 

        const  { adultCount, childCount, babyCount, totalCount } = getUserCounts(itemList);

        itemList = enableAll(itemList);

        itemList = removeDisabledCheck(adultCount, childCount, babyCount, itemList);

        itemList = addDisabledCheck(childCount, babyCount, totalCount, itemList);

        return itemList;
    }

function updateDisplayText(itemList) {
    const  { adultCount, childCount, babyCount } = getUserCounts(itemList);
    const adultText = adultCount === 1 ? '1 Adult' : `${adultCount} Adults`;
    const childText = childCount > 0 ? childCount === 1 ? '1 Child' : `${childCount} Children` : '';
    const babyText = babyCount > 0 ? babyCount === 1 ? '1 Baby' : `${babyCount} Babies` : '';

    const displayText = [adultText, childText, babyText].filter(t=>t).join(', ');
    return displayText;
}


const dropDownReducer = (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_LIST':
            return {...state, listOpen: !state.listOpen};
        case 'INCREASE_COUNT':
            let itemList = updatedItemList(action.payload, 'increaseCount', state.itemList);
            let displayText = updateDisplayText(itemList);
            return {
                ...state,
                itemList,
                displayText
            }
        case 'DECREASE_COUNT': 
            itemList = updatedItemList(action.payload, 'decreaseCount', state.itemList);
            displayText = updateDisplayText(itemList);
            return {
                ...state,
                itemList,
                displayText
            }
        default:
            return state;
    }    
}
export default dropDownReducer;