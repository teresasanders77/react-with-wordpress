import React, { useContext } from "react";
import NavLink from "../../NavLink";
import AppContext from "../../context/AppContext";
import PostMenu from "./menus/PostMenu";

const SidebarMenu = (props) => {
    const [store, setStore] = useContext(AppContext);

    return (
        <nav>
            <div className="sidebar-header">
                <NavLink to={`/dashboard `}>React with WP</NavLink>
            </div>
            <div id="sidebar" className={store.sidebarActive ? "active" : ""}>
                <ul className="list-unstyled components">
                    <PostMenu />
                    <li>
                        <a href="#">Pages</a>
                    </li>
                    <li>
                        <a href="#">Media</a>
                    </li>
                    <li>
                        <a href="#">Users</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SidebarMenu;
