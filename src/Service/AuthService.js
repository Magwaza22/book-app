import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/auth";

class AuthService {
    Register(user) {
        return axios.post(`${API_BASE_URL}/register`, user);
    }

    SignUp(user) {
        return axios.post(`${API_BASE_URL}/login`, user);
    }
}

export default new AuthService();