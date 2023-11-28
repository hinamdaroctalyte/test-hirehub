import React from 'react';
import { Badge, Breadcrumb, StatsGroup } from '../../../../components/core';
import avatar1 from "../../../../assets/images/avatars/2.png";
import { Pagination, Space, Table, Tag } from 'antd';
import Icon from '../../../../components/icon';
import TableB from '../../../../components/table/TableB';

const breadcrumb = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Manage Employers" },
];


// sdfdf
function ManageEmployers() {
    const statsData = [
        {
            title: "Approved Employers",
            count: "20",
            iconName: "People",
            link: "/admin/approved-employees"
        },
        {
            title: "Employer’s Request",
            count: "50",
            iconName: "Users",
            link: "/admin/employers-request"
        },
        {
            title: "Rejected Employers",
            count: "10",
            iconName: "ProfileDelete",
        },
        
    ];

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
        window.location.href = "/admin/manage-employers/view";
        // push(
        //   {
        //     pathname: "/departments/view",
        //     // query: { type: "view", id },
        //     query: { id },
        //   },
        //   undefined,
        //   {
        //     shallow: true,
        //   }
        // );
    };
    const onEditClick = (id) => {
        console.log("onEditClick", id)
        window.location.href = "/admin/manage-employers/edit";
        console.log("onEditClick 2",)
        // push(
        //   {
        //     pathname: "/departments/edit",
        //     // query: { type: "edit", id },
        //     query: { id },
        //   },
        //   undefined,
        //   {
        //     shallow: true,
        //   }
        // );
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
                data={data}
                filterBy={["SearchByName", "SearchByTitle"]}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onMessageClick={onMessageClick}
            />
        </>
    );
}

export default ManageEmployers;
