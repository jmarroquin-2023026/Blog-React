import React from 'react'
import { Outlet } from 'react-router-dom'

export const CommentsContext = ({comments=[],getComments}) => {
  return (
    <div>
      <Outlet context={{comments,getComments}}/>
    </div>
  )
}


