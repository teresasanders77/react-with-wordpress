import React from "react";
import Content from "../content/Content";
import SidebarMenu from "../dashboard/sidebar/SidebarMenu";

const DashboardLayout = () => {
    return (
        <React.Fragment>
            <SidebarMenu />
            <Content>{this.props.children}</Content>
        </React.Fragment>
    );
};

export default DashboardLayout;
