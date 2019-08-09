import React,{PureComponent} from 'react';
import { Layout } from 'antd';
import {  Route } from 'react-router-dom';
import Home from './Home'
import Brand_strength from './Brand_strength'
const {  Content } = Layout;

class ContentWrap extends PureComponent {
    render(){
        return(
            <Content>
                <Route path={["/", "/index.html"]} exact component={Home} />
                <Route path='/Brand-strength' exact component={Brand_strength} />
            </Content>
        )
    }
}

export default ContentWrap