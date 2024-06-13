import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/admin.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import ProImg from '../assets/proMan.png'
import profileImg from '../assets/profile.png'
import proGirl from '../assets/proGirl.png'

const Home = () => {
  return (
    <>
    <div style={{minHeight:"100vh"}} className="d-flex align-items-center justify-content-center rounded shadow w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
          
             <h1 style={{fontSize:"50px"}}><i className='fa-solid fa-diagram-project me-1'></i>PROJECT FAIR</h1>
             <p style={{textAlign:"justify"}}>
              Lorem ipsum dolor sit amet consectetntur pariatur vitae? Accusamus ab voluptate minus commodi praesentium, impedit nostrum recusandae.
             </p>
             <Link to='/login' className='btn btn-warning'>START TO EXPLORE</Link>
          </div>
          <div className="col-lg-6">
             <img className='img-fluid' src={LandingImg} alt="landingimg" />
          </div>
        </div>
      </div>
    </div>

    <div className="mt-5 text-center">
      <h1 className='mb-5'>Explore Our Projects</h1>
      <marquee behavior="" direction="">
        <div className="d-flex">
          <div className="me-5">
            <ProjectCard/>
          </div>
        </div>
      </marquee>
      <button className='btn btn-link mt-3'>VIEW MORE PROJECTS</button>
    </div>

    <div className="d-flex align-items-center mt-5 flex-column">
      <h1>OUR TESTIMONIALS</h1>
      <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
      <Card style={{ width: '18rem' }} >
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} className='rounded circle img-fluid' src={ProImg} />
       <span>Max Miller</span>
       </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
            <div className="fa-solid fa-star text-warning"></div>
            <div className="fa-solid fa-star text-warning"></div>
            <div className="fa-solid fa-star text-warning"></div>
            <div className="fa-solid fa-star text-warning"></div>
          </div>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} >
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} className='rounded circle img-fluid' src={profileImg} />
       <span>Maria John</span>
       </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
            <div className="fa-solid fa-star text-warning"></div>
            <div className="fa-solid fa-star text-warning"></div>
            <div className="fa-solid fa-star text-warning"></div>
            <div className="fa-solid fa-star text-warning"></div>
          </div>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} >
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} className='rounded circle img-fluid' src={proGirl} />
       <span>Anna George</span>
       </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
            <div className="fa-solid fa-star text-warning"></div>
            <div className="fa-solid fa-star text-warning"></div>
            <div className="fa-solid fa-star text-warning"></div>
            <div className="fa-solid fa-star text-warning"></div>
          </div>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    </>
  )
}

export default Home