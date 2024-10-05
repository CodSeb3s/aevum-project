import React from 'react';

const Checkbox = ({ id, checked, onChange, textLabel }) => {
  return (
    <div className="flex justify-center">
      <label className="flex items-center cursor-pointer relative" htmlFor={id}>
        {/* Parent span with conditional gradient background */}
        <span
          className={`flex items-center justify-center h-[15px] w-[15px] rounded-full p-px transition-all ${
            checked
              ? 'bg-[linear-gradient(178.78deg,#0C5EFF_1.04%,rgba(0,0,0,0)_154.51%)]'
              : 'bg-gradient-to-b from-[rgba(255,255,255,0.65)] to-[rgba(47,47,47,0.65)]'
          }`}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="peer h-[13px] w-[13px] cursor-pointer transition-all appearance-none rounded-full shadow bg-black hover:shadow-md checked:bg-transparent"
            id={id}
          />
        </span>
        {/* Checkmark icon */}
        {checked && (
          <span className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              width="6"
              height="5"
              viewBox="0 0 6 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[4.42px] w-[5.65px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.85273 0.895466L2.6862 4.85473L0.19873 2.7816L0.668064 2.2184L2.5806 3.81193L5.28073 0.437866L5.85273 0.895466Z"
                fill="white"
              />
            </svg>
          </span>
        )}
      </label>
      <label className="cursor-pointer ml-2 font-light text-white text-sm" htmlFor={id}>
        <p>{textLabel}</p>
      </label>
    </div>
  );
};

export default Checkbox;
