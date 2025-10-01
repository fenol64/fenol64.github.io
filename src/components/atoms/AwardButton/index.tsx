import React from "react";

interface AwardButtonProps {
  href: string;
  children: React.ReactNode;
}

const AwardButton: React.FC<AwardButtonProps> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 rounded font-medium transition bg-blue-600 text-white hover:bg-blue-700"
  >
    {children}
  </a>
);

export default AwardButton;
