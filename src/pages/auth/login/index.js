import React from 'react';
import { NavLink } from "react-router-dom";
import { AuthLayout, Core } from '../../../components';
import image from "../../../assets/images/logo/logo.png";
import { Switch } from 'antd';

function LoginPage() {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <AuthLayout>
            <img src={image} className='w-[360px]' />
            <h1 className='text-black-3 text-[42px] leading-[57px] tracking-[0.5px] font-regular'>
                Welcome to  Hirehub, <br />
                Sign in to Continue
            </h1>
            <form className="flex flex-col gap-y-14 max-w-[600px] mb-3">
                <div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="email" className="py-5" bgGray />
                    </div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="password" className="py-5" bgGray />
                    </div>
                    <div className="flex justify-between items-center pt-1">
                        <div className='flex justify-start items-center gap-x-1'>
                            <Switch className="ant-switch" defaultChecked onChange={onChange} />
                            <span>Remember Me</span>
                        </div>
                        <a className='text-gray-6 text-[14px] mb-2'>
                            <NavLink to="/forgot-password">
                                Forgot Password?
                            </NavLink>
                        </a>
                    </div>
                </div>
                <Core.Button className="text-[18px] leading-[20px] rounded-full py-[18px]">Sign in</Core.Button>
                <p className='text-gray-6 text-[18px] leading-[24px]'>
                    Don't have an account? <a className='text-purple-1 underline'><NavLink to="/register">create an account</NavLink></a>
                    <br />
                    It will take less than a minute.
                </p>
            </form>
        </AuthLayout>
    )
}

export default LoginPage