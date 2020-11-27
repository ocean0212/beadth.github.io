import React, {Component} from 'react';
import {connect} from "react-redux";

import {getMarketSomaHold, geNewyorktWei} from "./store/actionCreators";
import {Col, Row,Collapse} from "antd";
import {Loading} from "../USUI";
import {MarketSomaHoldChart, WeiChart} from "./chart";

const { Panel } = Collapse;


class Economic extends Component{

  render() {
    return (
      <React.Fragment>
        <Row justify="center" align="top">
          <Col xs={{span: 20}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
            <Collapse defaultActiveKey={['eco2']} >
              <Panel header="美联储披露持仓" key="eco1" disabled>
                {
                  this.props.somaHolDataStatus
                    ? <Loading/>
                    : <MarketSomaHoldChart {...this.props}/>
                }
              </Panel>
              <Panel header="每周经济指数（WEI）" key="eco2">
                {
                  this.props.weiStatus
                    ? <Loading/>
                    : <WeiChart {...this.props}/>
                }
              </Panel>
              <Panel header="油金比/铜金比" key="eco3" disabled>
                {
                  this.props.weiStatus
                    ? <Loading/>
                    : <WeiChart {...this.props}/>
                }
              </Panel>
              <Panel header="美国5/10年利率" key="eco4" disabled>
                {
                  this.props.weiStatus
                    ? <Loading/>
                    : <WeiChart {...this.props}/>
                }
              </Panel>
            </Collapse>

          </Col>
        </Row>
      </React.Fragment>);
  }
  componentDidMount() {
    this.props.getSomaHold();
    this.props.getWei();
  }
}

const mapState = (state) => {
  return {
    somaHolDataList: state.getIn(['usEconomic', 'somaHolDataList']),
    somaHolDataStatus: state.getIn(['usEconomic', 'somaHolDataStatus']),
    weiStatus: state.getIn(['usEconomic', 'weiStatus']),
    weiDatalist: state.getIn(['usEconomic', 'weiDatalist']),
  }
};

// redux 数据修改逻辑映射 store.dispatch, props
const mapDispatch = (dispatch) => ({
  // load data
  getSomaHold(){
    dispatch(getMarketSomaHold())
  },
  getWei(){
    dispatch(geNewyorktWei())
  }
})

export default connect(mapState, mapDispatch)(Economic)