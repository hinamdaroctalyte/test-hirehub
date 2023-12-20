
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
    async changeStatusAppliedJobByAdmin(id, status) {
        try {
            console.log("change status applied employer", id, status);
            const response = await api.post(`admin/change-manage-candidates-status?id=${id}`, status);
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
