import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import commentReducer from './reducers/commentReducer'

const combinedReducer = combineReducers({
  comments: commentReducer
})

const store = createStore(combinedReducer, applyMiddleware(thunk))

export default store