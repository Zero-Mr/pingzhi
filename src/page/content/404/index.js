import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Result, Button } from 'antd';
class Notexist extends PureComponent {
    render() {
        return (
            <Result
            status="404"
            title="404"
            subTitle="抱歉，您访问的页面不存在。"
            extra={<Button type="primary" onClick={this.gobackhome}>回到主页</Button>}
          />
        )
    }

    componentDidMount() {
        document.title = '未找到页面'
    }
    gobackhome(){
        window.location.href = '/'
    }
}


export default connect(null, null)(Notexist)