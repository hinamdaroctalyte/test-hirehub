import React from 'react';
import { AuthLayout, Core } from '../../../components';
import image from "../../../assets/images/logo/logo.png";

function NewPasswordPage() {
    // const onChange = (checked) => {
    //     console.log(`switch to ${checked}`);
    // };
    return (
        <AuthLayout>
            <img src={image} className='w-[360px]' />
            <h1 className='text-black-3 text-[42px] leading-[57px] tracking-[0.5px] font-regular'>
                New Password
            </h1>
            <form className="flex flex-col gap-y-9 max-w-[600px] mb-3 mt-5">
                {/* <p className='text-black-3 text-[22px] leading-[30px]'>
                    No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                </p> */}
                <div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="newPassword" className="py-5" bgGray />
                    </div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="confirmPassword" className="py-5" bgGray />
                    </div>
                </div>
                <Core.Button className="text-[18px] leading-[20px] py-[18px]">Submit</Core.Button>
                {/* <p className='text-gray-6 text-[18px] leading-[24px]'>
                    <a><NavLink to="/register"> Back to login </NavLink></a>
                </p> */}
            </form>
        </AuthLayout>
    )
}

export default NewPasswordPage