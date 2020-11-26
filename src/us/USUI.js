import React, {useState} from 'react';
import {InfoCircleOutlined, HeartTwoTone} from '@ant-design/icons';
import {
  Alert,
  BackTop,
  Button,
  Col,
  Descriptions,
  Divider,
  Drawer,
  Image,
  Layout,
  Menu, message,
  Row, Space,
  Statistic,
  Tooltip,
  Skeleton,
  Typography,
} from "antd";

import {
  ALI_PAY_QR, BannerData,
  DOMAIN_NAME_URL,
  IS_LOADING_STRING, LEI_SITE,
  PAYPAL_PAY_QR,
  PAYPAL_URL,
  SHOW_SPACE,
  WECHAT_PAY_QR
} from "../constants";

export const Headers = (props) => {
  const {Header} = Layout;
  const { Title, Paragraph } = Typography;
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Col xs={{span: 0}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}} align="top">
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="headerItem1">Market Breadth</Menu.Item>
          <Menu.Item key="headerItem5"><a href={LEI_SITE} target={"_blank"} rel="noreferrer">LEI & LoneCapital</a></Menu.Item>
          <Menu.Item key="headerItem3"><a href={"https://discord.gg/HZabmnG3PS"} target={"_blank"} rel="noreferrer">投资交流</a></Menu.Item>
          <Menu.Item key="headerItem4"  onClick={showDrawer} >加入/合作</Menu.Item>
        </Menu>
        <Drawer
          title="加入我们/合作"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Row justify="center" align="top">
            <Title>加入</Title>
            <Paragraph>
              目前急缺前端工程师，vue/react 均可, 请不要犹豫，直接发送邮件
            </Paragraph>
            <Paragraph copyable={{ tooltips: false }}>kenteb@outlook.com</Paragraph>

            <Title>合作</Title>
            <Paragraph>
              目前收入来源仅来自网友们的热心捐助，我们深知捐助不是长久之计，网站的运营和开需要一定的费用来维持，如果有合作的机会请联系我们。
            </Paragraph>
            <Paragraph copyable={{ tooltips: false }}>kenteb@outlook.com</Paragraph>
          </Row>

        </Drawer>
      </Header>
    </Col>
  )
}

export const Bottom = (props) => {
  const {Footer} = Layout;
  const backTop = {
    height: 40,
    width: 30,
    lineHeight: '40px',
    borderRadius: 6,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  };

  return (
    <React.Fragment>
      <Footer style={{textAlign: 'center'}}>
        <Col xs={{span: 24}} sm={{span: 0}} md={{span: 0}} lg={{span: 0}} xl={{span: 0}} align="center">
          <Alert padding={[0, 0, 0, 0]} width="100%" message="横屏查看Market Breadth色块变化图。" type="info"/>
        </Col>
        Market Breadth ©2020 Created by <a href={DOMAIN_NAME_URL}>breadth.app</a>
      </Footer>
      <BackTop>
        <div style={backTop}>↑</div>
      </BackTop>
    </React.Fragment>)
}

export const GAlertMessage = (props) => {
  const lastTimeText = "交易日市场数据每1-2小时更新一次 | 最后更新时间(美东): " + props.lastTime

  return (
    <Row justify="center" align="top">
      <Col xs={{span: 24}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
        <Alert message={lastTimeText} type="info" banner/>
      </Col>
    </Row>)
}

export const Donate = (props) => {

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button danger onClick={showDrawer}>
        <HeartTwoTone twoToneColor="#eb2f96"/>
        支持
      </Button>

      <Drawer
        title="捐助/支持"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Row justify="center" align="top">
          <a href={PAYPAL_URL} target={"_blank"} rel={"noreferrer"}>
            <img
              border="0"
              src="https://www.paypalobjects.com/zh_XC/i/btn/btn_donate_SM.gif"
              title="PayPal - The safer, easier way to pay online!"
              alt="使用PayPal按钮进行捐赠"
            />
          </a>
          <Image
            width={200}
            src={PAYPAL_PAY_QR}
            alt={"点击跳转到Paypal.me"}
          />
          <Divider plain>支付宝</Divider>
          <Image
            width={200}
            src={ALI_PAY_QR}
          />
          <Divider plain>微信</Divider>
          <Image
            width={200}
            src={WECHAT_PAY_QR}
          />
        </Row>

      </Drawer>
    </div>
  )
}

export const BreadthSimple = (props) => {

  return (
    <Row gutter={[8, 8]} justify="center" style={{padding: '12px 0'}}>
      <Col xs={{span: 11, offset: 1}} sm={{span: 7, offset: 2}} md={{span: 10, offset: 2}} lg={{span: 7, offset: 1}}
           xl={{span: 7, offset: 1}}>

        {
          props.isLoading
            ? <div>{IS_LOADING_STRING}</div>
            : <Statistic title="Market Breadth" value={props.lastBreadth}/>
        }

        <Descriptions title=" ">
          <Descriptions.Item label="开盘">
            <Tooltip title="当日所有子行业开盘宽度之和" color='blue' key='blue-text'>
              {props.openBreadth} {SHOW_SPACE}
              <InfoCircleOutlined/>
            </Tooltip>
          </Descriptions.Item>
        </Descriptions>
      </Col>
      <Col xs={{span: 7, offset: 0}} sm={{span: 7, offset: 0}} md={{span: 10, offset: 1}} lg={{span: 7, offset: 0}}
           xl={{span: 7, offset: 2}} align="middle">

        <Space size={25} direction="vertical">
          <Tooltip title="每10分钟更新本地数据" color='blue' key='blue-text'>
            <Button type="primary" onClick={() => {
              props.initData();
              message.success('已更新');
            }}>刷新</Button>
          </Tooltip>
          <Donate/>

        </Space>
      </Col>
    </Row>
  )
}

export const ADBanner = (props) => {

  const contentStyle = {
    height: '50px',
    color: '#fff',
    lineHeight: '50px',
    textAlign: 'center',
    background: '#364d79',
    zIndex: '-1',
    // whiteSpace:"normal",
  };

  return (
    <Row justify="center" align="top">
      <Col xs={{span: 24}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
        <h2 style={contentStyle} >
          <a style={contentStyle} rel={"noreferrer"} href={BannerData[0].url} target="_blank" title={BannerData[0].desc}>{BannerData[0].text} : {BannerData[0].title}</a>
        </h2>
      </Col>
    </Row>
  )
}

export const Loading = ()=>{
  return <Skeleton loading={true} active={true}/>
}