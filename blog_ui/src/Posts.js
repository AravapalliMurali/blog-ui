import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Posts(props){
    const [posts , setPosts] = useState([])
    const [start , setStart] = useState(0)
    const [end , setEnd] = useState(9)


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

    const pagination = () => {
        return posts.filter((post, i) => {
            return (i >= start && i <= end)
        })
    }

    const handleButton = ()=>{
        setEnd(end + 10)
        setStart(start + 10)
    }
    return(
       <div>
           <h1>Posts component</h1>
           <h2>Total Posts - {posts.length}</h2>
           <ul>
               {
                   pagination().map(ele =>{
                       return(
                           <li key ={ele.id}><Link to ={`/posts/${ele.id}`}>{ele.title}</Link></li>
                       )
                   })
               }
           </ul>
           <button onClick = {handleButton}>Next</button>
       </div>
    )
}