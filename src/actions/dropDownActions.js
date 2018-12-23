export function toggleList() {
    return {type: 'TOGGLE_LIST'};
}

export function increaseCount(type) {
    return {type: 'INCREASE_COUNT', payload: type};
}

export function decreaseCount(type) {
    return {type: 'DECREASE_COUNT', payload: type};
}