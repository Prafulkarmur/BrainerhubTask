import { Button, Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { addProduct } from '../../redux/Actions/cartAction'
import { connect } from 'react-redux'

function ReactCard({ data, dispatch }) {
  const handleClick = () => {
    dispatch(addProduct({ data }))
  }
  return (
    <Card
      cover={<img style={{ height: '270px', objectFit: "cover" }} src={require(`../../assets/${data?.image}`)} alt={data.name} />}
      style={{ overflow: "hidden" }}
    >
      <Row>
        <Col xl={12} xs={12}>
          <Meta title={`Name: ${data?.name}`} description={`Price: ${data?.price}`} />
        </Col>
        <Col xl={12} xs={12}>
          <Button onClick={handleClick}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default connect()(ReactCard)