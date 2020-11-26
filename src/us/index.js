import React, {PureComponent} from 'react';
import {Layout, Tabs} from 'antd';
import {connect} from "react-redux"

import {getMtData} from "./store/actionCreators";
import {BreadthSimple, Headers, ADBanner, Bottom, GAlertMessage} from "./USUI";
import {BreadthHeatMap} from "./breadth";
import Economic from './economic/'

const { TabPane } = Tabs;


class Home extends PureComponent{
  constructor(props) {
    super(props);
    if (typeof window === 'object') this.fetchData();
  }

  async fetchData() {
    await this.props.initData();
  }

  componentDidMount() {
    this.refreshData = setInterval(() => {
      this.props.initData();
    }, 1000 * 60 * 10)
  }

  componentWillUnmount() {
    clearInterval(this.refreshData);
  }

  render() {
    return (
      <Layout>
        <Headers/>
        <GAlertMessage lastTime={this.props.lastTime}/>
        <BreadthSimple {...this.props}/>
        <ADBanner/>
        <Content {...this.props} />
        <Bottom/>
      </Layout>
    )
  }
}

const Content = (props) => {

  return (
      <Tabs defaultActiveKey="content1" centered>
        <TabPane tab="市场宽度" key="content11">
          <BreadthHeatMap {...props}/>
        </TabPane>
        <TabPane tab="经济数据" disabled key="content12">
          <Economic/>
        </TabPane>
        <TabPane tab="市场全景" disabled key="content13">
        </TabPane>
      </Tabs>
  )
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
})

// 组件是通过connect获取到state的数据
export default connect(mapState, mapDispatch)(Home)
