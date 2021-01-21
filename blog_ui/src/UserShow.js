import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function UserShow(props){
    const [list , setList] = useState([])
    const [user , setUser] = useState({})
    const {id} = props.match.params
    

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                setUser(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                setList(response.data)
            })
    },[id])

    return(
        <div>
            <h2>USERNAME - {user.name}</h2>
            <h2>Posts Written By User</h2>
            <ul>
                {
                    list.map(ele=>{
                        return(
                            <li key ={ele.id}><Link to ={`/posts/${ele.id}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>

            <Link to ="/users">__back</Link>
        </div>
    )
}