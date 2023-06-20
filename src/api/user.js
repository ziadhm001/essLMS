import axios from "./index"
class UserApi {
    static Register = (data) => {
        return axios.post(`login/`, data)
    }

    static Login = (data) => {
        return axios.post(`register/`, data)
    }
}

export default UserApi