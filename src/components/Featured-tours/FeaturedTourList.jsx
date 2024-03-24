import React from 'react';
import TourCard from '../../shared/TourCard';
import {Col} from 'reactstrap';
import tourData from '../../assets/data/tours.js'


const FeaturedTourList = () => {
    return(<>
    {
        tourData?.map(tour=>(
            <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour}/>
            </Col>
        ))
    }

    </>
    );
};

export default FeaturedTourList