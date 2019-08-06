import React from 'react';
import { GlobalStyled } from './style.js';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.css'


import { Layout } from 'antd';
import HeaderWrap from './common/header'
import ContentWrap from './page/content'
import FooterWrap from './common/footer'

function App() {

  return (
    <Provider store={store}>
      <div>
        {/* 全局样式 */}
        <GlobalStyled />
        {/* 使用路由 */}
        <BrowserRouter>
          <Layout>
            <HeaderWrap />
            <ContentWrap />
            <FooterWrap />
          </Layout>

          {/* <Route path={["/", "/index.html"]} exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/write" exact component={Write} /> */}
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
