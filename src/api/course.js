import axios from "./index"
class CourseApi {
    static GetManaged = () => {
        return axios.post(`course/managed`)
    }

    static GetDetails = (data) => {
        return axios.get(`course/${data}`)
    }

    static Register = (data) => {
        return axios.post(`course/`, data)
    }

    static GetAssigned = () => {
        return axios.post(`course/assigned`)
    }

    static GetByCategory = (data) => {
        return axios.post(`course/category`, data)
    }

    static Join = (data) => {
        return axios.post(`course/join`, data)
    }
}

export default CourseApi