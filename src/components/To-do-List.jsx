import React, { useState } from "react"
import './To-do-List.css'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function inputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if(newTask.trim() !== ""){
            setTasks(t =>[...t, newTask]);
            setNewTask("");
            document.getElementById('empty-list').style = "opacity: 0; position: absolute;"
        }
    }

    function deleteTask(index) {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updated = [...tasks];
            [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
            setTasks(updated);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const updated = [...tasks];
            [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
            setTasks(updated);
        }
    }

    // function checkIf() {
    //     var checkboxCheck = document.getElementById('checkbox');
    //     if (checkboxCheck.checked === true) {
    //         tasks.style.textDecoration = "line-through"
    //     } else {
    //         tasks.style.textDecoration = "none"
    //     }
    // }

    return (
        <section className="app-container">
            <h1>To-do List</h1>
            <div className="container">
                <input type="text" 
                placeholder="Enter a task..." 
                value={newTask} 
                onChange={inputChange}
                className="new-task-input" />
                <button className="add-task-button"
                onClick={addTask}>
                    Add
                </button>
                <div className="to-do-tasks">
                <p id="empty-list">There's nothing here... yet!</p>
                <ol>
                    {tasks.map((task, index) =>
                        <div className="div-tasks">
                            <li key={index}>
                                <input type="checkbox" name="checkbox" id="checkbox"/>
                                <span className="text-task" id="text-id">{task}</span>
                                <button className="delete-button" onClick={() => deleteTask(index)}>
                                    Delete
                                </button>
                                <button className="move-up-button" onClick={() => moveTaskUp(index)}>
                                    Up
                                </button>
                                <button className="move-down-button" onClick={() => moveTaskDown(index)}>
                                    Down
                                </button>
                            </li>
                        </div>
                    )}
                </ol>
                </div>
            </div>
        </section>
    );
}

export default ToDoList;