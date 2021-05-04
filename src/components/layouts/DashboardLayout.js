import React from "react";
import Content from "../content/Content";
import SidebarMenu from "../dashboard/sidebar/SidebarMenu";

const DashboardLayout = (props) => {
    return (
        <React.Fragment>
            <SidebarMenu />
            <Content>{props.children}</Content>
        </React.Fragment>
    );
};

export default DashboardLayout;
