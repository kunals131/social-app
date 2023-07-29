import React, { useState } from 'react';

const TextTruncateExpand = ({ text, maxLength, ...props }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <span style={{ cursor: 'pointer' }} {...props} onClick={handleClick}>
      {text&&expanded
        ? text
        : text?.slice(0, maxLength) + (text?.length > maxLength ? '...' : '')}
    </span>
  );
};

export default TextTruncateExpand;
