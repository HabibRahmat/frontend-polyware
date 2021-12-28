import React from "react";
import { Card, Col, Row } from "antd";
const ListProduct = () => {

    return (
        <div className='list-prod'>
            <Row gutter={[64]}>
                <Col md={7} sm={7} xl={7}>
                    <Card className="card-list-prod" >
                        <label className="label-top">モデナ</label>
                        <img alt='img-prod' src='/product-img.png' className='img-prod' />
                        <div style={{ marginTop: '20px' }}>
                            <label style={{ color: '#F5909B', fontWeight: 'bold' }}>¥5000</label>
                            <div style={{ float: 'right' }}>
                                <img alt='img-qr' src='/qr-code-black.png' />
                                <span style={{ fontWeight: 'bold'}}>¥3000</span>
                            </div>
                            <div style={{ marginTop: '20px',fontWeight: 'bold',width:'260px'}}>
                            <label>Mackgoli Set - Alumunium Kitchenware</label>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={7} sm={7} xl={7}>
                <Card className="card-list-prod" >
                        <label className="label-top">モデナ</label>
                        <img alt='img-prod' src='/product-img.png' className='img-prod' />
                        <div style={{ marginTop: '20px' }}>
                            <label style={{ color: '#F5909B', fontWeight: 'bold' }}>¥5000</label>
                            <div style={{ float: 'right' }}>
                                <img alt='img-qr' src='/qr-code-black.png' />
                                <span style={{ fontWeight: 'bold'}}>¥3000</span>
                            </div>
                            <div style={{ marginTop: '20px',fontWeight: 'bold',width:'260px'}}>
                            <label>Mackgoli Set - Alumunium Kitchenware</label>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={7} sm={7} xl={7}>
                <Card className="card-list-prod" >
                        <label className="label-top">モデナ</label>
                        <img alt='img-prod' src='/product-img.png' className='img-prod' />
                        <div style={{ marginTop: '20px' }}>
                            <label style={{ color: '#F5909B', fontWeight: 'bold' }}>¥5000</label>
                            <div style={{ float: 'right' }}>
                                <img alt='img-qr' src='/qr-code-black.png' />
                                <span style={{ fontWeight: 'bold'}}>¥3000</span>
                            </div>
                            <div style={{ marginTop: '20px',fontWeight: 'bold',width:'260px'}}>
                            <label>Mackgoli Set - Alumunium Kitchenware</label>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default ListProduct;