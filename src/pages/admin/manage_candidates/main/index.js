import React, { useState } from 'react';
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
        sorter: true,
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
        sorter: true,
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
        eligibility: "Yes",
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
        employer: "Citi Group",
        eligibility: "Yes",
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
        eligibility: "No",
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
        eligibility: "No",
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
        eligibility: "No",
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
        eligibility: "No",
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

function MainCandidates() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [employer, setEmployer] = useState("");
    const [eligibility, setEligibility] = useState("");
    const [appliedDate, setAppliedDate] = useState("");
    const [candidateStage, setCandidateStage] = useState("");
    const [userStatus, setUserStatus] = useState("");

    const onViewClick = (id) => {
        window.location.href = `/admin/manage-candidates/view/${id}`;
    };
    const onEditClick = (id) => {
        window.location.href = `/admin/manage-candidates/edit/${id}`;
    };
    const onMessageClick = (id) => {
        window.location.href = `/admin/manage-candidates/schedule/${id}`;
    };

    console.log("name", name);
    console.log("title", title);
    console.log("employer", employer);
    console.log("eligibility", eligibility);
    console.log("appliedDate", appliedDate);
    console.log("candidateStage", candidateStage);
    console.log("userStatus", userStatus);

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
                filterBy={[
                    "SearchByName",
                    "SearchByTitle",
                    "SearchByEmployer",
                    "SearchByEligibility",
                    "SearchByAppliedDate",
                    "SearchByCandidateStage",
                    "SearchByUserStatus",
                ]}
                setName={setName}
                setTitle={setTitle}
                setEmployer={setEmployer}
                setEligibility={setEligibility}
                setAppliedDate={setAppliedDate}
                setCandidateStage={setCandidateStage}
                setUserStatus={setUserStatus}
                actions={actions}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                onMessageClick={onMessageClick}
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

export default MainCandidates;
