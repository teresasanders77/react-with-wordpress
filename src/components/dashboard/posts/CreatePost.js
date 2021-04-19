import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            userID: "",
            token: "",
            postCreated: false,
            loading: false
        };
    }

    componentDidMount() {
        const_userID = localStorage.getItem("userID");
    }

    render() {
        return <DashboardLayout>Create Post</DashboardLayout>;
    }
}

export default CreatePost;
