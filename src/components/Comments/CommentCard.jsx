import PropTypes from 'prop-types'
import React from 'react'

export const CommentCard = ({
    author,
    id,
    comment,
    date,

}) => {
    
  return (
    <div
        className="cursor-pointer bg-white mr-10 ml-80 shadow-md rounded-2xl p-6 mb-4 hover:shadow-lg transition-all border border-gray-200"
    >
        <h2 className="text-xl font-bold text-indigo-700 mb-2">{author}</h2>
        <p className="text-gray-700 mb-1">{comment}</p>
         <p className="text-sm text-gray-500 mb-1">📅 {new Date(date).toLocaleDateString()}</p>
    </div>
  )
}

CommentCard.propTypes = {
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,  // Acepta formatos ISO como "2023-05-15T00:00:00Z"
    PropTypes.number,  // Acepta timestamps (1684108800000)
    PropTypes.instanceOf(Date)  // Acepta objetos Date directamente
  ]).isRequired,
};