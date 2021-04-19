import React, { useState } from "react";
import { getUserName } from "../../functions";
import NavLink from "../../NavLink";

const SidebarMenu = (props) => {
    const [subMenuActive, setSubMenuActive] = useState(false);
    const userName = getUserName() ? getUserName() : "";

    return (
        <nav>
            <div className="sidebar-header">
                <NavLink to={`/dashboard/${userName}`}>React with WP</NavLink>
            </div>
            <div id="sidebar" className={props.active ? "active" : ""}>
                <ul className="list-unstyled components">
                    <li className="active">
                        <NavLink
                            to="#"
                            data-toggle="collapse"
                            aria-expanded={subMenuActive}
                            className={`dropdown-toggle ${!subMenuActive ? "collapsed" : ""}`}
                            onClick={() => setSubMenuActive(!subMenuActive)}
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
