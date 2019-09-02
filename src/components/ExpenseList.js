import React from 'react'
import { connect } from 'react-redux' 
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = (props) => {
    return(
        <div>
            <h1>
                Expense List
            </h1>
            
            {props.expenses.map((obj, idx)=>{
                return(
                    <ExpenseListItem
                        {...obj}
                        key={obj.id}
                    />
                )
            })}

            <p>{props.expenses.length}</p>
         
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)

