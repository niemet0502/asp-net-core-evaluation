import React, { useCallback, useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const List = () => {
  const [employe, setEmploye] = useState([])


  const fetchEmployes = useCallback(
    async () => {
       
        const response = await fetch("http://localhost:5000/api/Employes", {
          // Adding method type
          method: "GET",
          headers: new Headers({ "Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Headers":"Content-Type"}),
          mode: 'cors',
    
        });
        const data = await response.json();
    
        setEmploye(data)
    },
    [],
  )
  

  useEffect(() => {
    fetchEmployes()
  
  }, [])
  

  return (
    <div class="page-body">
      <div class="container-fluid">
          <div style={{marginTop: '150px'}}>
          <div class="page-title">
              <div class="row">
                <div class="col-6">
                  <h3>Liste des employes</h3>
                </div>
                <div class="col-6">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html" data-bs-original-title="" title="">                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></a></li>
                    <li class="breadcrumb-item">Form Layout</li>
                    <li class="breadcrumb-item active"> Form Wizard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Zero Configuration</h5>
                   
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="display" id="basic-1" style={{width: "100%", border: "2px"}}>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Prenom</th>
                            <th>Nom</th>
                            <th>Nombre de tache</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {employe.map(e => 
                            <tr>
                              <td>{e.id}</td>
                              <td>{e.lastName}</td>
                              <td>{e.firstName}</td>
                              <td>{e.tasks ? e.tasks.length : 0}</td>
                              <td>
                              <Link to={`/employe/${e.id}`}> <button class="btn btn-primary" type="button" ><AiFillEye /></button></Link>
                             
                              </td>
                            </tr>
                            )}
                          
                          </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default List