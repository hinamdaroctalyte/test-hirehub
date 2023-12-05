import React from 'react';
import { Breadcrumb, StatsGroup } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Rejected Employers", link: "/admin/rejected-employers" },
    { label: "Edit" },
];
function EditRejectedEmployers() {
    const { tableData } = employersData;
    const dropdownOptions = [
        'approved',
        'pending', 
    ];
    return (
        <>
            <Breadcrumb
                heading="Edit Rejected Employers"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={tableData} dropdownOptions={dropdownOptions} pageType="edit" />
        </>
    );
}

export default EditRejectedEmployers;
