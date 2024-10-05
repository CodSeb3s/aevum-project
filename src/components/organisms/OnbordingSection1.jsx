import React from 'react';

// Assets
import aevumAccessPassImage from '../../assets/images/Aevum_Access_Pass.png';

// Components
import { BackgroundImage, BlurEffect, GlowEffect, GoogleButton, LoginButton } from '../atoms';
import Form from '../molecules/Form';


const OnbordingSection1 = () => {
  return (
    <section className="flex items-center justify-center w-full h-full text-left relative bg-black p-6 overflow-hidden">
      <BackgroundImage src={aevumAccessPassImage} alt="Aevum Access Pass" className={"absolute top-0 w-[216px] z-0"} />
      <BlurEffect />
      <div className="flex flex-col items-center w-full z-20 gap-[195px]">
        <div className='flex flex-col items-center gap-6 w-full max-w-[350px] tablet:max-w-[434px]'>
          <div className="flex flex-col items-center justify-center text-center w-full gap-3">
            <h1 className="w-full bg-gradient-to-r from-[#B9DCFF] to-[#0C5EFF] text-transparent bg-clip-text text-[32px] tablet:text-[48px] font-semibold leading-[38.72px] tablet:leading-[58.09px] tracking-[-0.03em] shadow-custom-h1">
              Welcome to Aevum
            </h1>
            <p className="w-full text-[#FFFFFFA6] shadow-custom-p text-[12px] tablet:text-[14px] font-light leading-[18.6px] tablet:leading-[21.7px] text-center max-w-[260px] tablet:max-w-[320px]">
              Thank you for choosing Aevum, to start enjoying
              the benefits, let’s setup your account.
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
              <Form />
          </div>
          <GoogleButton />
          <LoginButton />
        </div>
      </div>
      <div className="fixed bottom-[48px] flex flex-col gap-[25px] z-20">
        <div
          style={{
            border: '1px solid',
            borderImageSource: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.05) 100%)',
            borderImageSlice: 1,
          }}
          className="w-full"
        ></div>
        <span className="text-[#FFFFFF] font-light text-sm leading-[16.94px]">
          <span className="opacity-25">By signing up, you agree to our&nbsp;</span>
          <a
            href="/terms-of-service"
            className="font-light text-[#FFFFFF] opacity-100 hover:text-[#FFFFFF] hover:underline"
          >
            Terms of Service
          </a>
        </span>
      </div>
      <GlowEffect />
    </section>
  );
};

export default OnbordingSection1;
