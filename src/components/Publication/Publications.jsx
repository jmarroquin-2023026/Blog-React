import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { PublicationCard } from './PublicationCard'

export const Publications = () => {
    const {publications}=useOutletContext()
    const handleNavigateToPost=()=>{

    }
  return (
    <>
    <h1 className='ml-72 text-center text-4xl font-black mb-5 text-blue-900'>Publicaciones</h1>
        <div>
      {
  publications.map((publication) => (
    <PublicationCard
      key={publication._id}
      id={publication._id}
      title={publication.title}
      description={publication.description}
      date={publication.date}
      course={publication.course}
      comments={publication.comments}
      navigateToPostHandler={handleNavigateToPost}
    />
  ))
}

    </div>
    </>
  )
}

