import React, { Component } from "react";
import axios from 'axios';

class ViewBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        axios.get('http://localhost:8080/blogs')
            .then(response => {
                const convertedArray = response.data.map((elem) => {
                    return {
                        key: Date.now(),
                        text: elem.title,
                        body: elem.body,
                        image: elem.image
                    };
                });
                console.log('convertedArray', convertedArray);
                this.setState(() => {
                    return {
                        items: convertedArray
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
                <li key={i.toString()}>
                    <h2>{item.text}</h2>
                    <img src={item.image} width="150" height="100" />
                    <p>{item.body}</p>
                </li>
            )
        }

        return (
            <div className="allcontent">
            <h3>View all content </h3>
             <ul>{newArray} </ul>
        
    </div>


        )
    }
}

export default ViewBlog;