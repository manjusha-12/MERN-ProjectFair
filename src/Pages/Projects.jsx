import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid" style={{marginTop:"150px"}}>
      <div className="d-flex justify-content-between">
        <h1>ALL PROJECTS</h1>
        <input type="text" className='form-control w-25' placeholder='Search Projects by Language Used..' />
      </div>
      <Row className='mt-3'>
        <Col className='mb-3' sm={12} md={6} lg={4}>
        <ProjectCard/>
        </Col>
       
      </Row>
    </div>
    </>
  )
}

export default Projects