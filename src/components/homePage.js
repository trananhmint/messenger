import React from 'react';
import { useState } from "react";
import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


import {
    AppstoreOutlined,
    UserOutlined,

    PieChartOutlined,
    ContainerOutlined,
    MailOutlined,
    DesktopOutlined,
    PhoneFilled,
    SearchOutlined,
    EllipsisOutlined,
} from '@ant-design/icons';

import { Layout, Button, Menu, theme } from 'antd';
import { Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



// const items = [
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     BarChartOutlined,
//     CloudOutlined,
//     AppstoreOutlined,
//     TeamOutlined,
//     ShopOutlined,
// ].map((icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
// }));
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    };
}
const items = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("Option 3", "3", <ContainerOutlined />),
    getItem("Navigation One", "sub1", <MailOutlined />, [
        getItem("Option 5", "5"),
        getItem("Option 6", "6"),
        getItem("Option 7", "7"),
        getItem("Option 8", "8")
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Submenu", "sub3", null, [
            getItem("Option 11", "11"),
            getItem("Option 12", "12")
        ])
    ])
];

const HomePage = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [collapsed] = useState(true);
    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    // };
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    flexWrap: 'wrap',
                }}>
                <Layout
                    style={{
                        height: '100vh',
                        backgroundColor: 'gray',
                        // overflow: 'scroll',
                        // width: 80,
                        leftL: 0,
                        top: 0,
                        bottom: 0,
                        // marginRight: 20,
                        position: 'fixed',
                    }}
                >
                    <span></span>
                    <Menu
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        style={{ height: '100%', backgroundColor: '#1f1f1f', }}
                    />
                </Layout>
                <Layout
                    style={{
                        minWidth: '500',
                        overflow: 'auto',
                        marginLeft: 80,
                        left: 80,
                    }}
                >


                    <Layout
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            minWidth: '500',
                            // display: 'flex',
                            left: 80,
                            top: 0,
                            bottom: 0,
                        }}
                    >
                        <Sider
                            style={{
                                overflow: 'auto',
                                height: '100vh',
                                // position: 'fixed',
                                // display: 'flex',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                backgroundColor: 'black',
                            }}
                        >
                            <div className="demo-logo-vertical" />
                            <Menu
                                style={{ backgroundColor: 'black', }}
                                theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items}
                            />
                        </Sider>
                    </Layout> 
                    <Layout
                        style={{
                            height: '100vh',
                            backgroundColor: 'gray',
                            overflow: 'auto',
                            width: '100%',
                            // leftL: 280,
                            top: 0,
                            bottom: 0,
                            // marginleft: 280.5,
                            // position: 'fixed',
                        }}
                    >
                        <Layout
                            style={{ width: '100%', backgroundColor: 'gray', }}
                        >
                            <Layout
                                className="site-layout"
                                style={{
                                    // width: '100%',
                                    left: '280px',
                                    marginLeft: 200.5,
                                }}
                            >
                                <Header
                                    style={{

                                        top: 0,
                                        width: '100%',
                                        display: 'block',
                                        // position: 'fixed',
                                        alignItems: 'center',
                                        // flexWrap: 'nowrap'
                                    }}
                                >
                                    <div style={{ display: 'flex', height: 64, float: 'left' }}>
                                        <div style={{ marginRight: 10, paddingTop: 5, }}>
                                            <Avatar style={{ color: 'white', backgroundColor: 'gray', alignItems: 'center' }} size="large" icon={<UserOutlined />} />
                                        </div>
                                        <div
                                            style={{

                                                color: 'white',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                // paddingTop: '-10',
                                                // maxHeight: '40',

                                            }}
                                        >
                                            <span style={{ fontSize: '12pt', height: '50%', alignItems: '', display: 'flex', }}>Name</span>
                                            <span style={{ fontSize: '9pt', height: '50%', alignItems: 'center', display: 'flex', color: 'gray' }}>Đang hoạt động</span>
                                        </div>
                                    </div>
                                    <div style={{ color: 'white', height: 100, float: 'right', marginRight: -10, fontSize: '15pt'}}>
                                        <i class="bi bi-telephone-fill" style={{fontSize: '13pt', marginLeft: 20,}}/>
                                        <i class="bi bi-camera-video-fill" style={{marginLeft: 20, }}/>                           
                                        <SearchOutlined style={{marginLeft: 20}}/>
                                        <EllipsisOutlined style={{marginLeft: 20}}/>
                                    </div>
                                    {/* <div style={{float: 'left', backgroundColor: 'white', }}>
                                        <PhoneOutlined />
                                        <i class="bi bi-camera-video-fill"/>
                                        <SearchOutlined />
                                        <EllipsisOutlined />
                                    </div> */}
                                </Header>
                                <Content
                                    style={{

                                        margin: '50',
                                        overflow: 'initial',
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: 100,
                                            textAlign: 'center',
                                            background: colorBgContainer,
                                            backgroundColor: 'black',
                                        }}
                                    >
                                        <p>long content</p>
                                        {
                                            // indicates very long content
                                            Array.from(
                                                {
                                                    length: 100,
                                                },
                                                (_, index) => (
                                                    <React.Fragment key={index}>
                                                        {index % 20 === 0 && index ? 'more' : '...'}
                                                        <br />
                                                    </React.Fragment>
                                                ),
                                            )
                                        }
                                    </div>
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>

                </Layout>
            </div>
        </>
    )
}
export default HomePage;