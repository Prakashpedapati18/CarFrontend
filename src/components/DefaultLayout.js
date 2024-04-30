import React from "react";
import { Menu, Button, Row, Col } from "antd";
import { Link } from 'react-router-dom';

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <div className="header bs1" style={{ background: '#001529', color: 'white', padding: '10px', height: '70px' }}>
        <Row gutter={16} justify='center'>
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1 style={{ margin: '0' }}><b><Link to='/' style={{ color: 'white' }}>Car Take</Link></b></h1>

              <Menu theme="primary" mode="horizontal" defaultSelectedKeys={['1']} style={{ background: '#001529', borderBottom: 'none' }}>
                <Menu.Item key="1"><Link to="/" style={{ color: 'white' }}>Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/userbookings" style={{ color: 'white' }}>Bookings</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/admin" style={{ color: 'white' }}>Add Car</Link></Menu.Item>
                <Menu.Item key="4" onClick={() => {
                  localStorage.removeItem('user');
                  window.location.href = '/login'
                }}>
                  <span style={{ color: 'white' }}>Logout</span>
                </Menu.Item>
              </Menu>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center" style={{ background: '#f0f2f5', padding: '20px 0' }}>
        <p>Designed and Developed By</p>
        <p>Avanthi</p>
      </div>
    </div>
  );
}

export default DefaultLayout;
