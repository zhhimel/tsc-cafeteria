import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Food({ food }) {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='m-4 p-4 d-flex flex-column card custom-card'>
      <div onClick={handleShow}>
        <h1 className='text-center'>{food.name}</h1>
        <img src={food.image} className="img-fluid" style={{ height: "300px", width: "400px" }} alt='' />
      </div>
      <div className='d-flex '>

        <div className='d-flex flex-column'>
          <p>Quantity:</p>
          <div className='m-10'>
            <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>
              })}
            </select>

          </div>

        </div>

      </div>
      <div className='d-flex justify-content-between'>
        <div className=''>
          <h1>Price: {food.prices * quantity}</h1>
        </div>
        <div className=''>
          <button className='btn button-style'>ADD TO CART</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={food.image}alt='' className='img-fluid' style={{height:'400px'}}></img>
          <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn ' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
