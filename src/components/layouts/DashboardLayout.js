import React from "react";
import Content from "../content/Content";
import SidebarMenu from "../dashboard/sidebar/SidebarMenu";

class DashboardLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    handleSidebarToggleClick = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <SidebarMenu active={this.state.active} />
                <Content handleSidebarToggleClick={this.handleSidebarToggleClick} active={this.state.active}>
                    {this.props.children}
                </Content>
            </React.Fragment>
        );
    }
}

export default DashboardLayout;
