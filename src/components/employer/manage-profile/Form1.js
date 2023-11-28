import React from 'react';
import Icon from '../../icon';
import { Core } from '../..';

function Form1() {
    const numberOfEmployeesOptions = [
        { name: "10-20", value: "10-20" },
        { name: "12-30", value: "20-30" },
        { name: "30-50", value: "30-50" },
        { name: "50-100", value: "50-100" },
        { name: "100-200", value: "100-200" },
        { name: "200-300", value: "200-300" },
        { name: "Over 300", value: "Over 300" },
    ]
    return (
        <Core.Card w840 border>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Create an Employer Account</h5>
            <div class="mb-4">
                <Core.InputWithLabel name={"YourCompanysName"} label required />
            </div>
            <div class="mb-4">
                <Core.SelectWithLabel name={"numberofEmployees"} label
                    options={numberOfEmployeesOptions}
                />
            </div>
            <div class="mb-4">
                <Core.UploadFile name={"logo"} label helperText={"A company logo helps candidates connect the job opportunity with your brand. Recommended specs are 400x400 pixels."}
                    accept="image/*"
                />
            </div>
            <div class="mb-4">
                <Core.UploadFile name={"welcomeVideo"} label helperText={"A company logo helps candidates connect the job opportunity with your brand. Recommended specs are 400x400 pixels."}

                    accept="video/*"
                />
            </div>
            <div class="mb-4">
                <Core.InputWithLabel name={"YourPhoneNumber"} label helperText="We will use this number to text you important notifications" />
            </div>
        </Core.Card>
    )
}

export default Form1
