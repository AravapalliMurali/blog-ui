import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Posts(props){
    const [posts , setPosts] = useState([])


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const result = response.data
                setPosts(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    })
    return(
       <div>
           <h1>Posts component</h1>
           <h2>Total Posts - {posts.length}</h2>
           <ul>
               {
                   posts.map(ele =>{
                       return(
                           <li key ={ele.id}><Link to ={`/posts/${ele.id}`}>{ele.title}</Link></li>
                       )
                   })
               }
           </ul>
       </div>
    )
}