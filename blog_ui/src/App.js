import React from 'react'
import {Route,Link} from 'react-router-dom'
import Home from './Home'
import UserList from './UsersList'
import Posts from './Posts'
import UserShow from './UserShow'
import Comments from './Comments'

export default function App(props){

  return(
    <div>
        <Link to ='/'>Home</Link>|<Link to='/users'>Users</Link>|<Link to ='/posts'>Posts</Link>

        <Route path ="/" component = {Home} exact ={true}/>
        <Route path ="/users" component = {UserList} exact ={true}/>
        <Route path ="/posts" component = {Posts} exact ={true}/>
        <Route path ="/users/:id" component = {UserShow}/>
        <Route path ='/posts/:id' component = {Comments}/>
        
    </div>
  )
}