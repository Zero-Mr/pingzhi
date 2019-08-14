import React, { PureComponent } from 'react';
import { Input, Icon } from 'antd';
import {actionsCreators} from './store'
import { connect } from 'react-redux';


class Userinput extends PureComponent {

    render() {
        const { UserinputBlur , username } = this.props;
        return (
                    <Input
                        className="userinput"
                        placeholder="你的姓名"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        value = { username }
                        onChange = { (e) => UserinputBlur(e) }
                    />
        )
    }
}

const mapState = (state) => {
    return {
        username: state.getIn(['Brand_strength', 'uservalue']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        UserinputBlur(e){
            let value = e.target.value;
            dispatch(actionsCreators.UserinputBlurCreators(value))
        }
    }
}

export default connect(mapState, mapDispathToProps)(Userinput)