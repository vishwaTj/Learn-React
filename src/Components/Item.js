import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ elem }) => {
  return (
    <div>
        <Card style={{ width: '18rem' , height:"30rem"}}>
                {/* //used chaining operator to perform a check before assigning data */}
                    <Card.Img variant="top" src={elem?.thumbnail ?? elem?.image} height="180" />
                        <Card.Body>
                            <Card.Title>
                                {elem?.title ?? elem?.firstName}
                            </Card.Title>
                            <Card.Title>
                                {elem?.brand ?? elem?.lastName}
                            </Card.Title>
                            <Card.Text>
                                {( elem?.description &&  elem?.description.slice(0, 60)+" ...") ?? (elem?.address.address)}
                            </Card.Text>
                            <Card.Text>
                                <b className='fs-5'>{(elem?.category) ?? (elem?.birthdate)}</b>
                            </Card.Text>
                            <Card.Text>
                                {(elem?.price+"$") ?? (elem?.age)}
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
    </div>
  );
};

export default Item;