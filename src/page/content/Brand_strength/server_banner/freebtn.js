import React, { PureComponent } from 'react';

import { Button } from 'antd';
import {actionsCreators} from './store'
import { connect } from 'react-redux';
import axios from 'axios'
import apiList from '@src/apiData.json'

class Freebtn extends PureComponent {
    
    render() {
        const { clickaddbtn ,username,telNumber,homeaddress,freebtntext} = this.props;
        return (
            <Button type="primary free-btn" onClick={ ()=> clickaddbtn(username,telNumber,homeaddress) }>{freebtntext}</Button>
        )
    }
    componentDidMount(){
        this.props.setfreebtntext()
    }

}

const mapState = (state) => {
    return {
        username: state.getIn(['Brand_strength', 'uservalue']),
        telNumber: state.getIn(['Brand_strength', 'telvalue']),
        homeaddress: state.getIn(['Brand_strength', 'homevalue']),
        freebtntext: state.getIn(['Brand_strength', 'freebtn']),
    }
}


const mapDispathToProps = (dispatch) => {
    return {
        clickaddbtn(username,telNumber,homeaddress){
            if(username === "" || telNumber === ""){
                alert('姓名和电话号码不能为空')
                return false
            }else if(!(/^1[3456789]\d{9}$/.test(telNumber))){
                alert('电话号码错误')
                return false
            }
            else{
                let data ={
                    username,
                    telNumber,
                    homeaddress
                }
                
                axios.post(apiList.data[7].adduserdata,{
                    data
                }).then((res)=>{
                    if(res.data.code === 1){
                        alert(res.data.msg+'，我们的工作人员将尽快和您取得联系')
                        dispatch(actionsCreators.resultuserdataCreators())
                    }
                })
            }
        },
        setfreebtntext(){
            dispatch(actionsCreators.setfreebtntextCreators())
        }
    }
}

export default connect(mapState, mapDispathToProps)(Freebtn)

