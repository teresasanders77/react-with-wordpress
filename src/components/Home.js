import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "@reach/router";
import renderHTML from "react-render-html";
import "../Style.css";
import Moment from "react-moment";
import loader from "../loader.gif";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            posts: [],
            error: ""
        };
    }

    componentDidMount() {
        const wordPressSiteUrl = "http://react-with-wordpress/";
        this.setState({ loading: true }, () => {});
        axios
            .get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
            .then((res) => {
                this.setState({ loading: false, posts: res.data });
            })
            .catch((error) => this.setState({ loading: false, error: error.response.data.message }));
    }

    render() {
        const { posts, loading, error } = this.state;
        return (
            <div>
                <Navbar />
                {error && <div className="alert alert-danger">{error}</div>}
                {posts.length ? (
                    <div className="mt-5 post-container">
                        {posts.map((post) => (
                            <div key={post.id} className="card border-dark mb-3" style={{ width: "50rem" }}>
                                {/* Title */}
                                <div className="card-header">
                                    <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
                                </div>
                                {/* Body */}
                                <div className="card-body">
                                    <div className="card-text post-content">{renderHTML(post.excerpt.rendered)}</div>
                                </div>
                                {/* Footer */}
                                <div className="card-footer">
                                    <Moment fromNow>{post.date}</Moment>
                                    <Link to={`/post/${post.id}`} className="btn btn-secondary float-right">
                                        Read More..
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    ""
                )}
                {loading && <img className="loader" src={loader} alt="Loader" />}
            </div>
        );
    }
}

export default Home;
