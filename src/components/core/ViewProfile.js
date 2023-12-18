
import React, { useState } from 'react';
import { Core } from '..';
import imgUrgentlyRequired from "../../assets/images/urgently-required.png";
import { useParams } from 'react-router-dom';

function ViewProfile({ data }) {
    console.log("data", data)
    return (
        <Core.Card className={`py-[30px] px-[40px]`}>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-4'>View Profile</h5>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Your company's name<span className='text-[red]'>*</span>
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.companyName}
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Number of Employees
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.noOfEmployees}
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Logo
                </h6>
                <span className={`block max-w-[90px] text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    <img src={data?.logo} alt="Company Logo" />
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Welcome Video
                </h6>
                <span className={`block max-w-[180px] text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    <img src={data?.welcomeVideo} alt="Welcome Video" />
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Your Phone Number
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.phoneNo}
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Your company's industry<span className='text-[red]'>*</span>
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.companyIndustry}
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Company Description
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.description}
                </span>
            </div>

        </Core.Card>
    )
}

export default ViewProfile