import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProduct.css'
import { Button } from 'react-bootstrap';
import GetProducts from './../../../Hooks/GetProducts';

const HomeUserProduct = ({addItem}) => {
    
    const [addedItems , setAddedItems] = useState()

    const { _id, gameName,location ,eventDetails, description,photo } = addItem;
    const navigate = useNavigate();

    const navigateToAddedItemDetail = id =>{
        navigate(`/addedItem/${id}`);
    }
    return (
        <div data-aos="fade-up" className="col ">
             <div className="card h-100 cardImage border-start-0 border-bottom-0 border-top-0 p-3 border-end-3">
                 <div className="card-body">
                 <img className='w-100' src={photo} alt="" />
                     <h2 className="card-title">{gameName}</h2>
                     <p><span className="fw-bold">Location: </span> {location}</p>
                     <p> <span className="fw-bold">Description: </span> {description}</p>
                     <p><span className="fw-bold">Date: </span> {eventDetails}</p>
            <button onClick={() => navigateToAddedItemDetail(_id)} className='btn btn-primary'>Joint This Game: {gameName}</button>
        </div>
        </div>
        </div>
    );
};

export default HomeUserProduct;