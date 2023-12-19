
// import localStorageUtils from '../utils/localStorage';

import api from "../../api/api";

const ManageCandidate = {
    async getAppliedJobByCandidate() {
        try {
            console.log("get applied Jobs by Candidate from servie employer");
            const response = await api.get('/get-applied-jobs-by-candidate');
            if (response && response.data && response.status === 200) {
                console.log("starttttttttttt");
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    },
   
};

export default ManageCandidate;
