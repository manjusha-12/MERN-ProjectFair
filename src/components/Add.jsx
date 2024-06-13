import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import uploadImg from '../assets/upload.jpg'
 
const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
   <button onClick={handleShow} className="btn btn-primary"><i className="fa-solid fa-plus"></i> NEW PROJECTS</button>
     <Modal 
      size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>NEW PROJECT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
           <label>
            <input type="file" style={{display:"none"}}/>
            <img src={uploadImg} className='img-fluid' alt="" />
           </label>
          </div>
          <div className="col-lg-8">
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Project Title'/>
            </div>
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Languages Used in Project'/>
            </div>
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Project GITHUB Link'/>
            </div>
            <div className="mb-2">
              <input type="text" className='form-control' placeholder='Project WEBSITE Link'/>
            </div>

          </div>
         </div>
         <div>
              <input type="text" className='form-control' placeholder='Project Overview'/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Add