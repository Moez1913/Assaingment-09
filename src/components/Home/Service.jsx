import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
     const {category_name,image,description,button}=service
    return (
        <div className="card bg-base-100 image-full w-[340px] shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {category_name} </h2>
          <p> {description} </p>
          <div className="card-actions justify-end">
            <Link to={`/services/${category_name}`}><button className="btn btn-primary">{button}</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Service;