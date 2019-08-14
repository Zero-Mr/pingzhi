import React, { PureComponent } from 'react';
import {TickerWrap} from './style'
import { Cascader , InputNumber , Select ,Input ,Button } from 'antd';
import {Row,Col} from 'antd'
import axios from 'axios'
import apiList from '@src/apiData.json'
import {actionsCreators} from './store'
import { connect } from 'react-redux';

const { Option } = Select;

const options = [
    {
      value: '广东省',
      label: '广东省',
      children: [
        {
          value: '深圳市',
          label: '深圳市',
        },
        {
            value: '汕尾市',
            label: '汕尾市',
        }
      ]
    }
  ];


class Ticker extends PureComponent {

  constructor(props){
    super(props)
    this.state={
      mjText:false,
      telText:false,
      cityText:false,
      allb:"?",
      banb:"?",
      areaValue:'',
      selectOne:'平层',
      selectTwo:'简装',
      tel:"",
      cityselect:['广东省', '深圳市']
    }
    this.addDadtaBtn = this.addDadtaBtn.bind(this);
    this.cityonChange = this.cityonChange.bind(this);
    this.changeCityText = this.changeCityText.bind(this);
    this.inputonChange = this.inputonChange.bind(this);
    this.changemjtext = this.changemjtext.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangetwo = this.handleChangetwo.bind(this);
    this.telchange = this.telchange.bind(this);
    this.changetelText = this.changetelText.bind(this);
  }

    render() {
        
        let {
          mjText,
          telText,
          cityText,
          cityselect,
          selectOne,
          selectTwo,
          allb,
          banb
        } = this.state;

        let { telNumber } =this.props;
        let errortext;
        if( mjText ){
            errortext=<span className="error-text">请输入房屋面积</span>
        }  
        let telerror;
        if( telText ){
          telerror=<span className="error-text">请输入正确的手机号码</span>
        }
        let cityerror;
        if( cityText ){
          cityerror=<span className="error-text">请选择正确的地址</span>
        }

        return (
            <TickerWrap>
                <div className="tickercontiarn">
                    <h1>装修报价器</h1>
                    <p>已有 <span>{ telNumber }</span> 名业主申请此服务</p>
                    <p>按实测面积收费！拒绝为公摊面积买单</p>
                    <div className="tockeritem floatLeft">
                        <div className="tockerinneritem">
                            <Row>
                                <Col className="item" xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <label>所在城市：</label>
                                    <Cascader
                                            defaultValue={ cityselect }
                                            options={options}
                                            onChange={this.cityonChange}
                                            className={ cityText ? 'error-border' : '' }
                                            onFocus={ this.changeCityText }
                                        />
                                     {cityerror}   
                                </Col>
                                <Col className="item" xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <label className="label-mar">房屋面积: </label>
                                  <InputNumber 
                                    className={ mjText ? 'error-border' : '' } 
                                    size="large" min={ 1 }  
                                    onChange={ this.inputonChange }
                                    onFocus={ this.changemjtext } />
                                  <span>㎡</span>
                                  {errortext}
                                  
                                </Col>
                                <Col className="item" xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <label>户型结构：</label>
                                    <Select defaultValue={ selectOne } style={{ width: 150 }} onChange={ this.handleChange }>
                                        <Option value="平层">平层</Option>
                                        <Option value="复式">复式</Option>
                                        <Option value="别墅">
                                            别墅
                                        </Option>
                                    </Select>
                                </Col>
                                <Col className="item" xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <label>装修档次：</label>
                                    <Select defaultValue={ selectTwo } style={{ width: 150 }} onChange={ this.handleChangetwo }>
                                        <Option value="简装">简装</Option>
                                        <Option value="精装">精装</Option>
                                        <Option value="豪装">
                                            豪装
                                        </Option>
                                    </Select>
                                </Col>
                                <Col className="item" xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <label>您的电话：</label>
                                  <Input placeholder="您的电话" 
                                         className={ telText ? 'error-border telinput' : 'telinput'}
                                         onChange={ this.telchange }
                                         onFocus={ this.changetelText } />
                                  {telerror}
                                </Col>
                            </Row>
                             
                        </div>
                    </div>
                    <div className="tockeritem floatRight">
                         <h3>您家的装修预算</h3>
                         <div className="resultbox">
                            <p>全包：<span>{ allb } </span>  元 </p>
                            <p>半包：<span>{ banb } </span>  元 </p>
                         </div>
                    </div>
                    <div className="floatLeft addticker">
                         <Button type="primary" onClick={this.addDadtaBtn}>立即获取报价</Button>
                    </div>
                </div>
            </TickerWrap>
        )
    }
    componentDidMount(){
      this.props.getalltelnum()
    }

    changeCityText(){
      this.setState({
        cityText:false
      })
    }

    changemjtext(){
      this.setState({
        mjText:false
      })
    }

    changetelText(){
      this.setState({
        telText:false
      })
    }

    cityonChange(value) {
      this.setState({
        cityselect:value
      })
    }

    handleChange(value) {
      this.setState({
        selectOne:value
      })
    }
    handleChangetwo(value){
      this.setState({
        selectTwo:value
      })
    }

    inputonChange(value) {
       this.setState({
        areaValue:value
       })
    }
    telchange(e){
      this.setState({
        tel:e.target.value
      })
    }
    addDadtaBtn(){
      let { areaValue, tel, selectOne , selectTwo ,cityselect } = this.state;
      if(areaValue==="" || areaValue===null){
        this.setState({
          mjText:true
        })
        return false; 
      }
      if(tel===""){
        this.setState({
          telText:true
        })
        return false; 
      }
      if(cityselect.length===0){
        this.setState({
          cityText:true
        })
        return false; 
      }
      if(!(/^1[3456789]\d{9}$/.test(tel))){ 
        this.setState({
          telText:true
        })
        return false; 
    } 

      let data={
        areaValue,
        tel,
        selectOne,
        selectTwo,
        cityselect
      } 

      
      let thiss=this;

      axios.post(apiList.data[5].ticker, {
        data
      })
      .then(function (res) {
        thiss.setState({
          allb:res.data.data.price,
          banb:res.data.data.halt_price,
        })
        thiss.props.successteladd()
      })
    }

}


const mapState = (state) => {
  return {
      telNumber: state.getIn(['Ticker_reducre', 'alltel']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
      getalltelnum(){
          dispatch(actionsCreators.getalltelnumCreators())
      },
      successteladd(){
        dispatch(actionsCreators.successteladdCreators())
      }

  }
}

export default connect(mapState, mapDispathToProps)(Ticker)
