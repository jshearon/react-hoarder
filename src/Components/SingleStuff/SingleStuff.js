import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import itemsData from '../../helpers/data/itemsData';

const SingleItem = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const { stuffId } = props.match.params;
    itemsData.getSingleItem(stuffId)
      .then((res) => setItem(res.data))
      .catch((err) => console.error(err));
  }, [props.match.params]);

  return (
    <div className="d-flex justify-content-around m-5">
      <img className="w-25" src={item.itemImage} alt="Item" />
      <div className="m-5">
        <h1>{item.itemName}</h1>
        <p>{item.itemDescription}</p>
        <Link to={`/edit/${props.match.params.stuffId}`}>
          <button className="btn btn-danger">Edit</button>
        </Link>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default SingleItem;
