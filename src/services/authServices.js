// authService.js
import api from '../api/api';
// import localStorageUtils from '../utils/localStorage';

const authService = {
    async login(credentials) {
        try {

            const response = await api.post('/auth/login', credentials);
            if (response && response.data && response.status === 200) {
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    },
};

export default authService;
