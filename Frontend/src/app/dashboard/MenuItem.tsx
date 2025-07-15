import React from 'react';

type MenuItemProps = {
  label: string;
  icon: React.ReactNode;
  active: string;
  onClick: (label: string) => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ label, icon, active, onClick }) => {
  const isActive = active === label;

  return (
    <button
      onClick={() => onClick(label)}
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
};

export default MenuItem;
