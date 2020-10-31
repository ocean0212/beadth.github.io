import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {connect} from "react-redux"

import {Layout, Menu} from 'antd';
import { Table } from 'antd';
// import {Chart} from '@antv/g2';

import {getMtData,} from "./store/actionCreators";


class SP500 extends Component {

  render() {
    const {dataList, totalList, codeList, dayList } = this.props
    return (<SP500UI
      dataList={dataList}
      totalList={totalList}
      daylList={dayList}
      codeList={codeList}
    />)
  }

  componentDidMount() {
    this.props.initData();
    // this.bindEvents();
  }
}

// {/*const CHART = (props) => {*/}
//   const source = props.dataList.map((arr) => {
//     return {
//       name: arr[0],
//       day: arr[1],
//       sales: arr[2],
//     };
//   });
//   const chart = new Chart({
//     container: 'container',
//     autoFit: true,
//     height: 500,
//   });
//   chart.data(source);
//   chart.scale('name', {
//     type: 'cat',
//     values: props.codeList,
//   });
//   chart.scale('day', {
//     type: 'cat',
//     values: props.daylList,
//   });
//   chart.scale('sales', {
//     nice: true,
//     height: 50,
//   });
//
//   chart.axis('name', {
//     tickLine: null,
//     grid: {
//       alignTick: false,
//       line: {
//         style: {
//           lineWidth: 1,
//           lineDash: null,
//           stroke: '#f0f0f0',
//         },
//       },
//     },
//   });
//
//   chart.axis('day', {
//     title: null,
//     grid: {
//       alignTick: false,
//       line: {
//         style: {
//           lineWidth: 1,
//           lineDash: null,
//           stroke: '#f0f0f0',
//         },
//       },
//     },
//   });
//
//   chart.tooltip({
//     showMarkers: false,
//   });
//
//   chart
//     .polygon()
//     .position('name*day')
//     .color('sales', '#BAE7FF-#1890FF-#0050B3')
//     .label('sales', {
//       offset: -2,
//       style: {
//         fill: '#fff',
//         shadowBlur: 2,
//         shadowColor: 'rgba(0, 0, 0, .45)',
//       },
//     })
//     .style({
//       lineWidth: 1,
//       stroke: '#fff',
//     });
//   chart.interaction('element-active')
//   return (
//     chart.render()
//   )
//
//
// }

const SP500UI = (props) => {
  const {Header, Footer} = Layout;
  // const style1 = {background: '#0092ff', padding: '0 0'};
  const style2 = {background: '#FF0000', padding: '0 0'};

  const { Column } = Table;
  return (

    <Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Row justify="center">
        <Col style={style2} xs={{span: 20}} sm={{span: 20}} md={{span: 20}} lg={{span: 17}} xl={{span: 17}}>
          {/*<CHART*/}
          {/*  dataList={props.dataList}*/}
          {/*  totalList={props.totalList}*/}
          {/*  daylList={props.dayList}*/}
          {/*  codeList={props.codeList}*/}
          {/*/>*/}

          <Table dataSource={props.dataList} size="middle" pagination={false} responsive="lg">
            {
              Object.keys(props.codeList).map((index) => {
                var item = props.codeList[index]
                return <Column title={item} dataIndex={item} key={index}/>
              })
            }
          </Table>
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