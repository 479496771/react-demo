import React, { Fragment } from 'react'
import { Row, Col, Button, Input } from 'antd'
import { HeaderWrapper } from './style.jsx'
import './index.css'

const Search = Input.Search;

const Header = (props) => {
    return (
        <Fragment>
            <HeaderWrapper>
                <div className="main">
                    <Row>
                        <Col span={16}>
                            <Search
                                placeholder="请输入你要查询的文章"
                                onSearch={value => console.log(value)}
                                className="search"
                            />
                        </Col>
                        <Col span={8}>
                            <Button className="add_button" onClick={() => { props.isLogin ? props.addClick() : props.buttonClick() }}>
                                {
                                    props.isLogin ? '添加' : '登录'
                                }
                            </Button>
                        </Col>
                    </Row>
                </div>
            </HeaderWrapper>
        </Fragment>
    )
}

export default Header