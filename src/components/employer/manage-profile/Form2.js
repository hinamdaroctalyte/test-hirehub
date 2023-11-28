import React from 'react';
import Icon from '../../icon';
import { Core } from '../..';


function Form2() {
    const companysIndustrys = [
        { name: "Option1", value: "option1" },
        { name: "Option2", value: "option2" },
        { name: "Option3", value: "option3" },
    ]
    return (
        <Core.Card w840 boder>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Create an Employer Account</h5>
            <div class="mb-4">
                <Core.SelectWithLabel name={"YourCompanysIndustry"} label required
                    options={companysIndustrys}
                />
            </div>
            <div class="mb-4">
                <Core.TextAreaWithLabel name={"companyDiscription"} label helperText={"Adding a company description to a job posting can attract candidates who share the organization's values and vision"} />
            </div>
        </Core.Card>
    )
}

export default Form2
