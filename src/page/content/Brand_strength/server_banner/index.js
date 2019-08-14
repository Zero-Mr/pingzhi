import React, { PureComponent } from 'react';
import {
    ServerbannerWrap
} from './style'
import { Icon } from 'antd';
import NumericInputDemo from './telui'
import Userinput from './usernameui'
import Userhome from "./userhome"
import Freebtn from "./freebtn"
import { connect } from 'react-redux';
import axios from 'axios'
import apiList from '@src/apiData.json'
import { actionsCreators } from './store'

class ServerBanner extends PureComponent {

    render() {
        return (
            <div>
                <ServerbannerWrap>
                    <div className="collect-number">
                        <div className="collect-numberbox">
                            <h2>10秒钟，快速开启您的装修之旅</h2>
                            <p>已有<span>{this.props.alltelnum}</span>人预约成功</p>
                            <Userinput />
                            <NumericInputDemo />
                            <Userhome />
                            <Freebtn />
                            <p className="commitment"><Icon type="warning" />我们承诺：品智装饰提供该项免费服务，绝不产生任何费用，为了您的利益以及我们的口碑，您的隐私将被严格保密。</p>
                        </div>
                    </div>
                </ServerbannerWrap>
            </div>
        )
    }
    componentDidMount(){
        this.props.getallnum()
    }
}

const mapState = (state) => {
    return {
        alltelnum: state.getIn(['Brand_strength', 'alltel']),
    }
  }
  
  const mapDispathToProps = (dispatch) => {
    return {
        getallnum(){
            axios.get(apiList.data[6].alltelnum).then((res)=>{
                let num = res.data
                dispatch(actionsCreators.getallnumCreators(num))
            })
        }
    }
        
}  


export default connect(mapState, mapDispathToProps)(ServerBanner)