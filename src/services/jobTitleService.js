import axios from "axios";

export default class JobTitleService {
    addJobTitle(jobTitle) {
        return axios.post("http://localhost:8080/api/jobTitles/add", jobTitle);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/jobTitles/getAll");
    }
}
