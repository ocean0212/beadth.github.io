import React, {Component, PureComponent} from 'react';
import {Row, Col} from 'antd';
import {connect} from "react-redux"

import {Layout} from 'antd'; // eslint-disable-line no-unused-vars
import { Collapse, Tabs } from 'antd';

import {getMarketSomaHold, getMtData} from "./store/actionCreators";
import {BreadthLeftChart, BreadthRightChart, BreadthLineChart} from "./chart";
import {ContentTop, Top, Banner, Bottom, GAlertMessage} from "./USUI";
import {IS_LOADING_STRING} from "../constants"; // eslint-disable-line no-unused-vars

const { Panel } = Collapse; // eslint-disable-line no-unused-vars
const { TabPane } = Tabs;

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
          <TabPane tab="经济数据" key="2" disabled>
            <EconomicData getSomaHold={this.props.getSomaHold}/>
          </TabPane>
          <TabPane tab="市场全景" disabled key="3">
          </TabPane>
        </Tabs>



        <Bottom/>
      </Layout>
    )
  }

  componentDidMount() {
    this.refreshData = setInterval(() => {
      this.props.initData();
    }, 1000 * 60 * 10)
  }

  componentWillUnmount() {
    clearInterval(this.refreshData);
  }

}

class EconomicData extends PureComponent{

  componentDidMount() {
    console.log("EconomicData componentDidMount")
    this.ecoGetSomaHold()
  }

  render() {
    return (
      <React.Fragment>
        <Row justify="center" align="top">
          <Col xs={{span: 20}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
            content
          </Col>
        </Row>
      </React.Fragment>);
  }

  ecoGetSomaHold(){
    this.props.getSomaHold();
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
const mapDispatch = (dispatch) => ({
    // load list
    initData() {
      dispatch(getMtData())
    },
    getSomaHold(){
      dispatch(getMarketSomaHold())
    }
})

// 组件是通过connect获取到state的数据
export default connect(mapState, mapDispatch)(SP500)
