import React from 'react';
import { Table } from '../../../../components';
import { Breadcrumb, StatsGroup } from '../../../../components/core';
import avatar1 from "../../../../assets/images/avatars/2.png";
import TableB from '../../../../components/table/TableB';

// const columns = ["name", "jobTitle", "employer", "eligibility", "experience", "salary", "stage", "status", "action"];
const columns = [
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
    }, {
        title: 'Job Title',
        key: 'jobTitle',
        dataIndex: 'jobTitle',
    }, {
        title: 'Employer',
        key: 'employer',
        dataIndex: 'employer',
    }, {
        title: 'Eligibility',
        key: 'eligibility',
        dataIndex: 'eligibility',
    }, {
        title: 'Experience',
        key: 'experience',
        dataIndex: 'experience',
    }, {
        title: 'Salary',
        key: 'salary',
        dataIndex: 'salary',
    }, {
        title: 'Stage',
        key: 'stage',
        dataIndex: 'stage',
    }, {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
    }, {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
    },
];
const candidates = [
    {
        id: "1",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        jobTitle: "Software Engineer",
        employer: "Tesla",
        eligibility: "Paid",
        experience: "3.6 years",
        salary: "20,000",
        stage: "New Application",
        status: "New",
    },
    {
        id: "2",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        jobTitle: "Software Engineer",
        employer: "Wells Fargo",
        eligibility: "Paid",
        experience: "10 Years",
        salary: "1000 ",
        stage: "Screening",
        status: "Attempted to Contact",
    },
    {
        id: "3 ",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        jobTitle: "Software Engineer",
        employer: "Amazon",
        eligibility: "Unpaid",
        experience: "7 Years",
        salary: "12,000",
        stage: "Job Offer",
        status: "Qualified",
    },
    {
        id: "4",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        jobTitle: "Software Engineer",
        employer: "The Home Depot",
        eligibility: "Unpaid",
        experience: "6 years",
        salary: "6500",
        stage: "Hire",
        status: "Not Interested",
    },
    {
        id: "5",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        jobTitle: "Software Engineer",
        employer: "Tesla",
        eligibility: "Unpaid",
        experience: "3.6 years",
        salary: "20,000",
        stage: "New Application",
        status: "New",
    },
    {
        id: "6",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        jobTitle: "Software Engineer",
        employer: "Wells Fargo",
        eligibility: "Unpaid",
        experience: "10 Years",
        salary: "1000 ",
        stage: "Screening",
        status: "Attempted to Contact",
    },

];
const actions = {
    view: true,
    edit: true,
    date: true,
};

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates" },
];

function ManageCandidates() {
    const statsData = [
        {
            title: "Approved Employers",
            count: "20",
            iconName: "People",
        },
        {
            title: "Employer’s Request",
            count: "50",
            iconName: "Users",
        },
        {
            title: "Rejected Employers",
            count: "10",
            iconName: "ProfileDelete",
        },
    ];

    const onViewClick = (id) => {
        console.log("onViewClick", id)
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
    const onDeleteClick = (id) => {
        console.log("onDeleteClick", id)
    };

    return (
        <>
            <Breadcrumb
                heading="Manage Candidates"
                breadcrumb={breadcrumb}
            />
            <TableB
                // actionButton={{
                //     name: "Add Department",
                //     link: "/departments/add",
                // }}
                // id="employees-listing"
                data={candidates}
                columns={columns}
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
            />
        </>
    );
}

export default ManageCandidates;
