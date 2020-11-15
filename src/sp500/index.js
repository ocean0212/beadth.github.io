import React, {Component} from 'react';
import {Row, Col, Tooltip} from 'antd';
import {connect} from "react-redux"

import {Layout, Statistic, Menu, Button, Space, Alert, Descriptions, message } from 'antd';

import {getMtData,} from "./store/actionCreators";
import {LeftChart, RightChart, LineChart} from "./chart";
import {IS_LOADING_STRING, PAYPAL_URL} from "../constants";


class SP500 extends Component {
  constructor(props) {
    super(props);
    if (typeof window === 'object') this.fetchData();
  }

  async fetchData() {
    await this.props.initData();
  }

  render() {
    const {Header, Footer} = Layout;

    const {
      dataList, totalList, codeList, dayList, // eslint-disable-line no-unused-vars
      mv20CodeList, mv20DataList, lineDataList, // eslint-disable-line no-unused-vars
      isLoading, lastBreadth, lastTime, // eslint-disable-line no-unused-vars
      highBreadth, lowBreadth, openBreadth, // eslint-disable-line no-unused-vars
    } = this.props // eslint-disable-line no-unused-vars

    const lastTimeText = "最后更新时间: " + lastTime

    return (
      <Layout>
        <Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Market Breadth</Menu.Item>
          </Menu>
        </Header>
        <Row justify="center" align="top">
          <Col xs={{span: 24}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
            <Alert message={lastTimeText} type="info"   banner/>
          </Col>
        </Row>

        <Row gutter={[9, 9]} justify="center" style={{padding: '12px 0'}}>
          <Col xs={{span: 7, offset: 1}} sm={{span: 7, offset: 1}} md={{span: 10, offset: 1}} lg={{span: 6, offset: 5}}
               xl={{span: 6, offset: 5}}>
            {
              isLoading
                ? <div>{IS_LOADING_STRING}</div>
                : <Statistic title="Market Breadth" value={lastBreadth}/>
            }

            <Descriptions title="">
              <Descriptions.Item label="最高">{highBreadth}</Descriptions.Item>
              <Descriptions.Item label="最低">{lowBreadth}</Descriptions.Item>
              <Descriptions.Item label="开盘">{openBreadth}</Descriptions.Item>
            </Descriptions>
          </Col>
          <Col xs={{span: 7, offset: 0}} sm={{span: 7, offset: 1}} md={{span: 10, offset: 1}} lg={{span: 6, offset: 5}}
               xl={{span: 6, offset: 5}}>

          <Space size={10} direction="vertical">
              <Tooltip title="交易时间延迟1-2小时." color='blue' key='blue-text'>
                <Button type="primary" onClick={() => {
                  this.props.initData();
                  message.success('已更新');
                }}>刷新</Button>
              </Tooltip>

              <Tooltip title="O(∩_∩)O~" color='red' key='red-text'>
                <Button danger onClick={() => {
                  window.open(PAYPAL_URL);
                }}>支持一下</Button>
              </Tooltip>

            </Space>
          </Col>
        </Row>

        <Row justify="center" align="top">
          <Col xs={{span: 20}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
            {
              isLoading
                ? <div>{IS_LOADING_STRING}</div>
                : <LineChart data={lineDataList}/>
            }
          </Col>
        </Row>
        <Row justify="center" align="top">

          <Col xs={{span: 0}} sm={{span: 19}} md={{span: 18}} lg={{span: 14}} xl={{span: 14}} align="top">
            {
              isLoading
                ? <div>{IS_LOADING_STRING}</div>
                : <LeftChart data={mv20DataList} days={dayList}/>

            }
          </Col>

          <Col xs={{span: 0}} sm={{span: 2}} md={{span: 2}} lg={{span: 2}} xl={{span: 2}} offset={1} align="top">
            {
              isLoading
                ? <div>{IS_LOADING_STRING}</div>
                : <RightChart data={totalList} days={dayList}/>
            }
          </Col>
        </Row>
        <Footer style={{textAlign: 'center'}}>Market Breadth ©2020 Created by breadth.app</Footer>
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
    dataList: state.getIn(['sp500', 'dataList']),
    totalList: state.getIn(['sp500', 'totalList']),
    codeList: state.getIn(['sp500', 'codeList']),
    dayList: state.getIn(['sp500', 'dayList']),
    mv20CodeList: state.getIn(['sp500', 'mv20CodeList']),
    mv20DataList: state.getIn(['sp500', 'mv20DataList']),
    isLoading: state.getIn(['sp500', 'isLoading']),
    lastBreadth: state.getIn(['sp500', 'lastBreadth']),
    highBreadth: state.getIn(['sp500', 'highBreadth']),
    lowBreadth: state.getIn(['sp500', 'lowBreadth']),
    openBreadth: state.getIn(['sp500', 'openBreadth']),
    lastTime: state.getIn(['sp500', 'lastTime']),
    lineDataList: state.getIn(['sp500', 'lineDataList']),
    breadthChartHigh: state.getIn(['sp500', 'breadthChartHigh']),
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
