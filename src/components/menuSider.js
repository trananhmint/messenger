import React, { useState, Search } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FormOutlined,
  SearchOutlined,
  PhoneOutlined,
  EllipsisOutlined,
  WechatOutlined,
  HomeOutlined,
  CommentOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Input, Badge, Avatar, Space } from 'antd';
import { Col, Row } from 'antd';
const { Header, Sider, Content } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Chats', '1', <WechatOutlined />),
  getItem('Marketplace', '2', <HomeOutlined />),
  getItem('Requests', '3',<CommentOutlined />),
  getItem('Archived', '4', <DatabaseOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        backgroundColor: 'white'
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            color: 'white'
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 210,
          backgroundColor: 'white'
        }}
      >
        <Header
          style={{
            padding: 3,
            backgroundColor: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            height: '120px',
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            // marginBottom: '20px',
            // border: '1px solid black'

          }}
        >
          <div
            style={{
              fontSize: '23px',
              fontWeight: '800'
              // display:'inline'
            }}
          >Chats
            <Button
              style={{
                float: 'right',
                margin: '20px 0px 0px 0px',
                border: '0px',
                borderRadius: '100%'
              }}
            >
              <FormOutlined />
            </Button>

            <Input
              prefix={<SearchOutlined />}
              placeholder=' Search (Ctrl + K)'
              type='Search'
              style={{
                margin: '0px 0px 200px 0px',
                width: '100%',
                // height:'50px',
                fontSize: '16px',
                backgroundColor: '',
                // border: '1px solid black'
              }}
            >
            </Input>
          </div>
        </Header>

        <Content
          style={{
            // margin: '24px 16px',
            // marginTop:'20px',
            padding: 24,
            minHeight: 280,
            background: "white",
          }}
        >
          <div>
            <p>
              Content
              {
                // indicates very long content
                Array.from({ length: 100 }, (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ))
              }
            </p>
          </div>

          {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
              </React.Fragment>
            ))
          }
        </Content>

      </Layout>

      <Layout
        className="site-layout"
        style={{
          // marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 5,
            background: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            height: '90px',
            display: 'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            borderBottomStyle:'solid',
            // borderLeftStyle:'solid',
            borderWidth:'1px',
            borderColor:'#D4D4D4'
            // alignItems: 'center',
            // border: '1px solid black'
          }}
        >
          <div>
            <Space size={16} >
              <Badge dot
                style={{
                  background: '#1fcd1f'
                }}
              >
                <Avatar shape="circle" size="large" icon={<UserOutlined />}
                  style={{
                    margin: '0px 0px 0px 0px',
                    display: 'inline-block'
                  }}
                />
              </Badge>
              <div
                style={{
                  // display:'flex',
                  // flexDirection:'column'
                }}
              >
                <div>
                  <h3>Võ Nguyễn Trung Sơn </h3>
                </div>

                <div>
                </div>

              </div>
            </Space>
          </div>
                <div
                style={{
                  display:'flex',
                  justifyContent:'space-between',
                  margin:'15px 0px 0px 0px',
                  fontSize:'23px',
                }}
                >
                <PhoneOutlined  rotate={90} 
                style={{
               
                textAlign:"center",
                width:"50px",
                }}
                />
                <VideoCameraOutlined 
                style={{
                 
                  width:"50px"
                  }}
                />
                <SearchOutlined 
                style={{
                  
                  width:"50px"
                  }}
                />
                <EllipsisOutlined 
                style={{
                  // width:"50px"
                  }}
                />
                </div>

        </Header>


        <Content
          style={{
            // margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div>
            <p>
              Content
              {
                // indicates very long content
                Array.from({ length: 100 }, (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ))
              }
            </p>
          </div>

          {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
              </React.Fragment>
            ))
          }
        </Content>

      </Layout>
    </Layout>
  );
};
export default App;