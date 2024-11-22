import React from "react";

const WorkSelect = ({
  text,
  setValue,
  isSelected,
}: {
  text: string;
  setValue: (value: string) => void;
  isSelected: boolean;
}) => {
  return (
    <div
      onClick={() => setValue(text)}
      className={
        !isSelected
          ? "md:w-1/3 px-20 py-4 text-center cursor-pointer hover:bg-skillC"
          : "md:w-1/3 px-20 py-4 text-center cursor-pointer bg-skillC"
      }
    >
      {text}
    </div>
  );
};

export default WorkSelect;
