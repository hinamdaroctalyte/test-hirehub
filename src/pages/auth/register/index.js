import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { AuthLayout, Core } from '../../../components';
import image from "../../../assets/images/logo/logo.png";
import { Checkbox } from 'antd';
import { Radio } from 'antd';

function RegisterPage() {
    const [value, setValue] = useState(1);
    const [value1, setValue1] = useState('Apple');
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const onRadioChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const plainOptions = ['Candidate', 'Employer'];
    const onChange1 = ({ target: { value } }) => {
        console.log('radio1 checked', value);
        setValue1(value);
    };

    return (
        <AuthLayout>
            <img src={image} className='w-[360px]' />
            <h1 className='text-black-3 text-[32px] leading-[43px] tracking-[0.5px] font-regular'>
                Welcome to  Hirehub, <br />
                Sign up to Continue
            </h1>
            <form className="flex flex-col gap-y-9 max-w-[600px] mb-3">
                {/* <div>
                    <Radio.Group onChange={onRadioChange} value={value}>
                        <span className='border bg-white rounded-[4px] p-5 '>
                            <Radio value={1}>
                                Candidate
                            </Radio>
                        </span>
                        <Radio value={2}>Employer</Radio>
                    </Radio.Group>
                </div> */}


                <div>
                    <div className='py-3'>
                        <Radio.Group options={plainOptions} onChange={onChange1} value={value1}
                            size="large"
                            optionType="button"
                            buttonStyle="solid"
                        />
                    </div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="name" className="py-5" bgGray />
                    </div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="email" className="py-5" bgGray />
                    </div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="password" className="py-5" bgGray />
                    </div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="confirmPassword" className="py-5" bgGray />
                    </div>
                    <div className="flex justify-between items-center pt-1">
                        <div className='flex justify-start items-center gap-x-1'>
                            <Checkbox onChange={onChange}>
                                I agree to
                                <a className='text-purple-1'><NavLink to="#"> privacy policy & terms</NavLink></a>
                            </Checkbox>
                        </div>
                    </div>
                </div>
                <Core.Button className="text-[18px] leading-[20px] rounded-full py-[18px]">Sign Up</Core.Button>
                <p className='text-gray-6 text-[18px] leading-[24px]'>
                    Already have an account?
                    <a className='text-purple-1 underline'><NavLink to="/login"> Login</NavLink></a>
                </p>
            </form>
        </AuthLayout>
    )
}

export default RegisterPage