import {createStore} from 'redux'

const store = createStore((state = { count:0 }, action)=>{
    
    switch(action.type){
        case 'INCREMENT':
            
            return{
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
                return{
                count: state.count - action.decrementBy
            }
        case 'SET':
                return{
                count: action.count

            }
        case 'RESET':
            return{
                count: 0
            }
        default:
            return state
    }

   
}) 

const incrementCount = ({incrementBy = 1} = {}) =>{
    return{
        type: 'INCREMENT',
        incrementBy
        }
    
}
const decrementCount = ({decrementBy = 1} = {}) => {
    return{
        type: 'DECREMENT',
        decrementBy
    }
}

const setCount = ({count} = {}) => {
    return{
        type: 'SET',
        count
    }
}
const resetCount = ()=>{
    return{
        type: 'RESET',
    }
}

store.subscribe(()=>{
 console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount({incrementBy: 455}))
store.dispatch(incrementCount())

store.dispatch( decrementCount({decrementBy: 400} ) )

store.dispatch(decrementCount())

store.dispatch(setCount({count:100}))

store.dispatch(resetCount())
