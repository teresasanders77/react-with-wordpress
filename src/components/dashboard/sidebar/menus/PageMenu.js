import React from "react";

const PageMenu = () => {
    return (
        <li className="active">
            <NavLink
                to="#"
                data-toggle="collapse"
                aria-expanded={subMenuActive}
                className={`dropdown-toggle ${!subMenuActive ? "collapsed" : ""}`}
                onClick={() => setSubMenuActive(!subMenuActive)}
            >
                Pages
            </NavLink>
            <ul className={`collapse list-unstyled ${subMenuActive ? "show" : ""}`} id="homeSubMenu">
                <li>
                    <a href="#">All Pages</a>
                </li>
                <li>
                    <NavLink to="/dashboard/create-post">Add New</NavLink>
                </li>
            </ul>
        </li>
    );
};

export default PageMenu;
