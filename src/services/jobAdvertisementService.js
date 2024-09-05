import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisiments(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }

}