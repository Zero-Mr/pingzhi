import React,{PureComponent} from 'react';
import { Layout } from 'antd';
import {  Route ,Switch } from 'react-router-dom';
import Home from './Home'
import Brand_strength from './Brand_strength'
import Contact_Us from './Contact_Us'
import FreeServer from './Free_service'
import Case from './case'
import Details from './Details'
import Question from './Question'
import Know_how from './Process'
import Question_and_answer from './Question_and_answer'
import Search from './search'
import Notexist from './404'
const {  Content } = Layout;

class ContentWrap extends PureComponent {
    render(){
        return(
            <Content>
                <Switch>
                    <Route path={["/", "/index.html"]} exact component={Home} />
                    <Route path='/Brand-strength' exact component={Brand_strength} />
                    <Route path='/Contact-us' exact component={Contact_Us} />
                    <Route path='/Free-service' exact component={FreeServer} />
                    <Route path='/Decorate-a-case/:id' component={Case} />
                    <Route path='/Details/:id' component={Details} />
                    <Route path='/Question-and-answer/:id' component={Question_and_answer} />
                    <Route path='/Decorate-a-knowledge' component={Question} />
                    <Route path='/Know-how/:id/:classification' component={Know_how} />
                    <Route path='/search/:text' component={Search} />
                    <Route component={Notexist} />
                </Switch>
            </Content>
        )
    }
}

export default ContentWrap