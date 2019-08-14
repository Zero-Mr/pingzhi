import React, { PureComponent } from 'react';

import { Input, Icon } from 'antd';
import {actionsCreators} from './store'
import { connect } from 'react-redux';

class Userhome extends PureComponent {

    render() {
        const { Userhomesetval } = this.props;
        return (
            <Input
            className="userhome"
            placeholder="你的楼盘"
            prefix={<Icon type="hdd" style={{ color: 'rgba(0,0,0,.25)' }} />}
            onBlur = { (e) => Userhomesetval(e) }
        />
        )
    }

}


const mapDispathToProps = (dispatch) => {
    return {
        Userhomesetval(e){
            let value = e.target.value;
            dispatch(actionsCreators.UserhomesetvalCreators(value))
        }
    }
}

export default connect(null, mapDispathToProps)(Userhome)