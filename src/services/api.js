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

export const getPostRequest=async(id)=>{
    try{
        return await apiClient.get(`/publication/${id}`)
    }catch(e){
        return {
            error:true,
            e
        }
    }
}