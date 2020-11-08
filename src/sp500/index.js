import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {connect} from "react-redux"

import {Layout, Menu, Button} from 'antd';

import {getMtData,} from "./store/actionCreators";
import {LeftChart, RightChart} from "./chart";
import {PAYPAL_URL} from "../constants";


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
    const {dataList, totalList, codeList, dayList, mv20CodeList, mv20DataList, isLoading} = this.props
    return (
      <Layout>
        <Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Market Breadth</Menu.Item>
          </Menu>
        </Header>
        <Row justify="center" style={{padding: '12px 0'}}>
          <Col xs={{span: 5, offset: 0}} lg={{span: 5, offset: 1}}>
            <Button type="primary" onClick={() => {
              this.props.initData();
            }}>刷新</Button>
          </Col>
          <Col xs={{span: 5, offset: 0}} lg={{span: 5, offset: 1}}>
            <Button danger onClick={() => {
              window.open(PAYPAL_URL);
            }}>赞助</Button>
          </Col>

        </Row>
        <Row justify="center">

          <Col xs={{span: 18}} sm={{span: 18}} md={{span: 18}} lg={{span: 17}} xl={{span: 17}}>
            {
              isLoading
                ? <div>Loading</div>
                : <LeftChart data={mv20DataList} days={dayList}/>

            }

            {/*<Table columns={columns} dataSource={props.dataList} size="middle" pagination={false} responsive="lg">*/}
            {/*</Table>*/}
          </Col>
          <Col xs={{span: 3}} sm={{span: 3}} md={{span: 3}} lg={{span: 4}} xl={{span: 4}}>
            {
              isLoading
                ? <div>Loading</div>
                : <RightChart data={totalList} days={dayList}/>

            }

          </Col>
        </Row>
        <Footer style={{textAlign: 'center'}}>Market Breadth ©2020 Created by breadth.app</Footer>
      </Layout>
    )
  }

  componentDidMount() {
    this.props.initData();

    this.refreshData = setInterval(() => {
      this.props.initData();
    }, 1000 * 60 * 10)
  }

  componentWillUnmount() {
    clearInterval(this.refreshData);
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
          <div>
          </div>
          {/*<CHART*/}
          {/*  dataList={props.dataList}*/}
          {/*  totalList={props.totalList}*/}
          {/*  daylList={props.dayList}*/}
          {/*  codeList={props.codeList}*/}
          {/*  mv20DataList={props.mv20DataList}*/}
          {/*  mv20CodeList={props.mv20CodeList}*/}
          {/*/>*/}

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
    mv20CodeList: state.getIn(['sp500', 'mv20CodeList']),
    mv20DataList: state.getIn(['sp500', 'mv20DataList']),
    isLoading: state.getIn(['sp500', 'isLoading']),
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
