import React from "react"
import PropTypes from "prop-types"

export const PublicationCard = ({
  title,
  id,
  description,
  date,
  course,
  comments,
  navigateToPostHandler,
}) => {
  const handleNavigateToPost = () => {
    navigateToPostHandler(id)
  }

  return (
    <>
    
    <div
      onClick={handleNavigateToPost}
      className="cursor-pointer bg-white mr-10 ml-80 shadow-md rounded-2xl p-6 mb-4 hover:shadow-lg transition-all border border-gray-200"
    >
      <h2 className="text-xl font-bold text-indigo-700 mb-2">{title}</h2>
      <p className="text-gray-700 mb-1">{description}</p>
      <p className="text-sm text-gray-500 mb-1">📅 {new Date(date).toLocaleDateString()}</p>
      <p className="text-sm text-gray-600 mb-1">📖 Curso: <span className="font-medium">{course.course}</span></p>
      <p className="text-sm text-gray-600">
         {comments.length > 0 ? `${comments.length} comentario(s)` : "Sin comentarios"}
      </p>
    </div></>
  )
}

PublicationCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  course: PropTypes.shape({
    course: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.array.isRequired,
  navigateToPostHandler: PropTypes.func.isRequired,
}
