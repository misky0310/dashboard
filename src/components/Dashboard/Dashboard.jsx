import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import CustomerList from '../CustomerList/CustomerList'

const Dashboard = () => {
  return (
    <div className="flex gap-20">
      <Sidebar/>
      <CustomerList/>
    </div>
  )
}

export default Dashboard