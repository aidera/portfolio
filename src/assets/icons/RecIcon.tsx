import { SVGProps } from 'react';

const RecIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx="12" cy="12" r="11" fill="#FF0000" />
      <circle
        cx="12"
        cy="12"
        r="11.9007"
        stroke="#FF0000"
        strokeWidth="0.198572"
      />
      <rect x="8" y="8" width="8" height="8" fill="white" />
    </svg>
  );
};

export default RecIcon;
