import React from 'react'
import { Input, Tooltip , Icon} from 'antd';
import {actionsCreators} from './store'
import { connect } from 'react-redux';

function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 4) {
    result = `${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}


class NumericInput extends React.Component {
  onChange = e => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  };

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange(value.slice(0, -1));
    }
    if (onBlur) {
      onBlur();
    }

  };

  render() {
    const { value } = this.props;
    const title = value ? (
      <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
    ) : (
      '您的手机号码'
    );
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
       
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="您的手机号码"
          maxLength={25}
          prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
      </Tooltip>
    );
  }
}

class NumericInputDemo extends React.Component {

  render() {
    const { TelinputBlur,telNumber } =this.props;
    return (
      <NumericInput 
        value={ telNumber } 
        onChange = { (e)=> TelinputBlur(e) }
        />
    );
  }
}

const mapState = (state) => {
  return {
      telNumber: state.getIn(['Brand_strength', 'telvalue']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
      TelinputBlur(e){
          let value=e;
          dispatch(actionsCreators.TelinputBlurCreators(value))
      }
  }
}

export default connect(mapState, mapDispathToProps)(NumericInputDemo)