import axios from "axios";

export default class CandidateService {
    getCandidates() {
        return axios.get("http://localhost:8080/api/candidates/getAll");
    }

    getAllWithCv() {
        return axios.get("http://localhost:8080/api/candidates/getAllWithCv");
    }

    addCandidate(candidate) {
        return axios.post("http://localhost:8080/api/candidates/add", candidate);
    }
    getCandidateById(id) {
        return axios.get(`http://localhost:8080/api/candidates/getById/${id}`);
    }
    
}
