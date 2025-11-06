import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import photo6 from "../../img/photo (6).png";
import BookingForm from './BookingForm';
import "./booking.css"

function Bookig() {
  return (
    <section className="booking py-5">
      <Container>
        <h2 className="mb-4 title text-center">Book Your Table</h2>
        <Row className="justify-content-between align-items-center">
          <Col className="form mb-4 mb-md-0" md={6}>
            <BookingForm />
          </Col>
          <Col className="content" md={4}>
            <img src={photo6} alt="Booking" />
            <div className="info text-start mt-5">
              <div className="infoBox d-flex align-items-start">
                <div className="icon me-3 fs-2  ">
                  <IoLocationOutline />
                </div>
                <div className="text">
                  <h2>Address</h2>
                  <p>123 Coffee Street, Cairo, Egypt</p>
                </div>
              </div>
              <div className="infoBox d-flex align-items-start">
                <div className="icon me-3 fs-2">
                  <HiOutlineMail />
                </div>
                <div className="text">
                  <h2>Email</h2>
                  <p>support@flavore.com</p>
                </div>
              </div>
              <div className="infoBox d-flex align-items-start">
                <div className="icon me-3 fs-4 mt-0">
                  <FaPhone />
                </div>
                <div className="text">
                  <h2>Phone</h2>
                  <p>+20 012 3456 7891</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Bookig
