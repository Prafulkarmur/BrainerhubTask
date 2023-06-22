import React from 'react'
import { connect } from 'react-redux'
import { Card, Col, Row } from 'antd'
import ReactCard from '../../components/ReactCard'
import imageData from '../../utils/appData.json'


function Dashboard() {

  return (
    <>
      <Card bordered={false}>
        <Row gutter={[24, 10]}>
          {
            imageData.map((val, index) => {
              return <Col xs={24} lg={6} index={index}>
                <ReactCard data={val} />
              </Col>
            })
          }
        </Row>
      </Card>
    </>
  )
}

export default connect()(Dashboard);

