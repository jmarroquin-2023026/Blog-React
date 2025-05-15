import axios from "axios";

const apiClient=axios.create(
    {
        baseURL:'http://localhost:2636',
        timeout:2000
    }
)

export const getPostsRequest=async()=>{
    try{
        return await apiClient.get('/publications')
    }catch(e){
        return{
            error:true,
            e
        }
    }
}

export const getCommentsRequest=async(id)=>{
    try{
        return await apiClient.get(`/comments/${id}`)
    }catch(e){
        return {
            error:true,
            e
        }
    }
}

export const addCommentRequest=async(id,data)=>{
    try{
        return await apiClient.post(`/addComment/${id}`,data)
    }catch(e){
        return {
            error:true,
            e
        }
    }
}