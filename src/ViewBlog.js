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
                        id: elem._id,
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

    handleDelete(event, blogid) {

        event.preventDefault();


        axios.delete(`http://localhost:8080/blogs/${blogid}`, {

        })
        const remainingItems = [];
        for (let i = 0; i < this.state.items.length; i++) {
            const item = this.state.items[i]
            if (item.id !== blogid) {
                remainingItems.push(item)
            }
        }

        this.setState(() => {
            return {
                items: remainingItems
            };
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
                    <div className="btn btn-danger btn-sm" onClick={(e) => this.handleDelete(e, item.id)}> Delete Blog</div>
                </li>
            )
        }

        return (
            <div className="allcontent">
                <ul>{newArray} </ul>


            </div>


        )
    }
}

export default ViewBlog;