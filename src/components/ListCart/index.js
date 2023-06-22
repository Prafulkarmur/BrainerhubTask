import { Button, Col, Row, Space } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { styled } from 'styled-components'
import { removeProduct } from '../../redux/Actions/cartAction'

    const ListDiv =styled.div`
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    `

function ListCart({data,dispatch}) {
    const removeItemFromCart=(id)=>{
        dispatch(removeProduct(id))
    }
  return (
    <div>
        <ListDiv>
            <Row gutter={[24,24]}>
                <Col span={8}>
                <img style={{width:'100%',height:'140px', objectFit:'cover'}} src={require(`../../assets/${data?.data?.image}`)} alt={data?.data?.name}>
                </img>
                </Col>
                <Col span={16}>
                    <Space direction='vertical'>
                        <Space>
                            <h3>{data?.data?.name}</h3>
                            <p>{data?.data?.price}</p>
                        </Space>
                        <div>
                            <Button onClick={()=>removeItemFromCart(data?.data?.id)}>
                                Remove From Card
                            </Button>
                        </div>
                    </Space>
                </Col>
            </Row>               
            <div>
            </div>
        </ListDiv>
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
      cart: state?.cart,
    };
  };
export default connect(mapStateToProps)(ListCart)