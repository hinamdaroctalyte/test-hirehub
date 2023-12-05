import React from 'react';
import { Breadcrumb, StatsGroup } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
import employersData from '../../../../data/employersData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers" },
];

const actions = {
    view: true,
    edit: true,
    message: true,
};

function ManageEmployers() {
    const { statsData, tableData } = employersData;
    const _columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
        },
        {
            title: 'Plans',
            dataIndex: 'plans',
            key: 'plans',
            sorter: true,
        },
        {
            title: 'Payment',
            dataIndex: 'payment',
            key: 'payment',
        },
        {
            title: 'Next Payment',
            dataIndex: 'nextPayment',
            key: 'nextPayment',
        },
        {
            title: 'Account',
            key: 'account',
            dataIndex: 'account',
            sorter: true,
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
        },
    ];
    const onViewClick = (id) => {
        window.location.href = `/admin/manage-employers/view/${id}`;
    };
    const onEditClick = (id) => {
        window.location.href = `/admin/manage-employers/edit/${id}`;
    };
    const onMessageClick = (id) => {
        console.log("onMessageClick", id)
    };
    return (
        <>
            <Breadcrumb
                heading="Manage Employers"
                breadcrumb={breadcrumb}
            />
            <StatsGroup data={statsData} />
            <TableB
                columns={_columns}
                data={tableData}
                actions={actions}
                filterBy={["SearchByName", "SearchByTitle"]}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onMessageClick={onMessageClick}
            />
        </>
    );
}

export default ManageEmployers;
