import axios from "./index"
class UserApi {
    static Login = (data) => {
        return axios.post(`login/`, data)
    }

    static Register = (data) => {
        return axios.post(`signup/`, data)
    }
}

export default UserApi