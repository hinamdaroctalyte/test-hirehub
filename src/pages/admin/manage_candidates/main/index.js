import React from 'react';
import { Table } from '../../../../components';
import { Breadcrumb, StatsGroup } from '../../../../components/core';
import avatar1 from "../../../../assets/images/avatars/2.png";

const columns = ["name", "jobTitle", "employer", "eligibility", "experience", "salary", "stage", "status", "action"];
const candidates = [
    {
        id: "1",
        name: {
            img: avatar1,
            name: "Handmade Pouch",
        },
        jobTitle: "Software Engineer",
        employer: "Tesla",
        eligibility: true,
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
        eligibility: true,
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
        eligibility: false,
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
        eligibility: false,
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
        eligibility: true,
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
        eligibility: true,
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
    { label: "Dashboard", link: "/dashboard" },
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
            <Table
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
