import React from 'react';

const TermsSection = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}

export default TermsSection;