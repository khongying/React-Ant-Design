import React from 'react';
import logo from "../logo.svg";
import {Layout, Menu} from "antd"; // get the React object from the react module
import {Link} from "react-router-dom";

export default class HeaderComponent extends React.Component {
    render() {
        const {Header} = Layout;
        return (
            <Header className="header">
                <div className="logo" >
                    <img src={logo} alt="logo" />
                </div>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">
                        <Link to="/">
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/about">
                            About
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        )
    }
}
