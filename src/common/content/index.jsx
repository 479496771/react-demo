import React, { Fragment } from 'react'
import { Icon } from 'antd'
import './index.css'

const Content = () => {
    return (
        <Fragment>
            <div className="itemBox">
                <p className="title">这是title</p>
                <div className="con_con">
                    <div className="leftBox">
                        <div className="textBox">
                            <p className="textContents" style={{ "WebkitBoxOrient": "vertical" }}>
                                这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,这是text内容,
                            </p>
                        </div>
                        <p>
                            <Icon type="clock-circle" />
                            &nbsp;{'2019-05-14'}
                            <Icon type="eye" style={{ "marginLeft": "20px" }} />
                            &nbsp;{'66'} 次
                        </p>
                    </div>
                    <div className="imgs" style={{ "backgroundImage": "url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557912545&di=6c2550ac78749e0aaad9a128b5c3047d&imgtype=jpg&er=1&src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F02%2F04%2FChMkJ1bKyCmIQizQAAJnT9nD_WIAALH-AF48zgAAmdn527.jpg')" }} ></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Content
