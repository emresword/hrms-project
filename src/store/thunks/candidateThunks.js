import CandidateService from "../../services/candidateService";
import { addCandidateError, addCandidateSuccess, getAllCandidateSuccess,getAllCandidateError ,getCandidateByIdSuccess,getCandidateByIdError} from "../actions/candidateActions";


export const addCandidate=(values)=>async(dispatch)=>{
   try {
     const response= await new CandidateService().addCandidate(values)
     dispatch(addCandidateSuccess(response.data))//if you got any error write response.data.data

   } catch (error) {
    dispatch(addCandidateError(error.response?.data))
   }
}



export const getCandidateById = (id) => async (dispatch) => {
  try {
    const response = await new CandidateService().getCandidateById(id);
    dispatch(getCandidateByIdSuccess(response.data.data));
  } catch (error) {
    console.error('Failed to fetch candidate by ID:', error);
    dispatch(getCandidateByIdError(error.response?.data));
  }
};



export const getAllCandidate = () => async (dispatch) => {
  try {
      const response = await new CandidateService().getCandidates();
      console.log('Response Data:', response.data.data); // Log to check response
      dispatch(getAllCandidateSuccess(response.data.data));
  } catch (error) {
      console.error('Failed to fetch candidates:', error);
      dispatch(getAllCandidateError(error.response?.data));
  }
};
