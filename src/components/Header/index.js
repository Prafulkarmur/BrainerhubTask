import { Badge, Button, Space } from 'antd'
import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { logout } from '../../redux/Actions/counterActions';

const FixedHeader = styled.div`
    background-color: #F3F5F9;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const CartIcon = styled.div`
    font-size: 25px;
`
const HeaderLogo = styled.img`
    height: 40px;
    width: auto;
`
function Header({ cart, dispatch }) {
    const handleLogOut = () => {
        localStorage.removeItem("token")
        dispatch(logout())
    }
    return (
        <FixedHeader>
            <Link to="/" > <HeaderLogo src='https://www.brainerhub.com/images/brainerhub_logo.svg' /></Link>
            <div>
                <Space size='large' align='center'>
                    <div className=' text-primary hover:text-primary-600 text-base'>
                        <Link to="/cart">
                            <Badge count={cart?.quantity} color="primary">
                                <CartIcon>
                                    <ShoppingCartOutlined />
                                </CartIcon>
                            </Badge>
                        </Link>
                    </div>
                    <Button size='large' type="primary" onClick={handleLogOut}>
                        LogOut
                    </Button>
                </Space>
            </div>
        </FixedHeader>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state?.cart,
    };
};

export default connect(mapStateToProps)(Header)