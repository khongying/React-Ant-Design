import {Spin} from "antd";
import React from "react";
import './Loading.css';
import { LoadingOutlined } from '@ant-design/icons';

export default class LoadingComponent extends React.Component {
    render() {
        const antIcon = <LoadingOutlined style={{ fontSize: 150 }} spin />;
        return (
            <div className="loading-container">
                <Spin indicator={antIcon}/>
            </div>

        )
    }
}
