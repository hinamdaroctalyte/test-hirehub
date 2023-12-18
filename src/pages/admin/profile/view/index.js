import React from 'react';
import { Core, } from '../../../../components';
import adminData from '../../../../data/adminData.json';
import { Breadcrumb, } from '../../../../components/core';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "View Profile" },
];

function ViewProfile() {
    const { profile } = adminData; 
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
