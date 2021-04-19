import React from "react";
import Home from "./components/Home";
import { Router } from "@reach/router";
import SinglePost from "./components/SinglePost";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreatePost from "./components/dashboard/posts/CreatePost";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Home path="/" />
                    <Login path="/login" />
                    <Dashboard path="/dashboard/:username" />
                    <CreatePost path="/dashboard/create-post" />
                    <SinglePost path="/post/:id" />
                </Router>
            </div>
        );
    }
}

export default App;
