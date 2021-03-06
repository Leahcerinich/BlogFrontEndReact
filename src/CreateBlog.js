import React, { Component } from 'react';
import { api } from './api';

class CreateBlog extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            author:"",
            image: "",
            body: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

   
    textChanged = (event) => {
        console.log(`${event.target.name} changed`)
        this.setState({
            text: event.target.value
        }) 
    }

    authorChanged = (event) => {
        console.log(`${event.target.name} changed`)
        this.setState({
            author: event.target.value
        })
    }

    imageChanged = (event) => {
        console.log(`${event.target.name} changed`)
        this.setState({
            image: event.target.value
            
        }) 
    }

    bodyChanged = (event) => {
        console.log(`${event.target.name} changed`)
        this.setState({
            body: event.target.value
        }) 
    }
    

    handleSubmit = (e, message) => {
        e.preventDefault()
        console.log(`form submitted`)
        this.formHandler({
            title: this.state.text,
            author: this.state.author,
            image: this.state.image,
            body: this.state.body
        }) 
    }

    formHandler = (formFields) => {
        api.post('/blogs', formFields)
        .then(function(response){
            console.log(response);
        })

        .catch(function(error){
            console.log(error);
        });
    }
   


    render() {

        return (
            <form className='blog-form' onSubmit={this.handleSubmit}>
               <h3> Submit blog </h3> 
               
                <fieldset className='form-group'>
                    <input id='formtext' className='form-input' name='title' type='text'placeholder='title' required onChange={this.textChanged} value={this.state.text} />
                </fieldset>

                <fieldset className='form-group'>
                    <input id='formtext' className='form-input' name='author' type='text'placeholder='author' required onChange={this.authorChanged} value={this.state.author} />
                </fieldset>
    
                <fieldset className='form-group'>
                    
                    <input id='formimage' className='form-input' name='image' type='url'placeholder='image' required onChange={this.imageChanged} value={this.state.image} />
                </fieldset>
                <fieldset className='form-group'>
                    
                    <textarea id='formbody' className='form-input' name='body' type='text' placeholder='text' required onChange={this.bodyChanged} value={this.state.body} />
                </fieldset>
                
                <div className='form-group'>
                    <input id='formButton' className='btn' type='submit' placeholder='Submit blog' />
                </div>
            </form>
        )
    }
}




export default CreateBlog;
