import React, { Component } from 'react';
import { api } from './api';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        // using the filter method because I only want to retrieving key, title and image. 

        api.get('/blogs')
            .then(response => {
                const newArray = [];
                for (let i = 0; i < response.data.length; i++) {

                    newArray.push({
                        key: Date.now(),
                        text: response.data[i].title,
                        author: response.data[i].author,
                        image: response.data[i].image

                    });
                };
                console.log('newArray', newArray);
                this.setState(() => {
                    return {
                        items: newArray
                    };
                });
            });
    }
    blogListItems() {
        const blogListItems = [];
        const items = this.state.items
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            blogListItems.push(
                <div className="blog-entry">
                    <h4> {item.text}</h4>
                    <p> {item.author}</p>
                    <img src={item.image} width="100" height="100" />
                </div>
            )
        }

        return blogListItems;
    }

    render() {

        return (
            <div className="listofBlogs">
                <ul> {this.blogListItems()}
                </ul>

            </div>
        );
    }
}

export default Home;