import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const params = useParams();
    const [employe, setEmploye] = useState({id: 0, lastName: "", firstName: "", tasks: []})
    const [task, setTask] = useState('')
    const [openNewTask, setOpenNewTask] = useState(false)

    const fetchEmploye = useCallback(
        async () => {
           
            const response = await fetch(`http://localhost:5000/api/Employes/${params.id}`, {
              // Adding method type
              method: "GET",
              headers: new Headers({ "Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Headers":"Content-Type"}),
              mode: 'cors',
        
            });
            const data = await response.json();
            
            setEmploye(data)
        },
        [params.id],
      )

    const addTask = useCallback(async(task, id) => {
        await fetch(`http://localhost:5000/api/Tasks`, {
              // Adding method type
              method: "POST",
              headers: new Headers({ "Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Headers":"Content-Type"}),
              mode: 'cors',
              body: JSON.stringify({
                title: task,
                status: "todo",
                employeID: id
              }),
            });

            fetchEmploye()
    })

    const createNewTask = () => {
        addTask(task,employe.id)
        setOpenNewTask(false)
        setTask('')
    }

    const deletTask = async (id) => {
        await fetch(`http://localhost:5000/api/Tasks/${id}`, {
              // Adding method type
              method: "DELETE",
              headers: new Headers({ "Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Headers":"Content-Type"}),
              mode: 'cors',
            });

            fetchEmploye()
    }

    const markAsCompleted = async(task) => { 
        if(task.status == "todo"){
            task.status = "completed"
        }else{
            task.status = "todo"
        }

        await fetch(`http://localhost:5000/api/Tasks/${task.id}`, {
            // Adding method type
            method: "PUT",
            headers: new Headers({ "Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Headers":"Content-Type"}),
            mode: 'cors',
            body: JSON.stringify({
            id: task.id,
              title: task.title,
              status: task.status,
              employeID: employe.id
            }),
          });

          fetchEmploye()

    }
    useEffect(() => {
        fetchEmploye()
    }, [params, fetchEmploye])
  return (
    <div className="page-body">
        <div className="container-fluid">
            <div style={{marginTop: '150px'}}>
            <div className="page-title">
                <div className="row">
                <div className="col-6">
                    <h3>Details de l'employe {employe && employe.lastName}</h3>
                </div>
                <div className="col-6">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html" data-bs-original-title="" title="">                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></a></li>
                    <li className="breadcrumb-item">
                        <Link to="/employe">Employes</Link>
                    </li>
                    <li className="breadcrumb-item active">{employe.lastName} {employe.firstName}</li>
                    </ol>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h5>To-Do</h5>
                    <div className="mark-all-tasks-container"><span className="mark-all-btn move-down" id="mark-all-incomplete" role="button"><span className="btn-label">Mark all as Incomplete</span><span className="action-box"><i className="icon"><i className="icon-check"></i></i></span></span></div>
                  </div>
                  <div className="card-body">
                    <div className="todo">
                      <div className="todo-list-wrapper">
                        <div className="todo-list-container">
                          
                          <div className="todo-list-body">
                            <ul id="todo-list">
                                {employe.tasks.map(task => (
                                    <li className="task">
                                    
                                        <div className="task-container d-flex align-items-center justify-content-between" style={{display: "table",background: "#fff", padding: "10px 0", width: "100%", borderBottom: "1px solid #f4f4f4"}}>
                                        <h4 className="task-label" style={{display: "block", fontSize: "17px",verticalAlign: "middle",color: "#898989",paddingTop: "5px",fontWeight: 300, textDecoration: task.status == "todo" ? "none" : "line-through"}}>{task.title} </h4>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div  style={{width: "30px", height: "30px", cursor: "pointer"}} className="task-action-btn d-flex align-items-center justify-content-center">
                                                    <AiOutlineDelete fontSize="20px" onClick={() => deletTask(task.id)} />
                                                </div>
                                                <div style={{width: "30px", height: "30px", border: task.status == "todo" ? "none": "1px solid green"}}  className=" complete-btn  d-flex align-items-center justify-content-center" title="Mark Complete">
                                                    <AiOutlineCheck fontSize="20px" onClick={() => markAsCompleted(task)} />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                              
                            </ul>
                          </div>
                          <div className="todo-list-footer">
                           {!openNewTask &&  <div className="add-task-btn-wrapper"><span className="add-task-btn">
                                <button className="btn btn-primary" onClick={() => setOpenNewTask(!openNewTask)}><i className="icon-plus"></i> Add new task</button></span></div>}

                            {openNewTask && 
                                <div className="new-task-wrapper w-100">
                                <textarea id="new-task" className="col-md-12 mt-3 mb-3" placeholder="Enter new task here. . ." value={task} onChange={({target}) => setTask(target.value)}></textarea>
                                <span className="btn btn-danger cancel-btn" id="close-task-panel" onClick={() => setOpenNewTask(!openNewTask)}>Close</span>
                                <span className="btn btn-success ms-3 add-new-task-btn" id="add-task" onClick={createNewTask}>Add Task</span>
                                </div>
                            }
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Details