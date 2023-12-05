import React from 'react';
import { Breadcrumb, StatsGroup } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Approved Employers", link: "/admin/approved-employers" },
    { label: "Edit" },
];

function EditEmployersRequest() {
    const { tableData } = employersData;
    const dropdownOptions = [
        'approved',
        'pending',
        'rejected',
    ];
    return (
        <>
            <Breadcrumb
                heading="Edit Approved Employers"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={tableData} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditEmployersRequest;
