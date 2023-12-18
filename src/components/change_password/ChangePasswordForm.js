
import { Core } from '..';

function ChangePasswordForm() {
    return (
        <Core.Card w840 border>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Change Password</h5>
            <div className="mb-4">
                <Core.InputWithLabel name={"oldPassword"} label required />
            </div>
            <div className="mb-4">
                <Core.InputWithLabel name={"newPassword"} label required />
            </div>
            <div className="mb-4">
                <Core.InputWithLabel name={"confirmPassword"} label required />
            </div>
            <div className='flex justify-start gap-x-3'>
                <Core.Button
                    // onClick={handleNext}
                    type="narrow">Submit</Core.Button>
                <Core.Button
                    // onClick={handleBack} 
                    type="narrow" color="white">Cancel</Core.Button>
            </div>
        </Core.Card>
    )
}

export default ChangePasswordForm