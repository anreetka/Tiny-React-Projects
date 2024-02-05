import React, {useState} from 'react';
import '../App'

const UseState = () => {
    const [count, setCount] = useState(0);  //to set default use state
    return(
        <div className='ui container' style={{marginTop: "20px", justifyContent:"center"}}>
            <h1 className="ui header" style={{textAlign:"center", marginBottom:"2px", fontSize:"50px"}}>TRACK YOUR COUNTER</h1>
            <h2 style={{textAlign: 'center', marginTop: "0px", marginBottom: "40px"}}>Concept: React Hooks - useState()</h2>

            <div className="instructions">
                <p style={{fontSize:"15px", marginLeft: "20%", marginBottom: "30px"}}><b>Read the instructions below:</b><br></br>
                1. <i>Increment</i> increases the value of count by 1.
                <br></br>2. <i>Decrement</i> sets the counter to -1 when Count value is greater than or equal to <i>0</i>.<br></br>
                3. <i>Reset</i> sets count value back to 0.<br></br><br></br>
                <b><i>Let's test it! :) </i></b> <br></br></p>   
            </div>

            <div className="count-func" style={{textAlign:"center"}}>
                <h2 style={{fontSize: "30px", }}>Count:{count}</h2>
                <div className = "ui container">
                    <button className="ui primary button" onClick={()=>setCount(count + 1)}>Increment</button>
                    <button className="ui button decrement" onClick={()=>setCount(count - 1)} disabled={count <= 0}>Decrement</button>
                    <button className="ui button reset" onClick={()=>setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default UseState;