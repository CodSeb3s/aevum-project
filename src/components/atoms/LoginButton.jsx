import React from 'react';

const LoginButton = () => {
  const handleLoginRedirect = () => {
    window.location.href = '/login'; // Mock
  };

  return (
    <button
      onClick={handleLoginRedirect}
      className="text-[12px] tablet:text-sm font-normal leading-[14.52px] tablet:leading-[16.94px] text-white text-left text-opacity-55 py-[10px]"
    >
      Login Instead? Click here
    </button>
  );
};

export default LoginButton;
