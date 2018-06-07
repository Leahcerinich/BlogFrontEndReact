import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import ViewBlog from "./ViewBlog";


class Main extends Component {
    render () {
        return (
            <HashRouter>
            <div> 
            <h1>Coates Engineering Blog</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/CreateBlog">CreateBlog</NavLink></li>
            <li><NavLink to="/ViewBlog">ViewBlog</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/CreateBlog"component={CreateBlog}/>
          <Route path="/ViewBlog" component={ViewBlog}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;