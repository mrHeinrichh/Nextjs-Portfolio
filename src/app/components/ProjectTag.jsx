import React from "react";

const ProjectTag = ({ name, onClick, isSelected, link }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    } else {
      onClick(name);
    }
  };

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
