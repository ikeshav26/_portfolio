import React from 'react';

const DiscordIcon = ({ size = 22, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect width="24" height="24" rx="6" fill="#5865F2" />
    <path d="M7.5 8.5c0 0 1-1 3-1s3 1 3 1" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 14.2c1.2.8 2.8 1.3 5 1.3s3.8-.5 5-1.3" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="11" r="0.9" fill="#FFFFFF" />
    <circle cx="15" cy="11" r="0.9" fill="#FFFFFF" />
  </svg>
);

export default DiscordIcon;
