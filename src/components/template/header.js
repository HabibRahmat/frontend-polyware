import React from 'react';
import { Row, Col, Carousel, Button } from 'antd'
import { NavLink } from "react-router-dom";

const Header = () => {

  const listMenu = [
    {
      uri: '/home-page',
      label: 'Home',
      name: 'Home'
    },
    {
      uri: '/category',
      label: 'Category',
      name: 'Category'
    },
    {
      uri: '/',
      label: 'Promo',
      name: 'Promo'
    },
    {
      uri: '/about-us',
      label: 'About-us',
      name: 'About us'
    },

  ]

  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <div className="header-components">
      <Row>
        <Col sm={18} md={18} xs={18}>
          <h2 style={{ marginLeft: '15px' }}>PIERCE</h2>
        </Col>
        <Col sm={6} md={6} xs={6}>
          <Row>
            {listMenu.map((val, i) => {
              return (
                <Col sm={6} md={6} xs={6} key={i}>
                  <NavLink to={val.uri} as={val.label} className="header-menu-list" activeStyle={{ color: "red", textDecoration: "none" }}>
                    {val.name}
                  </NavLink >
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>

      <Row>
        <Col sm={24} md={24} xs={24}>
          <Carousel afterChange={onChange}>
            <div className="content-style">
              <div className="background-header">
                <Row justify="start">
                  <Col sm={24} md={24} xs={24}>
                    <img style={{ width: 120, height: 40 }} src='/logo-header.png' alt='logoimg' className="header-logo " />
                  </Col>
                  <Col sm={24} md={24} xs={24}>
                    <h1 className='header-label'>キッチンで最高の調理器具</h1>
                  </Col>
                  <Col sm={24} md={24} xs={24}>
                    <label className='small-header-label'>Polyware care about your home, get special disc </label>
                  </Col>
                  <Col sm={24} md={24} xs={24}>
                    <label className='small-header-label2'>40% for selected product. Grab fast !!</label>
                  </Col>
                  <Col sm={24} md={24} xs={24}>
                    <Button className='header-button'>Check Product</Button>
                  </Col>
                </Row>
              </div>
            </div>
            <div>
              <h3 className="content-style">2</h3>
            </div>
            <div>
              <h3 className="content-style">3</h3>
            </div>
            <div>
              <h3 className="content-style">4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col sm={24} md={24} xs={24} > 
          <div className='info-title'>
            <img src='/qr-code.png' alt='qrcode' style={{width:40, height:40}}/>
            <label className='label-info'>QRコードをスキャンして驚くべき価格を手に入れよう</label>
            <button className='button-learn default'>Learn More</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;