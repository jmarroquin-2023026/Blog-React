import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Input } from '../Input'
import { useAddComments } from '../../shared/hooks/useAddComment'

export const CommentForm = () => {
  const { id: publicationId } = useParams() 
   const { addComment, isLoading } = useAddComments()

  const initialForm = {
    author: '',
    comment: '',
  }

  const [formData, setFormData] = useState(initialForm)

  const handleValueChange = (value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await addComment(publicationId, formData)
    if (success) {
      setFormData(initialForm)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 ml-80 mr-10  ">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Agregar Comentario</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            field="author"
            label="Autor"
            type="text"
            value={formData.author}
            onChangeHandler={handleValueChange}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            labelClassName="block text-sm font-medium text-gray-700 mb-1"
          />
        </div>
        
        <div>
          <Input
            field="comment"
            label="Comentario"
            type="text"
            value={formData.comment}
            onChangeHandler={handleValueChange}
            isTextarea={true}
            rows={4}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            labelClassName="block text-sm font-medium text-gray-700 mb-1"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded-lg text-white font-medium transition-colors ${
              isLoading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : 'Publicar Comentario'}
          </button>
        </div>
      </form>
    </div>
  )
}