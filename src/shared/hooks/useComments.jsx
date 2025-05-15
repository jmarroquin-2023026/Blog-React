import { useState } from 'react'
import { getCommentsRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useComments = () => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getComments = async (id) => {
    setIsLoading(true)
    try {
      const response = await getCommentsRequest(id)
      if (!response.error) {
        setComments(response.data?.comments || [])
      }
    } finally {
      setIsLoading(false)
    }
  }

  const addNewComment = (comment) => {
    setComments(prev => [comment, ...prev])
  }

  return {
    getComments,
    allComments: comments,
    isLoading,
    addNewComment
  }
}