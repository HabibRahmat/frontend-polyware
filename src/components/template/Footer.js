import React from "react";
import {Row,Col,Card} from 'antd';
const Footer =()=>{

    return(
        <Row>
            <Col md={24} sm={24} xl={24}>
                <Card style={{height:"90px",backgroundColor:'#F5909B',marginTop:"40px"}}>
                    <img alt='group' src='/group.png'/>
                    <div style={{marginTop:"-40px"}}>
                    <label style={{color:'#FFFF',marginLeft:"550px",marginTop:"-20px"}}>You can only bring happiness to others if you are also happy.</label><p/>
                    <label style={{color:'#FFFF',marginLeft:"480px"}}> 472-0022 Aichi Prefecture, Kariya City, Isshikicho 1-4-3 Limpia Yachiyo 201 Gou.</label>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}
export default Footer;