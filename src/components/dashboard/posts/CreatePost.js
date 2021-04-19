import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            token: "",
            postCreated: false,
            loading: false,
            message: ""
        };
    }

    handleFormSubmit() {}

    handleInputChange() {}

    componentDidMount() {
        const token = localStorage.getItem("token");
        this.setState({ token });
    }

    render() {
        const { loading, message, postCreated } = this.state;
        return (
            <DashboardLayout>
                <form onSubmit={this.handleFormSubmit} className="mt-5" style={{ maxWidth: "800px" }}>
                    <legend className="mb-4">Create Post</legend>

                    {message ? (
                        <div className={`alert ${postCreate ? "alert-success" : "alert-danger"}`}>{message}</div>
                    ) : (
                        ""
                    )}
                    {/* Title */}
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInputChange}
                            className="form-control"
                            id="title"
                        />
                    </div>
                    {/* Content */}
                    <div className="form-group">
                        <label htmlFor="my-post-content">Content</label>
                        <textarea
                            name="content"
                            className="form-control"
                            id="my-post-content"
                            onChange={this.handleInputChange}
                            rows="10"
                        />
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </form>
            </DashboardLayout>
        );
    }
}

export default CreatePost;
