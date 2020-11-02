import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {connect} from "react-redux"

import {Layout, Menu} from 'antd';
import { Table } from 'antd';
import {Chart} from '@antv/g2';

import {getMtData,} from "./store/actionCreators";


class SP500 extends Component {

  render() {
    const {dataList, totalList, codeList, dayList,mv20CodeList,mv20DataList } = this.props
    // return (<CHART/>)

    return (<SP500UI
      dataList={dataList}
      totalList={totalList}
      daylList={dayList}
      codeList={codeList}
      mv20DataList={mv20DataList}
      mv20CodeList={mv20CodeList}
    />)
  }

  componentDidMount() {
    this.props.initData();
    // this.bindEvents();
  }
}

// const CHART = (props) => {
class CHART extends Component {
  render() {
    const {dataList, totalList, codeList, dayList,mv20CodeList,mv20DataList } = this.props
    console.log(dayList)
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
    });
    chart.data(mv20DataList);
    chart.scale('name', {
      type: 'cat',
      values: codeList,
    });
    chart.scale('day', {
      type: 'cat',
      values: dayList,
    });
    chart.scale('sales', {
      nice: true,
      height: 50,
    });

    chart.axis('name', {
      tickLine: null,
      grid: {
        alignTick: false,
        line: {
          style: {
            lineWidth: 1,
            lineDash: null,
            stroke: '#f0f0f0',
          },
        },
      },
    });

    chart.axis('day', {
      title: null,
      grid: {
        alignTick: false,
        line: {
          style: {
            lineWidth: 1,
            lineDash: null,
            stroke: '#f0f0f0',
          },
        },
      },
    });

    chart.tooltip({
      showMarkers: false,
    });

    chart
      .polygon()
      .position('name*day')
      .color('sales', '#BAE7FF-#1890FF-#0050B3')
      .label('sales', {
        offset: -2,
        style: {
          fill: '#fff',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)',
        },
      })
      .style({
        lineWidth: 1,
        stroke: '#fff',
      });
    chart.interaction('element-active')
    return (
      chart.render()
    )
  }
}

const SP500UI = (props) => {
  const {Header, Footer} = Layout;
  // const style1 = {background: '#0092ff', padding: '0 0'};
  const style2 = {background: '#FF0000', padding: '0 0'};

  const columns = [
    {title: 'TIME', dataIndex: 'time',},
    {title: 'SPX', dataIndex: 'SPX',},
    {title: 'COM', dataIndex: 'COM',},
    {title: 'CND', dataIndex: 'CND',},
    {title: 'CNS', dataIndex: 'CNS',},
    {title: 'ENE', dataIndex: 'ENE',},
    {title: 'FIN', dataIndex: 'FIN',},
    {title: 'HLT', dataIndex: 'HLT',},
    {title: 'IND', dataIndex: 'IND',},
    {title: 'MAT', dataIndex: 'MAT',},
    {title: 'REI', dataIndex: 'REI',},
    {title: 'TEC', dataIndex: 'TEC',},
    {title: 'UTL', dataIndex: 'UTL',},
    {title: 'TOTAL', dataIndex: 'TOTAL',},
  ]
  return (

    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Market Breadth</Menu.Item>
        </Menu>
      </Header>
      <Row justify="center">
        <Col style={style2} xs={{span: 20}} sm={{span: 20}} md={{span: 20}} lg={{span: 17}} xl={{span: 17}}>
          <CHART
            dataList={props.dataList}
            totalList={props.totalList}
            daylList={props.dayList}
            codeList={props.codeList}
            mv20DataList={props.mv20DataList}
            mv20CodeList={props.mv20CodeList}
          />

          {/*<Table columns={columns} dataSource={props.dataList} size="middle" pagination={false} responsive="lg">*/}
          {/*</Table>*/}
        </Col>
        {/*<Col style={style1} xs={{span: 4}} sm={{span: 4}} md={{span: 4}} lg={{span: 4}} xl={{span: 4}}>*/}


        {/*</Col>*/}
      </Row>
      <Footer style={{textAlign: 'center'}}>Market Breadth ©2020 Created by Market Breadth</Footer>
    </Layout>

  )


}

// link 规则（方式）映射关系
const mapState = (state) => {
  return {
    dataList: state.getIn(['sp500', 'dataList']),
    totalList: state.getIn(['sp500', 'totalList']),
    codeList: state.getIn(['sp500', 'codeList']),
    dayList: state.getIn(['sp500', 'dayList']),
    mv20List: state.getIn(['sp500', 'mv20List']),
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

// export default SP500