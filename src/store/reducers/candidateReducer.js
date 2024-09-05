import { ADD_CANDIDATE_ERROR, ADD_CANDIDATE_SUCCESS, GET_ALL_CANDIDATE_ERROR, GET_ALL_CANDIDATE_SUCCESS, GET_BY_ID_CANDIDATE_SUCCESS, GET_BY_ID_CANDIDATE_ERROR } from "../actions/candidateActions";
import { candidateItems } from "../initialValues/candidateItems";


const initialState = {
    candidateItems: candidateItems,
    selectedCandidate: null,
    error: null
}
export default function candidateReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CANDIDATE_SUCCESS:
            return {
                ...state,
                candidateItems: [...state.candidateItems, action.payload],
                error: null
            }



        case ADD_CANDIDATE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_ALL_CANDIDATE_SUCCESS:
            return {
                ...state,
                candidateItems: action.payload,
                error: null
            }



        case GET_ALL_CANDIDATE_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case GET_BY_ID_CANDIDATE_SUCCESS:
            return {
                ...state,
                selectedCandidate: action.payload, // Store the fetched candidate by ID
                error: null
            }

        case GET_BY_ID_CANDIDATE_ERROR:
            return {
                ...state,
                error: action.payload
            }



        default:
            return state
    }
}