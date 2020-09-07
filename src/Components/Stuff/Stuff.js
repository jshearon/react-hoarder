import React from 'react';
import { Link } from 'react-router-dom';

const Stuff = (props) => {
  const { stuff } = props;
  return <div className="card m-2">
            <img className="card-img-top" src={stuff.itemImage} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">{stuff.itemName}</h5>
              <p className="card-text">{stuff.itemDescription}</p>
              <Link to={`/single/${stuff.id}`}>
                <button className="btn btn-primary m-2">View</button>
              </Link>
              <Link to={`/edit/${stuff.id}`}>
                <button className="btn btn-warning m-2">Edit</button>
              </Link>
              <button className="btn btn-danger m-2" onClick={() => { props.deleteItem(stuff.id); }}>Delete</button>
            </div>
          </div>;
};

export default Stuff;
