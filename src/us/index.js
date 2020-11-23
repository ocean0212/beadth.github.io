import React, {Component, useState} from 'react';
import {Row, Col, Tooltip, BackTop, Drawer, Divider, Image, Button, Alert} from 'antd';
import {InfoCircleOutlined, HeartTwoTone} from '@ant-design/icons'; // eslint-disable-line no-unused-vars
import {connect} from "react-redux"

import {Layout, Statistic, Menu, Space, Descriptions, message, List, Card} from 'antd'; // eslint-disable-line no-unused-vars
import { Collapse, Tabs } from 'antd';

import {getMtData,} from "./store/actionCreators";
import {BreadthLeftChart, BreadthRightChart, BreadthLineChart} from "./chart";
import {
  DOMAIN_NAME_URL,
  IS_LOADING_STRING,
  PAYPAL_URL,
  SHOW_SPACE,
  BannerData,
  PAYPAL_PAY_QR, ALI_PAY_QR, WECHAT_PAY_QR
} from "../constants"; // eslint-disable-line no-unused-vars

const { Panel } = Collapse; // eslint-disable-line no-unused-vars
const { TabPane } = Tabs;

const Top = (props) => {
  const {Header} = Layout;

  return (
    <Col xs={{span: 0}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}} align="top">
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Market Breadth</Menu.Item>
        <Menu.Item key="1"><a href={"https://discord.gg/HZabmnG3PS"} target={"_blank"} rel="noreferrer">小站 Discord</a></Menu.Item>
      </Menu>
    </Header>
    </Col>
  )
}

const Bottom = (props) => {
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

const GAlertMessage = (props) => {
  const lastTimeText = "交易日市场数据每1-2小时更新一次 | 最后更新时间(美东): " + props.lastTime

  return (
    <Row justify="center" align="top">
      <Col xs={{span: 24}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
        <Alert message={lastTimeText} type="info" banner/>
      </Col>
    </Row>)
}

const Donate = (props) => {

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {/*<a href={PAYPAL_URL} target={"_blank"} rel={"noreferrer"}>*/}
      {/*  <img*/}
      {/*    border="0"*/}
      {/*    src="https://www.paypalobjects.com/zh_XC/i/btn/btn_donateCC_LG.gif"*/}
      {/*    title="PayPal - The safer, easier way to pay online!"*/}
      {/*    alt="使用PayPal按钮进行捐赠"*/}
      {/*  />*/}
      {/*</a>*/}
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

const ContentTop = (props) => {
  props = props.props
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

const Banner = (props) => {

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

class SP500 extends Component {
  constructor(props) {
    super(props);
    if (typeof window === 'object') this.fetchData();
  }

  async fetchData() {
    await this.props.initData();
  }

  render() {


    const {
      dataList, totalList, codeList, dayList, // eslint-disable-line no-unused-vars
      mv20CodeList, mv20DataList, lineDataList, // eslint-disable-line no-unused-vars
      isLoading, lastBreadth, lastTime, // eslint-disable-line no-unused-vars
      highBreadth, lowBreadth, openBreadth, breadthDateRange, // eslint-disable-line no-unused-vars
    } = this.props // eslint-disable-line no-unused-vars


    return (
      <Layout>
        <Top/>
        <GAlertMessage lastTime={lastTime}/>
        <ContentTop props={this.props} isLoading={isLoading}/>
        <Banner/>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="市场宽度" key="1">
            <Row justify="center" align="top">
              <Col xs={{span: 20}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
                {
                  isLoading
                    ? <div>{IS_LOADING_STRING}</div>
                    : <BreadthLineChart data={lineDataList} date={breadthDateRange}/>
                }
              </Col>
            </Row>

            <Row justify="center" align="top">

              <Col xs={{span: 0}} sm={{span: 19}} md={{span: 18}} lg={{span: 14}} xl={{span: 14}} >
                {
                  isLoading
                    ? <div>{IS_LOADING_STRING}</div>
                    : <BreadthLeftChart data={mv20DataList} days={dayList}/>

                }
              </Col>

              <Col xs={{span: 0}} sm={{span: 2}} md={{span: 2}} lg={{span: 2}} xl={{span: 2}} offset={1} align="top">
                {
                  isLoading
                    ? <div>{IS_LOADING_STRING}</div>
                    : <BreadthRightChart data={totalList} days={dayList}/>
                }
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="经济数据" disabled key="2">
          </TabPane>
          <TabPane tab="市场全景" disabled key="3">
          </TabPane>
        </Tabs>



        <Bottom/>
      </Layout>
    )
  }

  componentDidMount() {
    // this.props.initData();

    this.refreshData = setInterval(() => {
      this.props.initData();
    }, 1000 * 60 * 10)
  }

  componentWillUnmount() {
    clearInterval(this.refreshData);
  }

}

// link 规则（方式）映射关系
const mapState = (state) => {
  return {
    dataList: state.getIn(['us', 'dataList']),
    totalList: state.getIn(['us', 'totalList']),
    codeList: state.getIn(['us', 'codeList']),
    dayList: state.getIn(['us', 'dayList']),
    mv20CodeList: state.getIn(['us', 'mv20CodeList']),
    mv20DataList: state.getIn(['us', 'mv20DataList']),
    isLoading: state.getIn(['us', 'isLoading']),
    lastBreadth: state.getIn(['us', 'lastBreadth']),
    highBreadth: state.getIn(['us', 'highBreadth']),
    lowBreadth: state.getIn(['us', 'lowBreadth']),
    openBreadth: state.getIn(['us', 'openBreadth']),
    lastTime: state.getIn(['us', 'lastTime']),
    lineDataList: state.getIn(['us', 'lineDataList']),
    breadthChartHigh: state.getIn(['us', 'breadthChartHigh']),
    breadthDateRange: state.getIn(['us', 'breadthDateRange']),
  }
};

// redux 数据修改逻辑映射 store.dispatch, props
const mapDispatch = (dispatch) => {
  return {
    // load list
    initData() {
      dispatch(getMtData())
    },

  }
};

// 组件是通过connect获取到state的数据
export default connect(mapState, mapDispatch)(SP500)
