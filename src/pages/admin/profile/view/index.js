import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import adminData from '../../../../data/adminData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "View Profile" },
];

function ViewProfile() {
    const { profile } = adminData;
    const dropdownOptions = [
        "activate",
        "inactive",
        "on hold",
    ];
    return (
        <>
            <Breadcrumb
                breadcrumb={breadcrumb}
            />
            <Core.ViewProfile data={profile} />
        </>
    );
}

export default ViewProfile;
