import React from 'react'
import ReactDOM from 'react-dom'

//import test from '../images/logo.png'

const Test = (props) =>{
    return(
        <div>
            <h1>Hello</h1>
            <p>{props.info}</p>
        </div>
    )
}

const requireAuth = (ReactComponent) =>{
    return(props)=>(
        <div>
            
            {props.isAuth ? <ReactComponent {...props}/>:<p>Please log in</p>}
        </div>
    )
}

const AuthTest = requireAuth(Test)

ReactDOM.render(<AuthTest isAuth={true} info="this is from props"/>, document.getElementById('app'))