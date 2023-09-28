const storageKey = 'reactviteLocal';

// const data = [
//     {
//         id: 1,
//         name: 'course 1',
//         description: 'desc'
//     },
//     {
//         id: 2,
//         name: 'course 2',
//         description: 'desc'
//     }
// ]

const setItem = (value) => {
    const valueToString = JSON.stringify(value)
    localStorage.setItem(storageKey, valueToString)
}

const getItem = () => {
    const data = localStorage.getItem(storageKey);
    if(data) {
        return JSON.parse(data)
    }
    return null
}

const storageManager = {
    get: getItem,
    set: setItem,
}

export default storageManager;