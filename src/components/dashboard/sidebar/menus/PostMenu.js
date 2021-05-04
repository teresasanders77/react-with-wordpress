import React from "react";
import AppContext from "../../../context/AppContext";

const PostMenu = () => {
    const [store, setStore] = useContext(AppContext);

    return (
        <li className={"/dashboard/posts" === window.location.pathname ? "active" : ""}>
            <NavLink
                to="/dashboard/posts"
                data-toggle="collapse"
                aria-expanded={store.activeMenu.postMenuActive}
                className={`dropdown-toggle ${!subMenuActive ? "collapsed" : ""}`}
                onClick={() =>
                    setStore({
                        ...store,
                        activeMenu: { postMenuActive: !store.activeMenu.postMenuActive }
                    })
                }
            >
                Posts
            </NavLink>
            <ul className={`collapse list-unstyled ${subMenuActive ? "show" : ""}`} id="homeSubMenu">
                <li>
                    <a href="#">All Posts</a>
                </li>
                <li>
                    <NavLink to="/dashboard/create-post">Add New</NavLink>
                </li>
            </ul>
        </li>
    );
};

export default PostMenu;
