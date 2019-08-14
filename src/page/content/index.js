import React,{PureComponent} from 'react';
import { Layout } from 'antd';
import {  Route } from 'react-router-dom';
import Home from './Home'
import Brand_strength from './Brand_strength'
import Contact_Us from './Contact_Us'
import FreeServer from './Free_service'
const {  Content } = Layout;

class ContentWrap extends PureComponent {
    render(){
        return(
            <Content>
                <Route path={["/", "/index.html"]} exact component={Home} />
                <Route path='/Brand-strength' exact component={Brand_strength} />
                <Route path='/Contact-us' exact component={Contact_Us} />
                <Route path='/Free-service' exact component={FreeServer} />
            </Content>
        )
    }
}

export default ContentWrap