import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const ServiceDetails = ({ service }) => {
  const { image, service_name, description, pricing, duration, counselor, counciler_img, rating, button, learn_more } = service
  return (
    <>
      <Helmet>
        <title>CareerGuidePro|Dtails</title>
      </Helmet>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {service_name} </h2>
          <div>
            <h2>Counselor: {counselor}</h2>
            <img src={counciler_img} alt="" />
          </div>
          <p>Duration: {duration} </p>

          <p>Rating: {rating} </p>
          <p> {description} </p>
          <p>Price: {pricing}</p>
          <div className="card-actions">
            <Link to='/feedback'> <button className="btn btn-primary"> {button}</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;