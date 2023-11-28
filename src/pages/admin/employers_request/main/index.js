import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Table } from '../../../../components';
import companyLogo1 from "../../../../assets/images/company-logos/5.png";
import companyLogo2 from "../../../../assets/images/company-logos/4.png";
import companyLogo3 from "../../../../assets/images/company-logos/7.png";
import TableB from '../../../../components/table/TableB';

const breadcrumb = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Manage Employers" },
    { label: "Employer's Request" },
];

function MainEmployersRequest() {
    const columns = [
        {
            title: 'Employer Name',
            dataIndex: 'employerName',
            key: 'employerName',
            sorter: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: true,
        },
        {
            title: 'Account Status',
            dataIndex: 'accountStatus',
            key: 'accountStatus',
            sorter: true,
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
        },
    ];
    const data = [
        {
            key: '1',
            employerName: {
                img: companyLogo1,
                name: "Tesla",
            },
            email: 'email@email.com',
            accountStatus: 'pending',
        },
        {
            key: '2',
            employerName: {
                img: companyLogo2,
                name: "Wells Fargo",
            },
            email: 'email@email.com',
            accountStatus: 'pending',
        },
        {
            key: '3',
            employerName: {
                img: companyLogo3,
                name: "General Electric",
            },
            email: 'email@email.com',
            accountStatus: 'pending',
        },
    ];
    const onViewClick = (id) => {
        console.log("onViewClick", id)
        window.location.href = "/admin/approved-employees/view";
    };
    const onEditClick = (id) => {
        console.log("onEditClick", id)
        window.location.href = "/admin/approved-employees/edit";
    };
    const onMessageClick = (id) => {
        console.log("onMessageClick", id)
    };
    return (
        <>
            <Breadcrumb
                heading="Employer's Request"
                breadcrumb={breadcrumb}
            />
            <TableB
                columns={columns}
                data={data}
                filterBy={["SearchByName", "SearchByTitle"]}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onMessageClick={onMessageClick}
            />
        </>
    );
}

export default MainEmployersRequest;
