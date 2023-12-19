
// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";

const ManageCandidateAdmin = {
    async getAppliedAllJobs() {
        try {
            console.log("starttt from servie employer");
            const response = await api.get(`admin/manage-candidates`);
            if (response && response.data && response.status === 200) {
                console.log("viewww employererererer, res", response);
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
};

export default ManageCandidateAdmin;
