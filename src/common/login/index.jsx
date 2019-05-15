import React, { Fragment } from 'react'
import { Modal, Button, Form, Icon, Input } from 'antd';
import './index.css'

const Login = (props) => {
    const { getFieldDecorator,validateFields } = props.form;
    const { close, sure, confirmLoading} = props
    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                sure(values)
            }
        });
    };
    return (
        <Fragment>
            <Modal
                title="Title"
                visible={true}
                // onOk={(e,data)=>{sure(e,data)}}
                onCancel={()=>{close()}}
                confirmLoading={confirmLoading}
                footer = {null}
            >     
                <Form onSubmit={(e)=>{handleSubmit(e)}} id="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" id="login-form-button">
                           登录
                        </Button>
                     </Form.Item>
                </Form>
            </Modal>
        </Fragment>
    )
}

const LoginUi =  Form.create({ name: 'normal_login' })(Login)
export default LoginUi