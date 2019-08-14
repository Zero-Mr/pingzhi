import React, { PureComponent } from 'react';
import { AppointmentWrap } from './style'
import imgsrc_1 from '@src/statics/index/img_site1.png'
import imgsrc_2 from '@src/statics/index/img_site2.png'
import imgsrc_3 from '@src/statics/index/img_site3.png'
import imgsrc_4 from '@src/statics/index/img_site4.png'
import imgsrc_5 from '@src/statics/index/img_site5.png'
import { Row, Col } from 'antd';


class Appointment extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            srclist: [imgsrc_1, imgsrc_2, imgsrc_3, imgsrc_4, imgsrc_5],
            datalist: [
                { "title": "成品保护", "des": "用居众专用保护膜对电梯间，墙面，地面等进行成品保护" },
                { "title": "电管铺设", "des": "分色铺设，规范施工，方便安装及以后检查维护" },
                { "title": "规范工地", "des": "所有工具材料按指示整齐堆放，保证施工现场整齐干净" },
                { "title": "全彩放样", "des": "全彩放样工艺，立体感强，可最大化实现业主的设计需求" },
                { "title": "参观工地", "des": "好工地经得起对比，我们随时接受业主参观检验" }
            ]
        }
    }
    render() {
        const { srclist, datalist } = this.state;
        return (
            <AppointmentWrap>
                <div className="AppointmentWrap_cont">
                    <h1 className="text-center">预约参观工地</h1>
                    <p className="text-center">好工地造就好品质，装修前参观工地很有必要</p>
                    <Row>
                        {
                            datalist.map((item, index) => {
                                return (
                                    <Col key={index} className="item" xs={12} sm={12} md={4} lg={4} xl={4}>
                                        <img src={srclist[index]} alt="" className="imgres" />
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.des}
                                        </p>
                                    </Col>
                                )
                            })
                        }

                    </Row>

                </div>
            </AppointmentWrap>
        )
    }
}

export default Appointment