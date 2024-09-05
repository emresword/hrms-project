export const ADD_CITY_SUCCESS='ADD_CITY_SUCCESS'
export const ADD_CITY_ERROR='ADD_CITY_ERROR'
export const GET_ALL_CITY_SUCCESS='GET_ALL_CITY_SUCCESS'
export const GET_ALL_CITY_ERROR='GET_ALL_CITY_ERROR'


export const addCitySuccess=(data)=>({
    type:ADD_CITY_SUCCESS,
    payload:data
})
export const addCityError=(error)=>({
    type:ADD_CITY_ERROR,
    payload:error
})
export const getAllCitySuccess=(cities)=>({
    type:GET_ALL_CITY_SUCCESS,
    payload:cities
})
export const getAllCityError=(error)=>({
    type:GET_ALL_CITY_ERROR,
    payload:error
})