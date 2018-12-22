export function toggleList() {
    return {type: 'TOGGLE_LIST'};
}

export function updateItemCount(count, type) {
    return {type: 'UPDATE_ITEM_COUNT', payload: {count,type}};
}