import React from 'react';
import './Item.css';
import Card from 'react-bootstrap/Card';

function Item(props) {
  return (
    <Card className="m-0 mb-1 p-0 rounded-0">
      <div className="row no-gutters">
        <div className="col-12">
          <Card.Img className="image w-100 h-fixed p-2" src={props.data.image} alt={props.data.title} />
        </div>
        <div className="col-12 p-0">
          <Card.Body className="p-3">
            <Card.Title className="p-0 fs-4 fw-semibold">{props.data.title}</Card.Title>
            <Card.Text className="fs-6 fw-medium mb-1">{props.data.description}</Card.Text>
            <Card.Text className="smallfont fw-medium text-secondary mb-0">{props.data.category}</Card.Text>
            <Card.Text className="smallfont fw-medium text-secondary mb-0">
              <span className="light_green fw-bold">Rating - {props.data.rating.rate}</span> • {props.data.rating.count}
            </Card.Text>
            <Card.Text className="text-black fw-bold fs-5 mt-3 mb-0">₹{props.data.price}</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default Item;
