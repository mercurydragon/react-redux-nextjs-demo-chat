import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { chatReducer as chat } from '../pages/ActionReducers.js'

import thunk from 'redux-thunk'
import multi from 'redux-multi'
import {createLogger} from 'redux-logger'

export default function configureStore (preloadedState, historyType) {
  const rootReducerObj = {
    chat
  }
  const rootReducer = combineReducers(rootReducerObj)

  const store = createStore(
    rootReducer,
    preloadedState || {},
    compose(
      applyMiddleware(
        routerMiddleware(historyType),
        multi,
        thunk,
        createLogger()
      ),
    )
  )
  return store
}
