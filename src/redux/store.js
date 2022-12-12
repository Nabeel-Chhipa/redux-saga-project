import { createStore } from 'redux'

const dummyReducer = () => {
    return 1000
}

const store = createStore(dummyReducer)

export default store