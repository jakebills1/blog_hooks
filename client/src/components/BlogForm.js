import React, {} from 'react';
import axios from 'axios'
import { Form, } from 'semantic-ui-react'
import {useFormInput, } from '../hooks/useFormInput'

const BlogForm = ({ add, toggleForm}) => {
  const title = useFormInput("");
  const body = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogPost = { title: title.value, body: body.value}
    // title refers to the object with an onchange key, and a value key
    axios.post("/api/blogs", blogPost)
      .then( res => {
        add(res.data)
        toggleForm()
      })
  }
  // const handleChange = (e, {name, value, }) => {
  //   this.setState({ [name]: value})
  // }
  // since the title and body are of different state and have a different set* function, it is easier to have multiple handlechange's

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // }
  // const handleBodyChange = (e) => {
  //   setBody(e.target.value);
  // }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          name="title"
          placeholder="Title"
          required
          autoFocus
          // value={title}
          // onChange={handleTitleChange}
          // useFormInput returns an object with a handleChange, and a value
          {...title}
        />
        <Form.Input
          name="body"
          placeholder="Body"
          required
          // value={body}
          // onChange={handleBodyChange}
          {...body}
        />
      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  )
}

// class BlogForm extends React.Component {
//   state = { title: "", body: "", };
  
//   handleChange = (e, {name, value, }) => {
//     this.setState({ [name]: value})
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const blogPost = {...this.state}
//     axios.post("/api/blogs", blogPost)
//       .then( res => {
//         this.props.add(res.data)
//         this.props.toggleForm()
//         this.setState({ title: "", body: "", })
//       })
//   }

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Group widths="equal">
//           <Form.Input
//             name="title"
//             value={this.state.title}
//             placeholder="Title"
//             required
//             autoFocus
//             onChange={this.handleChange}
//           />
//           <Form.Input
//             name="body"
//             value={this.state.body}
//             placeholder="Body"
//             required
//             onChange={this.handleChange}
//           />
//         </Form.Group>
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     )
//   }
// }

export default BlogForm;

