import React, { useEffect } from 'react'

import { useOutletContext, useParams } from 'react-router-dom'
import { Comments } from '../components/Comments/Comments'
import { CommentForm } from '../components/Comments/CommentForm'


export const CommentsPage = () => {
  const { id } = useParams() 
  const { publications } = useOutletContext()
  
  const currentPublication = publications?.find(p => p._id === id)

  return (
    <div>
      <h1 className="ml-72 text-center  text-3xl font-bold text-blue-800 mb-8 pb-4 border-b border-gray-200">Comentarios de: {currentPublication?.title}</h1>
      <CommentForm publicationId={id} />
      <Comments publicationId={id} />
    </div>
  )
}