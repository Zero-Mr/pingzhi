import React,{PureComponent} from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';
class Statisticbox extends PureComponent {
    render(){
        return(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card>
                  <Statistic
                    title="客户满意度"
                    value={98}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card>
                  <Statistic
                    title="专业设计师专属定制"
                    value={4000}
                    precision={0}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="usergroup-add" />}
                    suffix="+"
                  />
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-center">
                <Card>
                  <Statistic
                    title="直营分公司更规范"
                    value={90}
                    precision={0}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="deployment-unit" />}
                    suffix="+"
                  />
                </Card>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card>
                  <Statistic
                    title="中高端业主口碑认证"
                    value={80}
                    precision={0}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="like" />}
                    suffix="万"
                  />
                </Card>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card>
                  <Statistic
                    title="透明0增项漏项"
                    value={0}
                    precision={0}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="smile" />}
                    suffix="+"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        )
    }
}

export default Statisticbox