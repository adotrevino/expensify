import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'


const store = configureStore()


store.dispatch(addExpense({
    description: 'water',
    note: 'water bill',
    amount: 60000,
    createdAt: 1000
}))
store.dispatch(addExpense({
    description: 'gas',
    note: 'gas bill',
    amount: 5000,
    createdAt: 3000
}))

store.dispatch(addExpense({
    description: 'rent',
    note: 'rent',
    amount: 33300000,
    createdAt: 800000
}))




const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  
)

ReactDOM.render(jsx, document.getElementById('app'))