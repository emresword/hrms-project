export const ADD_JOBADVERTISEMENT_SUCCESS='ADD_JOBADVERTISEMENT_SUCCESS'
export const ADD_JOBADVERTISEMENT_ERROR='ADD_JOBADVERTISEMENT_ERROR'
export const GET_ALL_JOBADVERTISEMENT_SUCCESS='GET_ALL_JOBADVERTISEMENT_SUCCESS'
export const GET_ALL_JOBADVERTISEMENT_ERROR='GET_ALL_JOBADVERTISEMENT_ERROR'


export const addJobAdvertisementSuccess=(data)=>({
    type:ADD_JOBADVERTISEMENT_SUCCESS,
    payload:data
})
export const addJobAdvertisementError=(error)=>({
    type:ADD_JOBADVERTISEMENT_ERROR,
    payload:error
})
export const getAllJobAdvertisementSuccess=(jobAdvertisement)=>({
    type:GET_ALL_JOBADVERTISEMENT_SUCCESS,
    payload:jobAdvertisement
})
export const getAllJobAdvertisementError=(error)=>({
    type:GET_ALL_JOBADVERTISEMENT_ERROR,
    payload:error
})