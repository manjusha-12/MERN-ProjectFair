import React, { useState } from 'react'
import { Card ,Modal} from 'react-bootstrap'

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card onClick={handleShow} className='shadow btn' style={{width:"28rem"}}>
      <Card.Img variant='top' height={'200px'} src=''/>
      <Card.Body>
       <Card.Title>
        T
       </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row shadow">
            <div className="col-lg-6">
              <img className='img-fluid' src="" alt="title" />
            </div>
            <div className="col-lg-6">
              <h2>Title</h2>
              <h6>Language Used : <span className="fw-bolder text-danger">lang</span></h6>
              <p style={{textAlign:"justify"}}><span className='fw-bolder'> Project Overview :</span>content</p>
            </div>
          </div>
          <div className="float-start mt-2">
            <a href="https://github.com/" target='_blank' className='btn btn-secondary'><i className="fa-brands fa-github"></i></a>
            <a href="https://www.w3schools.com/cssref/pr_class_float.php" target='_blank' className='btn btn-secondary ms-2'><i className="fa-solid fa-link"></i></a>

          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard