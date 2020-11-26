import {Col, Row} from "antd";
import React from "react";
import {BreadthLeftChart, BreadthLineChart, BreadthRightChart} from "./chart";
import {Loading} from "./USUI";


export const BreadthHeatMap = (props) => {

  return (
    <React.Fragment>
      <Row justify="center" align="top">
        <Col xs={{span: 20}} sm={{span: 19}} md={{span: 20}} lg={{span: 16}} xl={{span: 16}} align="top">
          {
            props.isLoading
              ? <Loading/>
              : <BreadthLineChart data={props.lineDataList} date={props.breadthDateRange}/>
          }
        </Col>
      </Row>

      <Row justify="center" align="top">

        <Col xs={{span: 0}} sm={{span: 19}} md={{span: 18}} lg={{span: 14}} xl={{span: 14}} >
          {
            props.isLoading
              ? <Loading/>
              : <BreadthLeftChart data={props.mv20DataList} days={props.dayList}/>

          }
        </Col>

        <Col xs={{span: 0}} sm={{span: 2}} md={{span: 2}} lg={{span: 2}} xl={{span: 2}} offset={1} align="top">
          {
            props.isLoading
              ? <Loading/>
              : <BreadthRightChart data={props.totalList} days={props.dayList}/>
          }
        </Col>
      </Row>
    </React.Fragment>
  )
}