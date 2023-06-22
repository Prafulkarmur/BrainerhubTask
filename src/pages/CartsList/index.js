import { Button, Card, Col, Result, Row } from 'antd';
import React from 'react'
import { connect } from 'react-redux'
import ListCart from '../../components/ListCart';
import { Link } from 'react-router-dom';

function CartList({ cart: { products } }) {
    return (
        <>
            <Card bordered={false}>
                {products.length !== 0 ?
                    <Row gutter={[24, 24]}>
                        {products?.map((val, index) => {
                            return <Col xs={24} sm={8}>
                                <ListCart data={val} key={index} />
                            </Col>
                        })}
                    </Row> :
                    <Result
                        status="404"
                        title="Your Card Is Empty"
                        subTitle="Sorry, the card you visited is empty."
                        extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
                    />}
            </Card>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state?.cart,
    };
};

export default connect(mapStateToProps)(CartList)
