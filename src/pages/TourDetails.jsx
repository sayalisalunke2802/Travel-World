import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tour, setTour] = useState(null);
  const [tourRating, setTourRating] = useState(null);

  useEffect(() => {
    // Fetch tour data based on the id
    const selectedTour = tourData.find(tour => tour.id === id);
    setTour(selectedTour);
  }, [id]);

  const submitHandler = e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    console.log(reviewText, tourRating);
    // Later, you can send the review data to the server
  };

  return (
    <>
      {tour && (
        <section>
          <Container>
            <Row>
              <Col lg='8'>
                <div className="tour__content">
                  <img src={tour.photo} alt={tour.title} />
                  <div className="tour__info">
                    <h2>{tour.title}</h2>
                    <div className='d-flex align-items-center gap-5'>
                      <span className='tour__rating d-flex  align-items-center gap-1'>
                        <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                        {tour.avgRating === 0 ? null : tour.avgRating}
                        {tour.totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({tour.reviews.length}) </span>
                        )}
                      </span>
                      <span>
                        <i className="ri-map-pin-line" style={{ color: "var(--secondary-color)" }}></i>
                        {tour.address}
                      </span>
                    </div>
                    <div className="tour__extra-details">
                      <span><i className="ri-map-pin-2-line" style={{ color: "var(--secondary-color)" }}></i>{tour.city}</span>
                      <span><i className="ri-money-dollar-circle-line" style={{ color: "var(--secondary-color)" }}></i>{tour.price}/per person</span>
                      <span><i className="ri-map-pin-time-line" style={{ color: "var(--secondary-color)" }}></i>{tour.distance} k/m</span>
                      <span><i className="ri-group-line" style={{ color: "var(--secondary-color)" }}></i>{tour.maxGroupSize} people</span>
                    </div>
                    <h5>Description</h5>
                    <p>{tour.description}</p>
                  </div>

                  {/* Tour Reviews */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({tour.reviews.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <span key={rating} onClick={() => setTourRating(rating)}>
                            {rating} <i className="ri-star-fill"></i>
                          </span>
                        ))}
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder='Share your thoughts'
                          required
                        />
                        <button className="btn primary__btn text-white" type='submit'>
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className='user__reviews'>
                      {tour.reviews.map(review => (
                        <div key={review.id} className="review__item">
                          <img src={avatar} alt="" />
                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>{review.user}</h5>
                                <p>{new Date(review.date).toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating} <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                              </span>
                            </div>
                            <h6>{review.comment}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>

              <Col lg='4'>
                <Booking tour={tour} avgRating={tour.avgRating} />
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <Newsletter />
    </>
  );
}

export default TourDetails;