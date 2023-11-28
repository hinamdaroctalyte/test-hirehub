import React from 'react';
import { Breadcrumb,  } from '../../../../components/core';
import { Table } from '../../../../components';
import avatar1 from "../../../../assets/images/avatars/2.png";
import TableB from '../../../../components/table/TableB';

const _columns = ["name", "plans", "payment", "nextPayment", "account", "action"];
const _employees = [
    {
        id: "1",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Silver Plan",
        payment: true,
        nextPayment: "10/19/25 5:45am",
        account: 'active',
    },
    {
        id: "2",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Browns Plan",
        payment: true,
        nextPayment: "10/19/25 5:45am",
        account: 'active',
    },
    {
        id: "3",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Platinum Plan",
        payment: false,
        nextPayment: "10/19/25 5:45am",
        account: 'deactive',
    },
    {
        id: "4",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Silver Plan",
        payment: false,
        nextPayment: "10/19/25 5:45am",
        account: 'deactive',
    },
    {
        id: "5",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        plans: "Elite Professional Plan",
        payment: true,
        nextPayment: "10/19/25 5:45am",
        account: 'hold',
    },
];
const _actions = {
    view: true,
    edit: true,
    message: true,
};

const breadcrumb = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Manage Employers" },
    { label: "Approved Employers" },
];

function ApprovedEmployers() {
    const columns = [
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
    const data = [
        {
            key: '1',
            name: {
                img: avatar1,
                name: "Handmade Pouch",
            },
            payment: 'paid',
            nextPayment: '10/19/25 5:45am',
            plans: 'Silver Plan',
            account: 'active',
        },
        {
            key: '2',
            name: {
                img: avatar1,
                name: "Handmade Pouch",
            },
            payment: 'unpaid',
            nextPayment: '10/19/25 5:45am',
            plans: 'Browns Plan',
            account: 'Deactive',
        },
        {
            key: '3',
            name: {
                img: avatar1,
                name: "Handmade Pouch",
            },
            payment: 'paid',
            nextPayment: '10/19/25 5:45am',
            plans: 'Platinum Plan',
            account: 'hold',
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
                heading="Approved Employers"
                breadcrumb={breadcrumb}
            />
            {/* <Table
                // actionButton={{
                //     name: "Add Department",
                //     link: "/departments/add",
                // }}
                // id="employees-listing"
                data={_employees}
                columns={_columns}
                filterBy={["SearchByName", "SearchByTitle"]}
                actions={actions}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
            // shadow
            // title="Manage Roles"
            // setTableFilters={setTableFilters}
            // dropdwonOptions={dropdwonOptions}
            // manageRoles
            // isLoading={isLoading}
            /> */}
            {/* ------- */}
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

export default ApprovedEmployers;
