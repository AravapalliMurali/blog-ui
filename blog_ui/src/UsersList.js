import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function UserList(props){
    const [users ,setUsers] = useState([])
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                const result = response.data
                setUsers(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return(
        <div>
            <h2>Listing Users - {users.length}</h2>
            <ul>
                {users.map(ele=>{
                    return(
                        <li key={ele.id}><Link to ={`/users/${ele.id}`}>{ele.name}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}