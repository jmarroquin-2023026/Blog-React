import { useState } from 'react'
import { getCommentsRequest, addCommentRequest } from '../../services/api' // Asegúrate de importar addCommentRequest
import toast from 'react-hot-toast'

export const useAddComments = () => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getComments = async (id) => {
    setIsLoading(true)
    try {
      const response = await getCommentsRequest(id)
      if (!response.error) {
        setComments(response.data?.comments || [])
      } else {
        throw response.e
      }
    } catch (error) {
      setError(error)
      toast.error('Error al cargar comentarios')
    } finally {
      setIsLoading(false)
    }
  }

  const addComment = async (publicationId, commentData) => {
    setIsLoading(true)
    try {
      const response = await addCommentRequest(publicationId, commentData)
      
      if (response.error) {
        throw response.e
      }
      
      setComments(prev => [response.data, ...prev])
      toast.success('Comentario agregado!')
      return true
    } catch (error) {
      setError(error)
      toast.error(error?.response?.data?.message || 'Error al publicar comentario')
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    getComments,
    addComment, // Exportamos con el nombre correcto
    comments,
    isLoading,
    error
  }
}