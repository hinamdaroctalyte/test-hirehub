import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Edit" },
];

function EditCandidates() {
    const { tableData } = employersData;

    const dropdownOptions = [
        'activate',
        'inactive',
        'on hold',
    ];

    return (
        <>
            <Breadcrumb
                heading="Edit Employers"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={tableData} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditCandidates;
