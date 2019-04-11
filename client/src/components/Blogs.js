import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { List, Header, Segment, Button, } from 'semantic-ui-react'
import BlogForm from './BlogForm'

const Blogs = (props) => {
  // version using hooks
  const [blogs, setBlogs] = useState([])
  const [showForm, setShowForm] = useState(false);
  useEffect( () => {
    axios.get("/api/blogs")
      .then( res => setBlogs(res.data))
  }, [])

  const addBlog = (blog) => setBlogs([blog, ...blogs])

  return (
    <>
      <Header as="h1">My Blogs</Header>
      <br/>
      { showForm && <BlogForm add={addBlog} toggleForm={setShowForm} />}
      <Button onClick={() => setShowForm(!showForm)}>
        { showForm ? "Cancel" : " Add a new Blog"}
      </Button>
      <List>
        {blogs.map( blog => (
          <Segment key={blog.id}>
            <List.Header as="h3">
              {blog.title}
            </List.Header>
            <List.Description>
              {blog.body}
            </List.Description>
          </Segment>
        ))}
      </List>
    </>
  )
}

// class Blogs extends React.Component {
//   state = {
//     blogs: []
//   }
//   componentDidMount() {
//     axios.get("/api/blogs")
//       .then( res => this.setState({ blogs: res.data, }))
//   }
//   render() {
//     return (
//       <>
//         <Header as="h1">My Blogs</Header>
//         <br/>
//         <List>
//           {this.state.blogs.map( blog => {
//             <Segment key={blog.id}>
//               <List.Header as="h3">
//                 {blog.title}
//               </List.Header>
//               <List.Description>
//                 {blog.body}
//               </List.Description>
//             </Segment>
//           })}
//         </List>
//       </>
//     )
//   }
// }
export default Blogs;