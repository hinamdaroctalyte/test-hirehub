import React from 'react';
import { Core, } from '../../../components';
import Icon from '../../../components/icon';

function ManageProfileCandidate() {


    return (
        <div className='flex justify-between gap-x-6 w-full'>
            <div className='w-[70%] border'>
                <Core.Card>
                    <div className='flex justify-between items-start'>
                        <h5>Personal Information</h5>
                        <span className="flex justify-center items-center w-[35px] h-[35px] bg-gray-7 rounded-full"><Icon name="PencilWithLine" /></span>
                    </div>
                    <div className='flex justify-start items-start'>
                        <div className='w-[20%]'>50%</div>
                        <div className='w-[80%]'>
                            <h6 className='text-[22px] leading-[20px] font-semibold mb-3'>John Francois</h6>
                            <p className='text-gray-6 text-[14px] leading-[20px]'>Design Lead | Author of the "Design Manual" and the "Ultimate Guide to Web Design" | Teaching 300,000+ Designers Worldwide</p>
                            <p className='flex justify-start gap-x-6 text-gray-6 text-[14px] leading-[20px] mt-5'>
                                <span className='flex justify-start gap-x-1'>
                                    +1 215-538-6957 <Icon name="Lock1" />
                                </span>
                                <span className='flex justify-start gap-x-1'>
                                    MichaelJFuller@rhyta.com <Icon name="Lock1" />
                                </span>
                            </p>
                        </div>
                        <div>





                        </div>
                    </div>
                </Core.Card>
            </div>
            <div className='w-[30%] border'>
                <Core.Card>card</Core.Card>
            </div>
        </div>
    );
}

export default ManageProfileCandidate;
