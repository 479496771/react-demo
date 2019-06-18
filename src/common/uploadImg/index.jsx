import React from 'react'
import { Upload, Icon, Modal } from 'antd';
import { connect } from 'react-redux'
import { createAction } from './store'
import $axios from '../../axios/index'

class PicturesWall extends React.Component {
    render() {
        const { previewVisible, previewImage, fileList, handleChange, handlePreview, handleCancel, count, name = '添加图片' } = this.props;
        const header = {
            'Accept': "application/json, text/plain, */*",
            'Content-Type': "application/json;charset=utf-8",
        }
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">{name}</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="http://localhost:9527/reactApi/api/uploadImg"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    name='file'
                    accept='image/*'
                >
                    {fileList.length >= count ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        previewImage: state.get('addImg').get('previewImage'),
        previewVisible: state.get('addImg').get('previewVisible'),
        fileList: state.get('addImg').get('fileList').toJS()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange({ fileList }) {
            console.log(fileList)
            // $axios.post('/api/uploadImg', fileList[0]).then(res => {
            //     console.log(res)
            // })
            console.log(this)
            const action = createAction.addIndexImgAction(fileList)
            dispatch(action)
        },

        handleCancel() {
            const action = createAction.closePreviewVisibleAction()
            dispatch(action)

        },

        handlePreview(file) {
            const action = createAction.oppenPreviewVisibleAction(file)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PicturesWall)