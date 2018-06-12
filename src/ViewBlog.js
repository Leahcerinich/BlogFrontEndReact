import React, { Component } from "react";
import { api } from "./api";


class ViewBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        api.get('/blogs')
            .then(response => {
                console.log('/blogs');

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


        api.delete(`/blogs/${blogid}`, {

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


    blogListItems() {
        const htmlElements = [];
        const items = this.state.items
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            htmlElements.push(
                <li key={i.toString()}>
                    <h2>{item.text}</h2>
                    <img src={item.image} width="200" height="100" />
                    <p>{item.body}</p>
                    <div className="btn btn-danger btn-sm" onClick={(e) => this.handleDelete(e, item.id)}> Delete Blog</div>
                </li>
            )
        }
        return htmlElements;
    }

    render() {
     
        return (
            <div className="allcontent">
                <ul>{this.blogListItems()} </ul>


            </div>


        )
    }
}

export default ViewBlog;