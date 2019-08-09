import React, { PureComponent } from 'react';
import {TickerWrap} from './style'
import { Cascader , InputNumber , Select ,Input ,Button } from 'antd';
import {Row,Col} from 'antd'
import axios from 'axios'

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
      addnum:9047,
      allb:"?",
      banb:"?",
      areaValue:'',
      selectOne:'平层',
      selectTwo:'简装',
      tel:"",
      cityselect:['广东省', '深圳市']
    }
  }

    render() {
        let errortext;
        if(this.state.mjText){
            errortext=<span className="error-text">请输入房屋面积</span>
        }  
        let telerror;
        if(this.state.telText){
          telerror=<span className="error-text">请输入正确的手机号码</span>
        }
        let cityerror;
        if(this.state.cityText){
          cityerror=<span className="error-text">请选择正确的地址</span>
        }

        return (
            <TickerWrap>
                <div className="tickercontiarn">
                    <h1>装修报价器</h1>
                    <p>已有 <span>{this.state.addnum}</span> 名业主申请此服务</p>
                    <p>按实测面积收费！拒绝为公摊面积买单</p>
                    <div className="tockeritem floatLeft">
                        <div className="tockerinneritem">
                            <Row>
                                <Col className="item" xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <label>所在城市：</label>
                                    <Cascader
                                            defaultValue={this.state.cityselect}
                                            options={options}
                                            onChange={this.cityonChange.bind(this)}
                                            className={ this.state.cityText ? 'error-border' : '' }
                                            onFocus={ this.changeCityText.bind(this) }
                                        />
                                     {cityerror}   
                                </Col>
                                <Col className="item" xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <label className="label-mar">房屋面积: </label>
                                  <InputNumber 
                                    className={ this.state.mjText ? 'error-border' : '' } 
                                    size="large" min={1}  
                                    onChange={this.inputonChange.bind(this)}
                                    onFocus={this.changemjtext.bind(this)} />
                                  <span>㎡</span>
                                  {errortext}
                                  
                                </Col>
                                <Col className="item" xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <label>户型结构：</label>
                                    <Select defaultValue={this.state.selectOne} style={{ width: 150 }} onChange={this.handleChange.bind(this)}>
                                        <Option value="平层">平层</Option>
                                        <Option value="复式">复式</Option>
                                        <Option value="别墅">
                                            别墅
                                        </Option>
                                    </Select>
                                </Col>
                                <Col className="item" xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <label>装修档次：</label>
                                    <Select defaultValue={this.state.selectTwo} style={{ width: 150 }} onChange={this.handleChangetwo.bind(this)}>
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
                                         className={ this.state.telText ? 'error-border telinput' : 'telinput'}
                                         onChange={this.telchange.bind(this)}
                                         onFocus={this.changetelText.bind(this)} />
                                  {telerror}
                                </Col>
                            </Row>
                             
                        </div>
                    </div>
                    <div className="tockeritem floatRight">
                         <h3>您家的装修预算</h3>
                         <div className="resultbox">
                            <p>全包：<span>{this.state.allb} </span>  元 </p>
                            <p>半包：<span>{this.state.banb} </span>  元 </p>
                         </div>
                    </div>
                    <div className="floatLeft addticker">
                         <Button type="primary" onClick={this.addDadtaBtn.bind(this)}>立即获取报价</Button>
                    </div>
                </div>
            </TickerWrap>
        )
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

      axios.post('http://test.pz.com/api/quote/getQuote', {
        data
      })
      .then(function (response) {
        console.log(response);
      })
    }

}

export default Ticker
