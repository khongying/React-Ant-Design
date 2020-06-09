import React, {useEffect, useState} from 'react';
import './App.css';
import MainComponent from './layout/Main';
import {useSelector} from "react-redux";
import {notification} from 'antd';


function App() {
    const toast = useSelector(state => state.toast.toast);

    const openNotification = (toast) => {
        notification.info({
            message: toast.message,
            description: toast.description,
        });
    };

    useEffect(() => {
        if( Object.keys(toast).length !== 0) {
            openNotification(toast)
        }
    },[toast])

    return (
        <MainComponent/>
    );
}

export default App;
