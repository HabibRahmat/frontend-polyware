import React from "react";
import { Row, Col, Card } from 'antd';
const ListCategories = () => {

    return (
        <div>
            <Row gutter={[24]} style={{ margin: "90px 50px 0px 50px" }}>
                <Col sm={4} md={4} xl={4}>
                    <Card className='card-list-cate '>
                        <div style={{ margin: "40px 0px 0px 50px" }}>
                            <img alt='bottle' src='/line-bottle.png' /><p />
                        </div>
                        <span style={{ margin: "40px 0px 0px 40px" }}>アルコール</span>
                    </Card>
                </Col>
                <Col sm={4} md={4} xl={4}>
                    <Card className='card-list-cate '>
                        <div style={{ margin: "40px 0px 0px 50px" }}>
                            <img alt='bottle' src='/chiong-sam.png' /><p />
                        </div>
                        <span style={{ margin: "40px 0px 0px 40px" }}>アルコール</span>
                    </Card>
                </Col>
                <Col sm={4} md={4} xl={4}>
                    <Card className='card-list-cate '>
                        <div style={{ margin: "40px 0px 0px 50px" }}>
                            <img alt='bottle' src='/fly-bird.png' /><p />
                        </div>
                        <span style={{ margin: "40px 0px 0px 40px" }}>アルコール</span>
                    </Card>
                </Col>
                <Col sm={4} md={4} xl={4}>
                    <Card className='card-list-cate '>
                        <div style={{ margin: "40px 0px 0px 50px" }}>
                            <img alt='bottle' src='/chinese-rice.png' /><p />
                        </div>
                        <span style={{ margin: "40px 0px 0px 40px" }}>アルコール</span>
                    </Card>
                </Col>
                <Col sm={4} md={4} xl={4}>
                    <Card className='card-list-cate '>
                        <div style={{ margin: "40px 0px 0px 50px" }}>
                            <img alt='bottle' src='/fly-bird.png' /><p />
                        </div>
                        <span style={{ margin: "40px 0px 0px 40px" }}>アルコール</span>
                    </Card>
                </Col>
                <Col sm={4} md={4} xl={4}>
                    <Card className='card-list-cate '>
                        <div style={{ margin: "80px 0px 0px 65px" }}>
                            <img alt='bottle' src='/small-right.png' /><p />
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[18]} style={{ marginTop: "140px" }}>
                <Col sm={12} md={12} xl={12}>
                    <Card style={{ height: "460px", backgroundColor: '#C4C4C4' }}>
                        <div style={{ marginLeft: "-25px", marginRight: "-25px", marginTop: "234px", height: "200px", background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.49) 0%, rgba(0, 0, 0, 0) 100%)' }}>
                            <div style={{ paddingLeft: "40px", paddingTop: "90px" }}>
                                <label style={{ color: "white" }}>Pierce Work Together with Japan Prime Minister</label>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col sm={12} md={12} xl={12}>
                    <Row gutter={[0, 18]}>
                        <Col sm={24} md={24} xl={24}>
                            <Card style={{ height: "220px", backgroundColor: '#C4C4C4' }}>
                                <div style={{ marginLeft: "-25px", marginRight: "-25px", marginTop: "74px", height: "120px", background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.49) 0%, rgba(0, 0, 0, 0) 100%)' }}>
                                    <div style={{ paddingLeft: "40px", paddingTop: "40px" }}>
                                        <label style={{ color: "white" }}>Pierce 2.0 Info</label>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={24} md={24} xl={24}>
                            <Card style={{ height: "220px", backgroundColor: '#C4C4C4' }}>
                                <div style={{ marginLeft: "-25px", marginRight: "-25px", marginTop: "74px", height: "120px", background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.49) 0%, rgba(0, 0, 0, 0) 100%)' }}>
                                    <div style={{ paddingLeft: "40px", paddingTop: "40px" }}>
                                        <label style={{ color: "white" }}>Miss Japan Support Pierce</label>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default ListCategories;