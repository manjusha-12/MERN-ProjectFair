import React from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'

const Dashboard = () => {
  return (
    <>
    <Header insideDashboard/>
    <div className="container-fluid" style={{marginTop:"100px"}}>
      <div className="row mt-3">
        <div className="col-lg-8">
         <h1>WELCOME <span className='text-warning'>USER</span>,</h1>
         <View/>
        </div>
        <div className="col-lg-4">
         <Profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard