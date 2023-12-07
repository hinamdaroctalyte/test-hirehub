import api from '../api/api';
// import localStorageUtils from '../utils/localStorage';

const authService = {
    async login(credentials) {
        try {

            const response = await api.post('/auth/login', credentials);
            if (response && response.data && response.status === 200) {
                console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
};

export default authService;
