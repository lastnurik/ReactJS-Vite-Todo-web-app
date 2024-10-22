import React from 'react'


function Task(props) {
  return (
    <div className="task">
        <label>{props.name}</label>
        <div>
            {!props.isFinished && <button onClick={props.onCl}>{props.btnName}</button>}
            {!props.isFinished && <button onClick={props.onDel}>Delete</button> }
        </div>
        
    </div>
  )
}

export default Task