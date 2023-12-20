import React from 'react';
import { Core, } from '../../../components';
import Icon from '../../../components/icon';
import avatar1 from '../../../assets/images/avatars/3.png';
import logo1 from "../../../assets/images/company-logos/logo1.png";
import logo2 from "../../../assets/images/company-logos/logo2.png";
import { calculateTimePeriod } from '../../../utilis/calculateTimePeriod';

function ManageProfileCandidate() {
    const experience = [
        {
            title: "Art Director",
            company: "Art Director",
            startDate: "Nov 2015 - Present · 7 yrs 7 mos",
            description: "Over the last couple of years I've worked on 10+ projects across different fields among which are MVPs for start-ups, cosmetics & beauty industry, e-commerce, art & architecture, photography and others.",
        }
    ]
    const education = [
        {
            degree: "Kharkiv National University of Construction and Architecture",
            school: "Sochnik Design Thinking School",
            startDate: "Nov 2015 - Present · 7 yrs 7 mos",
            description: "Over the last couple of years I've worked on 10+ projects across different fields among which are MVPs for start-ups, cosmetics & beauty industry, e-commerce, art & architecture, photography and others.",
        }
    ]
    const skill = [
        {
            addNewSkills: "React Js",
        }
    ]
    const language = [
        {
            addNewLanguage: "Spanish",
            proficiency: "Intermediate",
        }
    ]


    const jobPreference = {
        desiredJobTitle: ["abc", 'xyz'],
        desiredSalary: 20000,
        relocation: {
            anywhere: true,
            onlyNearMe: { locations: ['kjlk'] }
        },
        desiredSalary: 50000,
        skills: ["Angular Js"],
        onlyNearMeonlyNearMe: "",
    }



    return (
        <div className='flex justify-between gap-x-6 w-full'>
            <div className='w-[70%]'>
                <div className='flex flex-col gap-y-5'>
                    {/* personal information */}
                    <Core.Card className={"min-h-[230px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-medium'>Personal Information</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] bg-gray-7 rounded-full"><Icon name="PencilWithLine" /></span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            <div className='flex flex-col justify-center items-center w-[22%] pr-8'>
                                <span className='text-gray-6 text-[18px] font-semibold pl-2'>
                                    50%
                                </span>
                                <div class="relative rounded-full overflow-hidd en w-[120px] h-[120px] px-[0.30rem] pt-[0.25rem] pb-[0.30rem]">
                                    <img src={avatar1} alt="Avatar" class="relative z-[1] w-full h-full object-cover rounded-full" />
                                    <div class="absolute top-0 right-0 -z-1 w-[50%] h-[100%] rounded-tl-[5px] rounded-tr-[100px] rounded-bl-[5px] rounded-br-[100px] bg-green-5 border-[7px] border-green-5"></div>
                                </div>
                            </div>
                            <div className='w-[80%]'>
                                <h6 className='text-[22px] leading-[20px] font-semibold mb-3'>John Francois</h6>
                                <p className='text-gray-6 text-[14px] leading-[20px]'>Design Lead | Author of the "Design Manual" and the "Ultimate Guide to Web Design" | Teaching 300,000+ Designers Worldwide</p>
                                <p className='flex justify-start gap-x-6 text-gray-6 text-[14px] leading-[20px] mt-5'>
                                    <span className='flex justify-start gap-x-1'>
                                        +1 215-538-6957 <span className='opacity-75'><Icon name="Lock1" /></span>
                                    </span>
                                    <span className='flex justify-start gap-x-1'>
                                        MichaelJFuller@rhyta.com <span className='opacity-75'><Icon name="Lock1" /></span>
                                    </span>
                                </p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </Core.Card>
                    {/* Summery */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-medium'>Summery</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] bg-gray-7 rounded-full"><Icon name="PencilWithLine" /></span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            <p className='text-gray-6 text-[14px] leading-[20px]'>
                                Including a summary in your job application provides a brief overview of your qualifications, skills, and career goals, helping recruiters assess your fit for the position.
                            </p>
                        </div>
                    </Core.Card>
                    {/* Projects */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-medium'>Projects</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] bg-gray-7 rounded-full"><Icon name="PencilWithLine" /></span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            <p className='text-gray-6 text-[14px] leading-[20px]'>
                                By adding a Projects section to your application, you can highlight your hands-on experience and demonstrate your potential value to hiring managers with concrete examples.
                            </p>
                        </div>
                    </Core.Card>
                    {/* Experience */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-medium'>Experience</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] bg-gray-7 rounded-full"><Icon name="PencilWithLine" /></span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            {experience.map((value, index) => {
                                return (
                                    <div key={index * 4} className='flex justify-between gap-x-3'>
                                        <div className='flex justify-center items-center w-[58px] h-[58px] bg-gray-7 rounded-[10px] overflow-hidden'>
                                            <img src={logo1} alt="company logo" />
                                        </div>
                                        <div className='w-full'>
                                            <div className='w-full h-full flex justify-between items-end'>
                                                <div>
                                                    <h6 className='text-[16px] leading-[20px] font-semibold'>{value.title}</h6>
                                                    <p className='text-black-3 text-[12px] leading-[20px] font-medium'>{value.company}</p>
                                                    <p className='text-gray-6 text-[12px] leading-[20px]'>{calculateTimePeriod(value.startDate, "present")}</p>
                                                    <p className='text-gray-6 text-[14px] leading-[20px] mt-4'>
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Core.Card>
                    {/* Education */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-medium'>Education</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] bg-gray-7 rounded-full"><Icon name="PencilWithLine" /></span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            {education.map((value, index) => {
                                return (
                                    <div key={index * 5} className='flex justify-between gap-x-3'>
                                        <div className='flex justify-center items-center w-[58px] h-[58px] bg-gray-7 rounded-[10px] overflow-hidden'>
                                            <img src={logo2} alt="company logo" />
                                        </div>
                                        <div className='w-full'>
                                            <div className='w-full h-full flex justify-between items-end'>
                                                <div>
                                                    <h6 className='text-[16px] leading-[20px] font-semibold'>{value.degree}</h6>
                                                    <p className='text-black-3 text-[12px] leading-[20px] font-medium'>{value.school}</p>
                                                    <p className='text-gray-6 text-[12px] leading-[20px]'>{calculateTimePeriod(value.startDate, "present")}</p>
                                                    <p className='text-gray-6 text-[14px] leading-[20px] mt-4'>
                                                        {value?.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Core.Card>
                    {/* Skill */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-medium'>Skill</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] bg-gray-7 rounded-full"><Icon name="PencilWithLine" /></span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            {skill.map((value, index) => {
                                return (
                                    <p key={index * 6} className='text-black-3 text-[14px] leading-[20px] bg-gray-4 rounded-full font-medium px-3 py-2'>{value.addNewSkills}</p>
                                )
                            })}
                        </div>
                    </Core.Card>
                    {/* Language */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-medium'>Language</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] bg-gray-7 rounded-full"><Icon name="PencilWithLine" /></span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>
                            {language.map((value, index) => {
                                return (
                                    <div key={index * 7} className={`w-full ${index === 0 ? 'mt-3' : 'mt-2'}`}>
                                        <h6 className='text-[16px] leading-[20px] font-semibold'>{value?.addNewLanguage}</h6>
                                        <p className='text-black-3 text-[12px] leading-[20px]'>{value?.proficiency}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </Core.Card>
                    {/* Job Preferences */}
                    <Core.Card className={"min-h-[140px] pb-8"}>
                        <div className='flex justify-between items-start'>
                            <h5 className='text-black-1 text-[18px] leading-[28px] font-medium'>Job Preferences</h5>
                            <span className="flex justify-center items-center w-[35px] h-[35px] bg-gray-7 rounded-full"><Icon name="PencilWithLine" /></span>
                        </div>
                        <div className='flex justify-start items-end pt-3'>










                            <p className='text-gray-6 text-[14px] leading-[25px]'>
                                Help us match you with your next job
                            </p>
                            {
                                (!jobPreference.desiredJobTitle.length &&
                                    jobPreference.desiredSalary === "" &&
                                    jobPreference.relocation === "" &&
                                    !jobPreference.skills.length)
                                &&
                                <p className='text-gray-6 text-[14px] leading-[25px]'>
                                    No job preference found
                                </p>
                            }
                            {jobPreference.desiredJobTitle.length &&
                                <div className='w-full mt-3'>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Job Title</h6>
                                    {jobPreference.desiredJobTitle.map((value, index) => {
                                        return (
                                            <p key={index * 8} className='text-black-3 text-[12px] leading-[20px] font-medium'>{value}
                                            </p>
                                        )
                                    })}
                                </div>
                            }
                            {jobPreference.desiredSalary !== "" &&
                                <div className='w-full mt-2'>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Salary (USD)</h6>
                                    <p className='text-black-3 text-[12px] leading-[20px]'>USD {jobPreference?.desiredSalary}</p>
                                </div>
                            }

                            {jobPreference.skills.length &&
                                <div className='w-full mt-2'>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Skills</h6>
                                    {jobPreference.skills.map((value, index) => {
                                        return (
                                            <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                                {value}{index !== (jobPreference.skills.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                </div>
                            }
                            {jobPreference.onlyNearMeonlyNearMe !== "" &&
                                <div className='w-full mt-2'>
                                    <h6 className='text-[16px] leading-[20px] font-semibold'>Desired Cities</h6>
                                    {jobPreference?.relocation?.anywhere !== true && jobPreference?.relocation?.onlyNearMe.locations.map((value, index) => {
                                        return (
                                            <span key={index * 9} className='text-black-3 text-[12px] leading-[20px]'>
                                                {value}{index !== (jobPreference?.relocation?.onlyNearMe?.locations.length - 1) && ", "}
                                            </span>
                                        )
                                    })}
                                    {jobPreference?.relocation?.anywhere === true &&
                                        <span className='text-black-3 text-[12px] leading-[20px]'>
                                            Anywhere
                                        </span>
                                    }
                                </div>
                            }












                        </div>
                    </Core.Card>
                </div>
            </div>
            <div className='w-[30%] border'>
                <Core.Card>card</Core.Card>
            </div>
        </div>
    );
}

export default ManageProfileCandidate;
