export const ADD_CANDIDATE_SUCCESS='ADD_CANDIDATE_SUCCESS'
export const ADD_CANDIDATE_ERROR='ADD_CANDIDATE_ERROR'
export const GET_ALL_CANDIDATE_SUCCESS='GET_ALL_CANDIDATE_SUCCESS'
export const GET_ALL_CANDIDATE_ERROR='GET_ALL_CANDIDATE_ERROR'
export const GET_BY_ID_CANDIDATE_SUCCESS='GET_BY_ID_CANDIDATE_SUCCESS'
export const GET_BY_ID_CANDIDATE_ERROR='GET_BY_ID_CANDIDATE_ERROR'

export const addCandidateSuccess=(data)=>({
    type:ADD_CANDIDATE_SUCCESS,
    payload:data
})
export const addCandidateError=(error)=>({
    type:ADD_CANDIDATE_ERROR,
    payload:error
})
export const getAllCandidateSuccess=(candidates)=>({
    type:GET_ALL_CANDIDATE_SUCCESS,
    payload:candidates
})
export const getAllCandidateError=(error)=>({
    type:GET_ALL_CANDIDATE_ERROR,
    payload:error
})
export const getCandidateByIdSuccess=(candidate)=>({
    type:GET_BY_ID_CANDIDATE_SUCCESS,
    payload:candidate
})
export const getCandidateByIdError=(error)=>({
    type:GET_BY_ID_CANDIDATE_ERROR,
    payload:error
})