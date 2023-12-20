import React from 'react';
import { Core, } from '../../../components';
import Icon from '../../../components/icon';
import avatar1 from '../../../assets/images/avatars/3.png';

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
                        <div className='w-[22%] pr-8'>
                            <span className='text-gray-6 text-[18px] font-semibold'>
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
