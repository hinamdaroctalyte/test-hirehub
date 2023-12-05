import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Table } from '../../../../components';
import companyLogo1 from "../../../../assets/images/company-logos/5.png";
import companyLogo2 from "../../../../assets/images/company-logos/4.png";
import companyLogo3 from "../../../../assets/images/company-logos/7.png";
import TableB from '../../../../components/table/TableB';
import employersData from '../../../../data/employersData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers", link: "/admin/manage-employers" },
    { label: "Rejected Employers" },
];

const actions = {
    view: true,
    edit: true,
    delete: true,
};

function MainRejectedEmployers() {
    const columns = [
        {
            title: 'Employer Name',
            dataIndex: 'companyName',
            key: 'companyName',
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
    const { tableData } = employersData;
    const statusToFilter = 'rejected';
    const filteredData = tableData.filter(item => item.accountStatus === statusToFilter);
    const onViewClick = (id) => {
        window.location.href = `/admin/rejected-employers/view/${id}`;
    };
    const onEditClick = (id) => {
        window.location.href = `/admin/rejected-employers/edit/${id}`;
    };
    const onMessageClick = (id) => {
        console.log("onMessageClick", id)
    };
    return (
        <>
            <Breadcrumb
                heading="Rejected Employers"
                breadcrumb={breadcrumb}
            />
            <TableB
                columns={columns}
                data={filteredData}
                actions={actions}
                filterBy={["SearchByName", "SearchByTitle"]}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onMessageClick={onMessageClick}
            />
        </>
    );
}

export default MainRejectedEmployers;
