import React from 'react'
import { counterReducer } from './reducers/counterReducer' 
import { useSelector, useDispatch } from 'react-redux'

const store = createStore(reducer)

const App = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state)
  const good = () => {
    dispatch({
      type: 'GOOD'
    })
  }
  const neutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const resetstats = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <button onClick={good}>Good</button> 
      <button onClick={neutral}>Neutral</button> 
      <button onClick={bad}>Bad</button>
      <button onClick={resetstats}>Reset stats</button>
      <div>Good {store.getState().good}</div>
      <div>Neutral {store.getState().ok}</div>
      <div>Bad {store.getState().bad}</div>
    </div>
  )
}

export default App