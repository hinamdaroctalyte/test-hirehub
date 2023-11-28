import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import companylogo1 from "../../../../assets/images/company-logos/logo4.png";

const breadcrumb = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Manage Employers" },
    { label: "Details" },
];

function ViewEmployers() {
    const companyProfileData = {
        logo: companylogo1,
        name: "Procter & Gamble",
        status: "Manufacturing  |  Cincinnati, Ohio  | Followers 7,611,760   |  Employees 85,464",
        overview: [
            "The design, development, growth and success of these products—and many more—is thanks to the innovative and insightful minds of our people. From Day 1, you’ll help make everyday life easier for our 5 billion consumers.",
            "There is no single equation for success at P&G, because no two P&G people or careers are alike. Just as we strive to deliver a superior consumer experience, we aim to deliver a superior employee value equation as well. With our large global footprint, there are many opportunities to work with P&G in multiple locations. We offer opportunities in approximately 70 countries and continually aim to attract, reward and advance the finest people in the world.",
            "Here, we want you to get your career off to a fast start. That's why we don't have any rotational development programs or gradual ramping-up periods: you’ll be able—and encouraged—to dive right in from Day 1. Join us and help make life better through meaningful work that makes an impact from Day 1.",
        ],
        videos: ["",],
        stats: [
            { title: "Company size", value: "85,464 employees " },
            { title: "Followers", value: "7,611,760 followers " },
            { title: "Status", value: "Activated" },
            { title: "Hired candidate", value: "23" },
            { title: "Published jobs count", value: "78" },
            { title: "Language", value: "English" },
            { title: "Website link", value: "www.us.pg.com" },
        ]
    }
    return (
        <>
            <Breadcrumb
                heading="Employers Details"
                breadcrumb={breadcrumb}
            />
            <Core.CompanyProfile data={companyProfileData} pageType="view" />
        </>
    );
}

export default ViewEmployers;
