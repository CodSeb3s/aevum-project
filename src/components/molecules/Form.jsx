import React, { useState } from 'react';

// Components
import { InputField, Button, Checkbox } from '../atoms';


const Form = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form className="relative flex flex-col justify-center items-center gap-6 w-full">
      <div className="relative flex flex-col h-[45px] w-full max-w-[350px]">
        <InputField
          type="email"
          placeholder="account email"
          value={email}
          onChange={handleEmailChange}
          className='w-full h-full max-w-[350px] px-[24px] py-[10px] rounded-[1500px] border border-[#FFFFFF2E] bg-[#FFFFFF26] opacity-100 focus:outline-none 
                 text-[14px] font-light leading-[16.94px] text-[#FFFFFFA6] text-left placeholder:text-[#FFFFFFA6] placeholder:opacity-25'
        />
        <Button label="Enter" />
      </div>
      <Checkbox
        id="check-with-link"
        checked={isChecked}
        onChange={handleCheckboxChange}
        textLabel={
          <>
            <span className='opacity-65'>I agree with the&nbsp;</span>
            <a
              href="#"
              className="font-light text-[#0C5EFF] opacity-100 hover:text-[#0C5EFF] hover:underline"
            >
              terms and conditions
            </a>
          </>
        }
      />
    </form>
  );
};

export default Form;
