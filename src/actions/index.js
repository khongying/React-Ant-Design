export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const derement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const loadingStart = () => {
    return {
        type: 'LOADING_START',
        payload: true
    }
}

export const loadingEnd = () => {
    return {
        type: 'LOADING_END',
        payload: false
    }
}

