import axios from "axios";


export default class CityService{
    addCity(city){
        return axios.post("http://localhost:8080/api/cities/add",city)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/cities/getAll")
    }

}