import React from 'react'

import {Link} from 'react-router-dom' 



const ExpenseListItem = ({history,push, dispatch, id, description, note, amount, createdAt}) =>{
    return(   
        <div>
            <ul>
                <li>Description: {description}</li>
                <li>Note: {note}</li>
                <li>Amount: {amount}</li>
                <li>Date: {createdAt}</li>
            </ul>
            <Link to={`edit/${id}`}><button>Edit</button></Link>
            
 
        </div>
    )
}


export default ExpenseListItem