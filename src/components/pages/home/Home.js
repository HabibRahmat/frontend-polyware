import React from 'react';
import Header from '../../template/header';
import ContentTop from '../../template/ContentTop';
import ListProduct from '../../template/ListProduct';
import ListCategories from '../../template/ListCategories';
import BottomContent from '../../template/BottomContent';
import Footer from "../../template/Footer";
const Home = () => {

  return (
    <div >
      <Header />
      <ContentTop />
      <div style={{ margin: '40px 0px 0px 60px' }}>
        <label style={{ color: ' #F5909B', fontWeight: 'bold', fontSize: '20px' }}>トップチョイス</label>
      </div>
      <ListProduct />
      <ListCategories/>
      <BottomContent/>
      <Footer/>
    </div>
  );
}

export default Home;