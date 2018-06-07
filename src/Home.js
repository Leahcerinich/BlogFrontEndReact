import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        // using the filter method because I only want to retrieving key, title and image. 

        axios.get('http://localhost:8080/blogs')
            .then(response => {
                // const newArray = response.data.map((elem) => {
                //     return {
                //         key: Date.now(),
                //         text: elem.title,
                //     image: elem.body,
                //         body: elem.image
                //     };
                // });

                const newArray = [];
                for (let i = 0; i < response.data.length; i++) {

                    newArray.push({
                        key: Date.now(),
                        text: response.data[i].title,
                        image: response.data[i].image

                    });
                };
                //console.log('newArray', newArray);
                this.setState(() => {
                    return {
                        items: newArray
                    };
                });
            });
    }
    render() {
        const newArray = [];
        const items = this.state.items
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            newArray.push(
                <div className="blog-entry">
                   <p> {item.text}</p>
                    <img src={item.image} width="100" height="100" />
                </div>
            )


        }
        console.log(`Blogpost=${newArray}`)
        return (
            <div className="listofBlogs">
                    <h3> Click on Blogs to view </h3>
                <ul> {newArray}
                </ul>

            </div>
        );
    }
}

export default Home;