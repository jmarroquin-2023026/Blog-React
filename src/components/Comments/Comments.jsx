import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useComments } from '../../shared/hooks/useComments'
import { CommentCard } from './CommentCard'

export const Comments = () => {
  const { id } = useParams()
  const { getComments, allComments } = useComments()

  useEffect(() => {
    getComments(id)
  }, [id])

  const sortedComments = [...(allComments || [])].sort((a, b) => new Date(b.Date) - new Date(a.Date))

  return (
    <>
      {sortedComments.map((comment) => (
        <CommentCard
          key={comment._id}
          id={comment._id}
          author={comment.author}
          date={comment.Date}
          comment={comment.comment}
        />
      ))}
    </>
  )
}
