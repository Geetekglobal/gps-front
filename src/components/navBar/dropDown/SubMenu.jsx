import React, { useState } from 'react';

const SubMenu = ({ label, nestedItems }) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="text-gray-700 group-hover:text-gray-900 px-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>

      {isOpen && nestedItems && (
        <div className="absolute left-full top-0 mt-2 space-y-2">
          {nestedItems.map((nestedItem) => (
            <SubMenu key={nestedItem.label} label={nestedItem.label} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SubMenu