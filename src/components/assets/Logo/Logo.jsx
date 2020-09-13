import * as React from "react";

const Logo = props => {
  return (
    <svg width={22} height={30} viewBox="0 0 22 30" fill="none" {...props}>
      <circle cx={9.5} cy={7.5} r={7.5} fill="#30D2F5" />
      <rect width={5} height={29} rx={2.5} fill="#30D2F5" />
      <rect
        x={0.065}
        y={11.633}
        width={5}
        height={24.834}
        rx={2.5}
        transform="rotate(-45.578 .065 11.633)"
        fill="#30D2F5"
      />
    </svg>
  );
};

export default Logo;
