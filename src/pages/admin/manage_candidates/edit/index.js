import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
// import employersData from '../../../../data/employersData.json';
import { useSelector } from 'react-redux';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates", link: "/admin/manage-candidates" },
    { label: "Edit" },
];

function EditCandidates() {
    // const { tableData } = employersData;
    const  AppliedAllJobs  = useSelector((state) => state?.manageCandidateAdmin?.jobs);


    const dropdownOptions = [
        'screening',
        'new application',
        'hire',
        "selection"
    ];

    return (
        <>
            <Breadcrumb
                heading="Edit Candidates"
                breadcrumb={breadcrumb}
            />
            <Core.UserProfile data={AppliedAllJobs} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditCandidates;
