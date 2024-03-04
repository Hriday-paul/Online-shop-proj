import axios from "axios";

const UseAxiosPublic = () => {
    const axiosPub = axios.create({
        baseURL : 'http://localhost:4000/api'
    })
    return axiosPub
};

export default UseAxiosPublic;