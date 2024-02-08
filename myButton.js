import React from 'react'
import { useDispatch} from 'react-redux';
import {increment , decrement} from '../actions'

const MyButton = ()=>{
    let dispatch = useDispatch();
    return (<div>
        <button onClick={()=>dispatch(increment(1))}>Increase counter</button><br></br>
        <button onClick={()=>dispatch(decrement(1))}>Decrease counter</button>
        </div>
    );
}

export default MyButton;
