import axiosWithAuth from "./axiosConfig";

export const userRegister = async (data) => {
    try {

        const response = await axiosWithAuth.post('/api/user/userRegister', data)
        console.log(response);
        return response

    } catch (err) {
        console.log(err);
        throw err
    }
}

export const userSignIn = async (data) => {
    try {
        console.log(data);
        const response = await axiosWithAuth.post('/api/user/userSignin', data)
        return response
    } catch (err) {
        throw err
    }
}

export const addDomain = async (data) => {
    try {
        const response = await axiosWithAuth.post('/api/user/addDomain', data)
        return response
    } catch (err) {
        throw err
    }
}
export const getDomains = async (data)=>{
    try{
        const response = await axiosWithAuth.get('/api/user/getDomains')
        return response
    }catch(err){
        console.log(err);
    }
}

export const getDNS = async (data)=>{
    try{
        const response = await axiosWithAuth.post('/api/user/getDns',data)
        return response
    }catch(err){
        console.log(err)
    }
}

export const addRecord = async (data)=>{
    try{
        const response = await axiosWithAuth.post('/api/user/addRecords',data)
        return response
    }catch(err){
        throw err
    }
}

export const editRecord = async (data)=>{
    try{
        const response = await axiosWithAuth.post('/api/user/editRecords',data)
        return response
    }catch(err){
        throw err
    }
}

export const deleteRecord = async(data)=>{
    try{
        const response = await axiosWithAuth.post('/api/user/deleteRecord',data)
        return response
    }catch(err){
        throw err
    }
}

export const deleteDomain = async(data)=>{
    try{
        const response = await axiosWithAuth.post('/api/user/deleteDomain',data)
        return response
    }catch(err){
        throw err
    }
}
