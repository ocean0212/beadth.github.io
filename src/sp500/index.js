import React, {Component} from 'react';
import {Row, Col, Tooltip, BackTop} from 'antd';
import {HeartTwoTone, InfoCircleOutlined} from '@ant-design/icons';
import {connect} from "react-redux"

import {Layout, Statistic, Menu, Button, Space, Alert, Descriptions, message, List, Card} from 'antd';
import { Collapse, Tabs } from 'antd';

import {getMtData,} from "./store/actionCreators";
import {LeftChart, RightChart, LineChart} from "./chart";
import {DOMAIN_NAME_URL, IS_LOADING_STRING, PAYPAL_URL, SHOW_SPACE, SP500_SUB_CODE_CN} from "../constants";

const { Panel } = Collapse;
const { TabPane } = Tabs;

const Top = (props) => {
  const {Header} = Layout;

  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Market Breadth</Menu.Item>
        {/*<Menu.Item key="2">功能开发中..</Menu.Item>*/}
      </Menu>
    </Header>
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
  const lastTimeText = "交易日市场数据每1-2小时更新一次 | 数据更新最后更新时间(美东): " + props.lastTime

  return (
    <Row justify="center" align="top">
      <Col xs={{span: 24}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
        <Alert message={lastTimeText} type="info" banner/>
      </Col>
    </Row>)
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

        <Row gutter={[8, 8]} justify="center" style={{padding: '12px 0'}}>
          <Col xs={{span: 11, offset: 1}} sm={{span: 7, offset: 2}} md={{span: 10, offset: 2}} lg={{span: 7, offset: 1}}
               xl={{span: 7, offset: 1}}>

            {
              isLoading
                ? <div>{IS_LOADING_STRING}</div>
                : <Statistic title="Market Breadth" value={lastBreadth}/>
            }

            <Descriptions title=" ">
              {/*<Descriptions.Item label="最高">*/}
              {/*  <Tooltip title='当日所有子行业"最高"宽度之和，数据很敏感，仅供参考' color='blue' key='blue-text'>*/}
              {/*    {highBreadth}  {SHOW_SPACE}*/}
              {/*    <InfoCircleOutlined />*/}
              {/*  </Tooltip>*/}
              {/*</Descriptions.Item>*/}
              {/*<Descriptions.Item label="最低">*/}
              {/*  <Tooltip title="当日所有子行业最低宽度之和" color='blue' key='blue-text'>*/}
              {/*    {lowBreadth} {SHOW_SPACE}*/}
              {/*    <InfoCircleOutlined />*/}
              {/*  </Tooltip>*/}
              {/*</Descriptions.Item>*/}
              <Descriptions.Item label="开盘">
                <Tooltip title="当日所有子行业开盘宽度之和" color='blue' key='blue-text'>
                  {openBreadth} {SHOW_SPACE}
                  <InfoCircleOutlined/>
                </Tooltip>
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col xs={{span: 7, offset: 0}} sm={{span: 7, offset: 0}} md={{span: 10, offset: 1}} lg={{span: 7, offset: 0}}
               xl={{span: 7, offset: 2}} align="middle">

            <Space size={25} direction="vertical">
              <Tooltip title="交易时间延迟1-2小时." color='blue' key='blue-text'>
                <Button type="primary" onClick={() => {
                  this.props.initData();
                  message.success('已更新');
                }}>刷新</Button>
              </Tooltip>

              <Button danger onClick={() => {
                window.open(PAYPAL_URL);
              }}>
                <HeartTwoTone twoToneColor="#eb2f96"/>
                支持一下
              </Button>


            </Space>
          </Col>
        </Row>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="市场宽度" key="1">
            <Row justify="center" align="top">
              <Col xs={{span: 20}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
                {
                  isLoading
                    ? <div>{IS_LOADING_STRING}</div>
                    : <LineChart data={lineDataList} date={breadthDateRange}/>
                }
              </Col>
            </Row>

            <Row justify="center" align="top">

              <Col xs={{span: 0}} sm={{span: 21}} md={{span: 20}} lg={{span: 17}} xl={{span: 17}} align="top" style={{padding: '2px 0 10px'}}>
                <Collapse  bordered={false}>
                  <Panel header="各代码中英文对照" key="1">
                    <List
                      grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 6,
                      }}
                      dataSource={SP500_SUB_CODE_CN}
                      renderItem={item => (
                        <List.Item>
                          <Card title={""}>
                            <Tooltip title={item.desc}>
                              <span>{item.code}</span>
                            </Tooltip>
                          </Card>
                        </List.Item>
                      )}
                    />
                  </Panel>
                </Collapse>
              </Col>

              <Col xs={{span: 0}} sm={{span: 19}} md={{span: 18}} lg={{span: 14}} xl={{span: 14}} >
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
    breadthDateRange: state.getIn(['sp500', 'breadthDateRange']),
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
