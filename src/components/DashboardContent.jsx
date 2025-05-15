import React from 'react'
import { Outlet } from 'react-router-dom'

export const DashboardContent = ({publications=[],getPublications}) => {
  return (
    <div>
      <Outlet context={{publications,getPublications}}/>
    </div>
  )
}
