import React, { useState, useEffect} from 'react'
import Task from './Task.jsx'
function Todo() {
    
    const [listCurrent, setListCurrent] = useState(JSON.parse(localStorage.getItem('listCurrent')) || []);
    const [listProcess, setListProcess] = useState(JSON.parse(localStorage.getItem('listProcess')) || []);
    const [listFinished, setListFinished] = useState(JSON.parse(localStorage.getItem('listFinished')) || []);
    const [task, setTask] = useState('');

    // useEffect(() => {
    //     const savedCurrent = localStorage.getItem('listCurrent');
    //     const savedProcess = localStorage.getItem('listProcess');
    //     const savedFinished = localStorage.getItem('listFinished');

    //     console.log(savedCurrent)

    //     setListCurrent(JSON.parse(savedCurrent));
    //     setListProcess(JSON.parse(savedProcess));
    //     setListFinished(JSON.parse(savedFinished));
    // }, []);

    useEffect(() => {
        localStorage.setItem('listCurrent', JSON.stringify(listCurrent));
    }, [listCurrent]);

    useEffect(() => {
        localStorage.setItem('listProcess', JSON.stringify(listProcess));
    }, [listProcess]);

    useEffect(() => {
        localStorage.setItem('listFinished', JSON.stringify(listFinished));
    }, [listFinished]);

    function pushTask() {
        if (task.trim() !== "") {
            if(!listCurrent.includes(task) && !listProcess.includes(task)) {
                setListCurrent(l => [...l, task]);
                setTask('');
            }
            else {
                alert("The task already exists!")
            }
            
        } else {
            alert("The task must not be empty!");
        }
    }


    function clearList() {
        setListCurrent(l => []);
        setListProcess(l => []);
        setListFinished(l => []);
    }

    function doTask(taskName) {
        setListCurrent(l => l.filter((task) => task !== taskName))
        setListProcess(l => [...l, taskName])
    }

    function finishTask(taskName) {
        setListProcess(l => l.filter((task) => task !== taskName))
        setListFinished(l => [...l, taskName])
    }
    function deleteTaskCur(taskName) {
        setListCurrent(l => l.filter((task) => task !== taskName))
    }

    function deleteTaskPr(taskName) {
        setListProcess(l => l.filter((task) => task !== taskName))
    }

    function deleteTaskFin(taskName) {
        setListFinished(l => l.filter((task) => task !== taskName))
    }

    return (
    <div>
        <h1 className="title">To-Do app</h1>
        <div className="taskManager">
            <h2>Add a new task</h2>
            <div className="taskInput">
                <label htmlFor="taskName">Task Name</label>
                <input type="text" value={task} maxLength="35" onChange={(e) => setTask(e.target.value)} />
                <button onClick={pushTask}>Add Task</button>
                <button onClick={clearList}>Clear</button>
            </div>
            
        </div>
        
        <br />
        <div className="taskBar">
            <div className="taskType">
            <h2>Current Tasks:</h2>
                <ul>
                    {listCurrent.map((item, index) => (
                        <Task name={item} onCl={() => doTask(item)} onDel={() => deleteTaskCur(item)} isFinished={false} btnName="Start" />
        //                <li key={index}>{item}</li>
                    ) )}
                </ul>
            </div>
            <div className="taskType">
                <h2>In process:</h2>
                <ul>
                    {listProcess.map((item, index) => (
                        <Task name={item} onCl={() => finishTask(item)} onDel={() => deleteTaskPr(item)} isFinished={false} btnName="Finish"/>
                    ))}
                </ul>
            </div>
            <div className="taskType">
                <h2>Finished Tasks:</h2>
                <ul>
                    {listFinished.map((item, index) => (
                        <Task name={item} onDel={() => deleteTaskFin    (item)} isFinished={true} />
                    ))}
                </ul>
            </div>
        </div>
        
    </div>
    )
}

export default Todo