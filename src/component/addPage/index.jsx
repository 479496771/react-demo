import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Input, Button, message, Icon } from 'antd';
import { createAction } from './store'
import Markdown from '../../common/markdown'
import PicturesWall from '../../common/uploadImg'
import '../index/index.css'
import './index.css'


const AddPage = (props) => {
    const { titleChange, addTitle, addContent, addContentChange, submit, history, backClick } = props
    return (
        <Fragment>
            <div className="contentMain">
                <div className="addTitle">
                    标题：
                    <Input className="addTitleInput" placeholder="input with clear icon" allowClear onChange={(e) => { titleChange(e) }} />
                    <span style={{ "float": "right" }} onClick={() => { backClick(history) }} >
                        返回{' '}
                        <Icon type="rollback" />
                    </span>
                </div>
                <div className="indexImg">
                    <p>文章首页图片：</p>
                    <PicturesWall count={1} name={'首页图片'} />
                </div>
                <div className="addContent">
                    <Markdown addContent={addContent} addContentChange={(value) => { addContentChange(value) }} />
                </div>
                <Button className="submit" onClick={() => { submit(addTitle, addContent, history) }} type="primary">发布</Button>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        addTitle: state.get('add').get('addTitle'),
        addContent: state.get('add').get('addContent')

    }
}

const mapDsipatchToProps = (dispatch) => {
    return {
        titleChange(e) {
            const action = createAction.addTitleAction(e.target.value)
            dispatch(action)
        },
        addContentChange(value) {
            const action = createAction.addContentAction(value)
            dispatch(action)
        },
        submit(addTitle, addContent, history) {
            if (addTitle && addContent) {
                alert(addTitle, addContent)
                history.push('/')
            } else {
                message.warning('题目和内容都不能为空');

            }
        },
        backClick(history) {
            history.goBack()
        }
    }
}


export default connect(mapStateToProps, mapDsipatchToProps)(AddPage)