import React from "react";

const InputField = ({ label, type, mandatory }: { label: string; type: string; mandatory: boolean }) => {
  const labelInput = label.toLowerCase();
  return (
    <div className="flex flex-col">
      <label htmlFor={labelInput}>{label}{mandatory && (<span className="text-red-500">*</span>)}</label>
      <input
        type={type}
        name={labelInput}
        id={labelInput}
        className="border-gray-300 p-1 border-solid border-b-2 h-10 focus:outline-none"
        required={mandatory ? true : false}
      />
    </div>
  );
};

export default InputField;
