import React from 'react'

const TextArea = ({ label, mandatory, rows, cols}: { label: string; mandatory: boolean; rows: number; cols: number }) => {
  const labelInput = label.toLowerCase().replace(" ", "_");
  return (
    <div className="flex flex-col">
      <label htmlFor={labelInput}>{label}{mandatory && (<span className="text-red-500">*</span>)}</label>
      <textarea
        name={labelInput}
        id={labelInput}
        className="border-gray-300 p-1 border-solid border-2 focus:outline-none text-dark"
        rows={rows}
        cols={cols}
        required={mandatory ? true : false}
      />
    </div>
  )
}

export default TextArea