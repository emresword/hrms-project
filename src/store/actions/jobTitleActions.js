export const ADD_JOBTITLE_SUCCESS='ADD_JOBTITLE_SUCCESS'
export const ADD_JOBTITLE_ERROR='ADD_JOBTITLE_ERROR'
export const GET_ALL_JOBTITLE_SUCCESS='GET_ALL_JOBTITLE_SUCCESS'
export const GET_ALL_JOBTITLE_ERROR='GET_ALL_JOBTITLE_ERROR'


export const addJobTitleSuccess=(data)=>({
    type:ADD_JOBTITLE_SUCCESS,
    payload:data
})
export const addJobTitleError=(error)=>({
    type:ADD_JOBTITLE_ERROR,
    payload:error
})
export const getAllJobTitleSuccess=(jobTitles)=>({
    type:GET_ALL_JOBTITLE_SUCCESS,
    payload:jobTitles
})
export const getAllJobTitleError=(error)=>({
    type:GET_ALL_JOBTITLE_ERROR,
    payload:error
})