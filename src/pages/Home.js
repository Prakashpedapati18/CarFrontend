import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import { getAllCars } from '../redux/actions/carsActions';
import { Col, Row, Select, Button } from 'antd';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const { Option } = Select;

function Home() {
  const { cars } = useSelector(state => state.carsReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const [totalCars, setTotalCars] = useState([]);
  const [filters, setFilters] = useState({
    place: null
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    if (filters.place) {
      const temp = cars.filter(car => car.Location === filters.place);
      setTotalCars(temp);
    } else {
      setTotalCars(cars);
    }
  }, [cars, filters]);

  function handlePlaceFilter(value) {
    setFilters({ ...filters, place: value });
  }

  return (
    <DefaultLayout logo='/path-to-your-professional-logo.png'>
      <div className="home-container" style={{ margin: '0 100px' }}>
        <Row className='mt-3' justify='center'>
          <Col lg={20} sm={24} className='d-flex justify-content-left'>
            <label>Select Location:</label>
            <Select
              showSearch
              placeholder='Select Location'
              style={{ width: 200 }}
              onChange={handlePlaceFilter}
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='NARSIPATNAM'>NARSIPATNAM</Option>
              <Option value='VISAKHAPATNAM'>VISAKHAPATNAM</Option>
              <Option value='Hyderabad'>Hyderabad</Option>
            </Select>
          </Col>
        </Row>

        {filters.place && (
          <Row className='mt-3' justify='center'>
            <Col lg={20} sm={24}>
              <h3>Selected Place: {filters.place}</h3>
            </Col>
          </Row>
        )}

        {loading && <Spinner />}

        <Row justify='center' gutter={16}>
          {totalCars.map(car => (
            <Col lg={12} sm={24} xs={24} key={car._id}>
              <div className='car p-2 bs1'>
                <Row gutter={16}>
                  <Col span={12}>
                    <img src={car.image} className='carimg' alt={car.name} />
                  </Col>
                  <Col span={12}>
                    <div className='car-details' style={{ color: 'blue' }}>
                      <h3>{car.name}</h3>
                      <p>Rent Per Hour: {car.rentPerHour} /-</p>
                      <p>Location: {car.Location}</p>
                      <p>Mobile Number: {car.Mobilenumber}</p>
                      <Button type='dark'>
                        <Link to={`/booking/${car._id}`}>Book Now</Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default Home;
