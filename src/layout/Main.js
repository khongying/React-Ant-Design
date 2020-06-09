import React, {useEffect} from 'react';
import {Breadcrumb, Layout} from "antd"; // get the React object from the react module
import {useSelector} from 'react-redux';
import LoadingComponent from './Loading';
import HeaderComponent from './Header';
import SiderComponent from './Sider';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeComponent from "../view/home/home";
import AboutComponent from "../view/about/about";


function MainComponent() {
    const {Content} = Layout;
    const loading = useSelector(state => state.loading);

    useEffect(() => {

    }, [loading]);

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Router>
                {loading === true ? (
                    <LoadingComponent/>
                ) : null}
                <HeaderComponent/>
                <Layout>
                    <SiderComponent />
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >

                            <Switch>
                                <Route path="/" exact component={HomeComponent}/>
                                <Route path="/about" component={AboutComponent}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        </Layout>
    )
}

export default MainComponent;
