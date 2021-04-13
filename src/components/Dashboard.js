import React from "react";
import Navbar from "./Navbar";

class Dashboard extends React.Component {
    render() {
        const userName = localStorage.getItem("userName");
        return (
            <div>
                <Navbar />
                <h2>Welcome {userName}</h2>
            </div>
        );
    }
}

export default Dashboard;
