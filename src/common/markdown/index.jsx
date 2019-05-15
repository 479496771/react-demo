import React from 'react'
import MdEditor from 'react-markdown-editor-lite'

const MarkDown = (props) => {
    const { addContentChange } = props
    // let mdEditor = ''
    const handleEditorChange = ({ html, text }) => {
        addContentChange(html)
    }
    const handleImageUpload = (file, callback) => {
        const reader = new FileReader()
        reader.onload = () => {
            const convertBase64UrlToBlob = (urlData) => {
                let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1]
                let bstr = atob(arr[1])
                let n = bstr.length
                let u8arr = new Uint8Array(n)
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n)
                }
                return new Blob([u8arr], { type: mime })
            }
            const blob = convertBase64UrlToBlob(reader.result)
            setTimeout(() => {
                console.log(blob)
                // setTimeout 模拟oss异步上传图片
                // 当oss异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
                callback('https://avatars0.githubusercontent.com/u/21263805?s=40&v=4')
            }, 1000)
        }
        reader.readAsDataURL(file)
    }
    // const handleGetMdValue = () => {
    //     mdEditor && alert(mdEditor.getMdValue())
    // }
    // const handleGetHtmlValue = () => {
    //     mdEditor && alert(mdEditor.getHtmlValue())
    // }
    return (
        <div>
            {/* <nav>
                <button onClick={() => { handleGetMdValue() }} >getMdValue</button>
                <button onClick={() => { handleGetHtmlValue() }} >getHtmlValue</button>
            </nav> */}
            <MdEditor
                // ref={node => {
                //     mdEditor = node
                // }}
                value={''}
                style={{ height: '80vh' }}
                config={{
                    view: {
                        menu: true,
                        md: true,
                        html: true
                    }
                }}
                onChange={({ text, html }) => { handleEditorChange({ text, html }) }}
                onImageUpload={(file, callback) => { handleImageUpload(file, callback) }}
            />
        </div>
    )
}


export default MarkDown
