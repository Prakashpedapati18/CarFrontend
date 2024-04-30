import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Row, Col, DatePicker, Button } from 'antd';
import moment from 'moment';
import backgroundImage from '../36ac5a5e-d02a-4905-bc29-9a82b1d4bb4d.jpg';

const { RangePicker } = DatePicker;

function InitialHome() {
  const history = useHistory();
  const [dates, setDates] = useState(null);

  function handleFilter(dates) {
    if (dates) {
      setDates(dates);
      history.push(`/home?startDate=${dates[0].format('YYYY-MM-DD')}&endDate=${dates[1].format('YYYY-MM-DD')}`);
    }
  }

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '20px', position: 'absolute', top: 0, left: 0 }}>
        <div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}><b><Link to='/' style={{ color: 'orangered' }}>CAR TAKE</Link></b></h1>
        </div>
        <div>
          <Link to="/profile" style={{ color: 'white', marginRight: '8px' }}>
            MY PROFILE
          </Link>
          <Link to="/addcar">
            <Button
              type='primary'
              style={{
                fontSize: '14px',
                padding: '16px 32px',
                borderRadius: '10px',
                color: 'red',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            >
              ADD CAR
            </Button>
          </Link>
          <Button
            type='primary'
            style={{
              fontSize: '14px',
              padding: '16px 32px',
              borderRadius: '10px',
              color: 'white',
              background: 'red',
              border: 'none',
              cursor: 'pointer',
              marginLeft: '5px',
            }}
            onClick={() => localStorage.clear()}
          >
            Logout
          </Button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '-200px', color: 'black' }}>
          <div style={{ fontSize: '110px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1' }}>Search</div>
          <div style={{ fontSize: '110px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1' }}>Discover</div>
          <div style={{ fontSize: '110px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1' }}>Explore</div>
        </div>
        <div style={{ padding: '80px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}>
          <Row className='mt-3' justify='center'>
            <Col span={24} md={dates ? 16 : 24}>
              <label style={{ fontSize: '28px', marginBottom: '10px', color: 'white' }}>Select Dates:</label>
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format='MMM DD yyyy HH:mm'
                onChange={(dates) => handleFilter(dates)}
                style={{ width: '100%', marginBottom: '20px', fontSize: '28px' }}
              />
              <Button
                type='primary'
                style={{
                  fontSize: '36px',
                  padding: '20px 40px',
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  marginLeft: '30px',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  height: 'auto', // Added to ensure height adjusts to content
                }}
                onClick={() => handleFilter()}
              >
                Search for Cars
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default InitialHome;
