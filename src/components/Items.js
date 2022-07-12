import React from 'react'

import {  Link } from 'react-router-dom';

export default function Items(props) {

const ModifyCheckbox=()=>{
  
console.log(props.txt)
}
 console.log(props.update)
  return (
    <div>
        <li className="border d-flex justify-content-between align-items-center  p-2 m-2">
          
          <Link to={{pathname: '/modifier',search:""}}>
            
          <input className="form-check-input" type="checkbox" onClick={ModifyCheckbox}  to="/modifier"/>
          </Link>
        
        
             <div className="p-3">{props.txt}</div>
            
             <button className='btn btn-danger'
             onClick={()=>props.deleF(props.id)}
             > supprimer</button>
        </li>
    </div>
  )
}
