import React from "react";
import { Row, Col, Card } from 'antd';

const BottomContent =()=>{

    return(
        <Row>
            <Col sm={24} md={24} xl={24}>
            <Card style={{height: '300px',backgroundColor:'#C4C4C4', marginTop:'40px'}}>
                <div style={{margin:'100px 0px 0px 320px'}}>
                    <img alt='qrcode' src='/qr-code.png'/>
                    <label style={{color:'#FFFFFF',fontWeight:'bold', fontSize:'30px'}}>QRコードをスキャンして驚くべき価格を手に入れよう</label><p/>
                    <button className='button-register default'>Register</button>
                </div>
            </Card>
            </Col>
        </Row>
    )
}
export default BottomContent;