import React, {Component} from 'react';
import {connect} from "react-redux";

import {getMarketSomaHold} from "./store/actionCreators";
import {Col, Row} from "antd";
import {Loading} from "../USUI";
import {MarketSomaHoldChart} from "./chart";

class Economic extends Component{

  render() {
    return (
      <React.Fragment>
        <Row justify="center" align="top">
          <Col xs={{span: 20}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
            {
              this.props.somaHolDataStatus
              ? <Loading/>
              : <MarketSomaHoldChart {...this.props}/>
            }
          </Col>
        </Row>
      </React.Fragment>);
  }
  componentDidMount() {
    console.log(this.props.getSomaHold, 'componentDidMount')
    this.props.getSomaHold();
  }
}

const mapState = (state) => {
  return {
    somaHolDataList: state.getIn(['usEconomic', 'somaHolDataList']),
    somaHolDataStatus: state.getIn(['usEconomic', 'somaHolDataStatus']),
  }
};

// redux 数据修改逻辑映射 store.dispatch, props
const mapDispatch = (dispatch) => ({
  // load data
  getSomaHold(){
    dispatch(getMarketSomaHold())
  }
})

export default connect(mapState, mapDispatch)(Economic)