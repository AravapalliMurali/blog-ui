import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Comments(props){
    const [user,setUser] = useState({})
    const [list , setList] = useState({})
    const [commt ,setCommt]  = useState([])
    const {id} = props.match.params

   

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
            .then((response)=>{
                console.log('res:',response.data)
                setList(response.data[0])
            })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                setCommt(response.data)
            })
    },[id])

    useEffect(()=>{
        if(list.userId){
        axios.get(`https://jsonplaceholder.typicode.com/users/${list.userId}`)
            .then((response)=>{
                setUser(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    },[list.userId])

    return(
        <div>
            <h2>USERNAME:{user.name}</h2>
            <h2>TITLE:{list.title}</h2>
            <h2>BODY:{list.body}</h2>
            <hr></hr>
            <h2>COMMENTS</h2>
            <ul>
                {commt.map(ele=>{
                    return(
                        <li key={ele.id}>{ele.body}</li>
                    )
                })}
            </ul>
            <hr></hr>
            
            <Link to ={`/users/${list.userId}`}>More posts of author:{user.name}</Link>
        </div>
    )
}
